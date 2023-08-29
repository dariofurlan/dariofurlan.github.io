import IPublisher from "./IPublisher";
import ISubscriber from "./ISubscriber";

export default class Publisher<ARGS extends any[]> implements IPublisher<ARGS> {
    private subscribers: Set<ISubscriber<ARGS>>;

    constructor() {
        this.subscribers = new Set<ISubscriber<ARGS>>();
    }

    subscribe(s: ISubscriber<ARGS>): () => void {
        this.subscribers.add(s);
        return () => this.unsubscribe(s);
    }

    unsubscribe(s: ISubscriber<ARGS>): void {
        this.subscribers.delete(s);
    }

    notify(...args: ARGS): void {
        this.subscribers.forEach(s => s.update(...args));
    }

    clear(): void {
        this.subscribers.clear();
    }
}