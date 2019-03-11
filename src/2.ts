
{
    const fun = () => {
        const arr = [1, 2];
        let [f, s] = arr;
        console.log(f, s);
        [s, f] = [f, s];
        console.log(f, s);

        const o = {
            a: "a",
            b: 10,
            c: "c"
        };
        const {b, c} = o;
        console.log(b, c);
        const {a, ...paras} = o;
        console.log(a, paras);
        const {a: a1} = o;
        console.log(a1);
    };

    const fun1 = () => {
        const f = [1, 2];
        const s = [3, 4];
        const b = [0, ...f, ...s, 5];
        console.log(b);

        const o1 = {
            a: 'a',
            b: 10,
            c: 'd'
        };
        const o2 = {
            c: 30,
            d: 'd',
            e: 30
        };
        const o3 = {
            c: 3,
            ...o1,
            ...o2
        };
        console.log(o3);
    };

    fun();
    fun1();
}
