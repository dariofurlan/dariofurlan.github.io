
type ISubscriber<ARGS extends any[]> =  {
    update(...args: ARGS): void;
}

export default ISubscriber;