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
