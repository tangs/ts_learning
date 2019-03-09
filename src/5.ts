{
    // let arr: any[] = [];
    // // arr.push(1, 3, 5);
    // arr.push(1, 3, 4);
    // for (const [k, v] of arr.entries()) {
    //     console.log(k, v);
    // }
}

{
    function fun4_1(x: number): string;
    function fun4_1(x: string): string;
    function fun4_1(x: any) {
        const type = typeof x;
        if (type === 'number') {
            return 'number';
        } else if (type === 'string') {
            return 'string';
        }
    }
    console.log(fun4_1(100));
    console.log(fun4_1('100'));
    // fun4_1([1]);
}
