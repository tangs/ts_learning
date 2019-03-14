{
    const a = 3;
    enum Enum {
        A,
        B,
        C,
        D = 2,
        // E = 'dd',
    }

    if (a) {
        console.log('e');
    }

    // const x: Enum = Enum.A;
    // if (x !== Enum.A || x !== Enum.B) {
    //     console.log('aaa');
    // }
    const func = (obj: { A: number }) => {
        // console.log(obj.A);
        for (const [k, v] of Object.entries(obj)) {
            console.log(k, v);
        }
    };
    func(Enum);
    func({ A: 333 });
    console.log(Enum[Enum.A] === 'A');
}
