import IPublisher from "../Observer/IPublisher";

export type Fun = (...args: any[]) => Promise<any>;

export type ARGS<T extends Fun> = T extends (...args: infer A) => any ? A : never;
export type DATA<T extends Fun> = Awaited<ReturnType<T>>;

export default interface ICommand<F extends Fun> {
    f: F;
    args: ARGS<F>;

    success: IPublisher<DATA<F>>;
    failure: IPublisher<any>;

    isBusy: boolean;
    isSuccess: boolean;
    isFailure: boolean;
    isEnded: boolean;
    execute(): Promise<DATA<F>>;

    hasResult: boolean;

    result: DATA<F> | null;
    error: any;
    execute_at: number | null;

    promise(): Promise<DATA<F>>;
}