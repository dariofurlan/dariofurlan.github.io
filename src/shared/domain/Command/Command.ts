/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from "mobx";
import ICommand, { ARGS, DATA, Fun } from "./ICommand";
import Publisher from "../Observer/Publisher";


export async function observePromise<T extends Fun>(fn: T, args: ARGS<T>, onbegin: () => void, onload: (d: DATA<T>) => void, onerror: (err: any) => void): Promise<DATA<T>> {
    try {
        onbegin();
        const data = await fn(...args);
        onload(data);
        return data;
    } catch (err) {
        onerror(err);
        throw err;
    }
}

export default class Command<F extends Fun> implements ICommand<F> {
    public readonly args: ARGS<F>;
    public readonly f: F;

    public readonly success = new Publisher<[DATA<F>]>();
    public readonly failure = new Publisher<any>();

    protected _busy: boolean;
    protected _loaded: boolean;
    protected _failed: boolean;
    protected _promise: Promise<DATA<F>> | null;
    protected _data: DATA<F> | null;
    protected _err: any;
    protected _ts: number;

    protected constructor(loadFn: F, args: ARGS<F>) {
        this.args = args;
        this.f = loadFn;

        this._busy = false;
        this._loaded = false;
        this._failed = false;
        this._promise = null;
        this._data = null;
        this._err = null;
        this._ts = Infinity;

        makeAutoObservable<this>(this, {
            success: false,
            failure: false,
            on: false,
        }, { autoBind: true })
    }

    public get isBusy(): boolean {
        return this._busy;
    }

    public get isSuccess(): boolean {
        return this._loaded;
    }

    public get isFailure(): boolean {
        return this._failed;
    }

    get isEnded(): boolean {
        return this.isSuccess || this.isFailure;
    }

    get result(): DATA<F> | null {
        return this._data;
    }

    get error(): any {
        return this._err;
    }

    get execute_at(): number {
        return this._ts;
    }

    get hasResult(): boolean { // this is Command<F> & { result: DATA<F> }
        return this._data !== null;
    }

    on(type: "succeed", listener: (data: DATA<F>) => void): () => void;
    on(type: "fail", listener: (err: any) => void): () => void;
    on(type: "succeed" | "fail", notify: (...args: any[]) => void): () => void;
    on(type: "succeed" | "fail", notify: (...args: any[]) => void): () => void {
        switch (type) {
            case "succeed":
                if (this.isSuccess)
                    notify(this._data as DATA<F>);
                return this.success.subscribe({ update: notify });
            case "fail":
                if (this.isFailure)
                    notify(this._err);
                return this.failure.subscribe({ update: notify });
        }
    }

    protected succeed(data: DATA<F>) {
        this._busy = false;
        this._loaded = true;
        this._failed = false;
        this._data = data;
        this._err = null;
        this._ts = Date.now();
        this.success.notify(data);
    }

    protected fail(error: any) {
        this._busy = false;
        this._loaded = false;
        this._failed = true;
        this._data = null;
        this._err = error;
        this._ts = Date.now();
        this.failure.notify(error);
    }

    protected begin() {
        this._busy = true;
        this._loaded = false;
        this._failed = false;
    }

    promise() {
        return new Promise<DATA<F>>((resolve, reject) => {
            this.on("succeed", resolve);
            this.on("fail", reject);
        });
    }

    execute(): Promise<DATA<F>> {
        // if is busy, return the promise that awaits for the event
        if (this._busy)
            return this.promise();

        // if is loaded, return the promise that resolves immediately with the data
        if (this._loaded)
            return Promise.resolve(this._data as DATA<F>);

        // if is failed, return the promise that rejects immediately with the error
        if (this._failed)
            return Promise.reject(this._err as any);

        return observePromise(this.f, this.args, this.begin, this.succeed, this.fail);
    }

    public static create<F extends (...args: any[]) => Promise<any>>(fetchFn: F, ...args: ARGS<F>): Command<F> {
        return new Command(fetchFn, args);
    }
}