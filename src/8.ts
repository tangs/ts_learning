{
    const x = [0, '1', null];
    console.log(x);

    class D {}
    class A extends D {}
    class B extends D {}
    class C extends D {}
    const y: D[] = [new A(), new B(), new C()];
    console.log(y);
    let z: A | B = null;
    z = new A();
    console.log(z);
}

{
    // interface Inter {
    //     (arg1: Number): string;
    // }
    class A {
        func(callback: (arg1: Number) => boolean): void {
            console.log(callback(111));
        }
    }
    const a = new A();
    a.func((a): boolean => {
        console.log(a);
        return true;
    });
}

{
    class A {
        public x: number;
    }
    class B {
        y: number;
        public x: number;
    }

    let a = new A();
    let b = new B();
    a = b;
    // b = a;
    console.log(a);
}
