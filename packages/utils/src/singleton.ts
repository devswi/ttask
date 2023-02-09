type Constructor = new <A extends any[]>(...args: A) => {};

export function singleton<T extends Constructor>(ctor: Constructor) {
    let ins: InstanceType<T>;
    return new Proxy(ctor, {
        construct(target, args) {
            if (!ins) {
                ins = new target(...args) as InstanceType<T>;
            }
            return ins;
        },
    });
}
