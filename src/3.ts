const func3_1 = (obj: {txt: string}) => {
    console.log(obj.txt);
};

const o = {
    txt: 'str'
};
func3_1(o);

interface inter3_1 {
    txt: string;
    a?: number;
    b?: number;
    // [a: string]: any;
};

interface inter3_2 {
    readonly x: number;
    readonly y: number;
}

const func3_2 = (obj: inter3_1) => {
    console.log(obj.txt);
    if (obj.a) {
        console.log(obj.a);
    }
};
func3_2({txt: 'ddd', b: 4});
func3_2({txt: 'ddd', a: 33});
const obj: inter3_1 = {txt: 'ddd'};
// obj.fff = 3;
// obj.bd = '33';
func3_2(obj);
let obj1 = {txt: 'ddd', ddd: 333};
func3_2(obj1);
console.log(typeof obj1);
