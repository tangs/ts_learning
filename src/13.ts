namespace TS {
    export class A {
        x: number;
        y: number;
    }
}
{
    const a = new TS.A();
    a.x = 10;
    a.y = 20;
    console.log(a);
}

namespace TS1 {
    import A1 = TS.A;
    export class A {
        constructor() {
            const a = new A1();
            a.x = 10;
            a.y = 20;
            console.log(a);
        }
    }
}

{
    const a = new TS1.A();
    console.log(a);
}
