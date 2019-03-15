{
    class A {
        x: number;
        func(): boolean {
            return true;
        }
    }
    class B {
        y: number;
    }

    const a: A & B = { x: 1, y: 3, func: () => true };
    console.log(a);
}

{
    class A {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    class B {
        x: number;
        z: number;
        constructor(x: number, z: number) {
            this.x = x;
            this.z = z;
        }
    }
    const func = (): A | B => {
        return new B(10, 20);
    };
    const isB = (obj: A | B): obj is B => {
        return obj instanceof B;
    };
    let a: A | B = new A(1, 2);
    a = func();
    console.log(a.x);
    if (a instanceof B) {
        console.log(a.z);
    } else {
        console.log(a.y);
    }
    if (isB(a)) {
        console.log(a.z);
    } else {
        console.log(a.y);
    }
}

{
    type type1 = (a: number, b: string) => string;
    const func: type1 = (a, b) => {
        return a.toString() + b.toString();
    };
    console.log(func(123, '55555'));
}

{
    type type1 = number | string;
    function func(a: 'a'): string;
    function func(b: 22): number;
    function func(a: type1): type1 {
        return a;
    }
    console.log(typeof func('a'));
}

{
    type type1 = 1 | 2 | 3;
    type type2 = '1' | '2';
    let a: type1 = 1;
    let b: type2 = '1';
    // a = 43;
    console.log(a, b);
}

{
    interface Inter1 {
        type: 'type1';
        x: number;
    }
    interface Inter2 {
        type: 'type2';
    }
    const func = (a: Inter1 | Inter2): string => {
        return a.type;
    };
    console.log(func({ type: 'type2' }));
}