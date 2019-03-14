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
    let a: A | B = new A(1, 2);
    a = func();
    console.log(a.x);
}
