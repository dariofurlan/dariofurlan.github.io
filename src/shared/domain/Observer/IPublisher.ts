import ISubscriber from "./ISubscriber";


export default interface IPublisher<ARGS extends any[]> {
    subscribe(s: ISubscriber<ARGS>): () => void;
    unsubscribe(s: ISubscriber<ARGS>): void;
    notify(...args: ARGS): void;
    clear(): void;
}