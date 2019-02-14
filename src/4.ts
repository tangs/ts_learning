class A {
    public fun(num: number = 1): void {
        console.log(`number:${num}`);
    }
}

class B extends A {
    public fun(num: number = 2): void {
        console.log(`number:${num}`);
    }
}

class C extends A {
    public fun(num: number = 3): void {
        console.log(`number:${num}`);
    }
}

const a: A = new C();
const b: B = new B();
a.fun();
(a as B).fun();
b.fun();
(b as C).fun();
