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
fun();