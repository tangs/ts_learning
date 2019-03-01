
{
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

    class D {
        public _name: string;

        get name(): string {
            console.log(`getName:${this._name}.`);
            return this._name;
        }

        set name(name: string) {
            console.log(`setName(${name}).`)
            this._name = name;
        }
    }

    const d = new D();
    d.name = 'tangs';
    const name1 = d.name;

    class E {
        readonly name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    const e = new E('tangs');
    console.log(`name:${e.name}`);
    // e.name = '33';

    class F {
        constructor(readonly name: string) {

        }
    }

    const f = new F('tangs');
    console.log(`name:${f.name}`);

    class G {
        public static Value: string = 'Value1';
        public getValue(): string {
            return G.Value;
        }
    }

    const GClass: typeof G = G;

    const g1: G = new GClass();
    console.log(`Value:${g1.getValue()}`);
    GClass.Value = 'Value2';

    const g2: G = new G();
    console.log(`Value:${g2.getValue()}`);
    console.log('typeof:' + (typeof G));

    const func_G = G;
    const g3: G = new func_G();
    console.log(`Value:${g3.getValue()}`);

    class H {
        x: number;
        y: number;
    }

    interface I extends H {
        z: number;
    }

    let i: I = {x: 1, y: 2, z: 3};
}
var a = 3;