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
}

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

class Animal {
    name: string = 'Animal';
}

class Dog extends Animal {
    breed: string = 'breed';
}

interface inter3_3 {
    [x: string]: Animal;
    [x: number]: Dog;
    1: Dog;
    aa: Animal;
}

const func3_3 = (arr: inter3_3) => {
    console.log(arr[1].breed);
    console.log(arr.aa.name);
};
const arr1: inter3_3 = {
    1: new Dog(),
    aa: new Animal(),
    bb: new Animal(),
};
func3_3(arr1);

interface NumberDic {
    [index: string]: number;
    length: number;
    name: number;
    2: number;
}

interface inter3_4 {
    [index: number]: number;
    name: string;
    2: number;
}
