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
