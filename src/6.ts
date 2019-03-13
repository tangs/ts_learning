{
    function func<T>(arg: T) {
        return arg.toString();
    }

    function func1<T>(args: T[]) {
        return args.length;
    }

    console.log(func("dddd"));
    console.log(func1([1, 2, 3]));
}

{
    function identity<T>(arg: T): T {
        return arg;
    }
    
    let myIdentity: <T>(arg: T) => T = identity;
    const obj = myIdentity({a: 1, b: 2});
    const obj1 = myIdentity(45);
    console.log(obj);
    console.log(obj1);
}

{
    const func = function <T>(arg: T): T {
        return arg;
    }
    const t: {<T>(arg: T): T} = func;
    const t1: {<Number>(arg: Number): Number} = func;
    console.log(t(111));
    console.log(t1('ff123456'));
}

{
    interface Inter<T> {
        (arg: T): T;
    }

    const func = <T>(arg: T): T => {
        return arg;
    }

    const func1: Inter<Number> = func;
    console.log(func1(111));
    const func2: Inter<string> = func;
    console.log(func2('222'));
}

{
    interface Inter<T, U> {
        (arg1: T, arg2: U): string;
    }
    const func = <T, U>(arg1: T, arg2: U) => {
        return arg1.toString() + arg2.toString();
    }
    const func1: Inter<number, string> = func;
    console.log(func1(11, '222'));
}
