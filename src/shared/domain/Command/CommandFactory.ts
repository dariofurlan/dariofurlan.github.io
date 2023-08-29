import Command from "./Command";
import { ARGS, Fun } from "./ICommand";


export default class CommandFactory<F extends Fun> {

    private readonly fn: F;

    constructor(fn: F) {
        this.fn = fn;
    }

    public build(...args: ARGS<F>): Command<F> {
        return Command.create<F>(this.fn, ...args);
    }
}