// {
//     function func1111() {
//         console.log('call func1111().');
//     }
// }
// func1111();

{
    function func<T>(arg: T) {
        return arg.toString();
    }

    function func1<T>(args: T[]) {
        return args.length;
    }

    console.log(func('dddd'));
    console.log(func1([1, 2, 3]));
}

{
    function identity<T>(arg: T): T {
        return arg;
    }

    let myIdentity: <T>(arg: T) => T = identity;
    const obj = myIdentity({ a: 1, b: 2 });
    const obj1 = myIdentity(45);
    console.log(obj);
    console.log(obj1);
}

{
    const func = function <T>(arg: T): T {
        return arg;
    };
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
    };

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
    };
    const func1: Inter<number, string> = func;
    console.log(func1(11, '222'));
}

{
    class A {
        public x: number;
        public y: number;
        constructor(x: number, y: number) {
            [this.x, this.y] = [x, y];
        }
    }

    class B extends A {
        public z: number;
        constructor(x: number, y: number, z: number) {
            super(x, y);
            this.z = z;
        }
        public toString(): string {
            return `x=${this.x}, y=${this.y}, z=${this.z},`;
        }
    }

    class C extends A {
        public a: number;
        constructor(x: number, y: number, a: number) {
            super(x, y);
            this.a = a;
        }
        public toString(): string {
            return `x=${this.x}, y=${this.y}, a=${this.a},`;
        }
    }

    interface Inter<T> {
        (arg: T): string;
    }
    const func = <T> (arg: T): string => {
        return arg.toString();
    };
    const func1: Inter<A> = func;
    console.log(func1(new C(1, 2, 3)));
    console.log(func1(new B(5, 6, 7)));
}

{
    interface Inter {
        readonly x: number;
        readonly y?: number;
    }

    class Class1 implements Inter {
        x: number;

        constructor(x: number) {
            this.x = x;
        }
    };

    const func = <T extends Inter>(t: T) => {
        return t.x;
    };
    const ins = new Class1(444);
    ins.x = 33;
    console.log(func(ins));
    const obj: Inter = {x: 123};
    // obj.x = 3;
    console.log(func(obj));
}

{
    const func = <T, K extends keyof T >(obj: T, key: K) => {
        return obj[key];
    }
    const obj = { a: 1, b: 2, c: 3};
    console.log(func(obj, 'a'));
    // console.log(func(obj, 'd'));
}
