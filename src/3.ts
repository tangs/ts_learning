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

interface Point {
    readonly x: number;
    readonly y?: number;
}

let pos: Point = {x: 3};
// pos.y = 3;

let num3_1: number[] = [1, 2, 3, 5];
let ro: ReadonlyArray<number> = num3_1;
console.log("before:");
ro.forEach(element => {
    console.log(element);
});
// ro.push()
let num3_3 = ro as number[];
num3_3.push(7);
num3_3.push(10);
console.log("after:");
ro.forEach(element => {
    console.log(element);
});

interface inter_func {
    (num: number, str: string): boolean;
}

const func3_4 = (func: inter_func) => {
    const ret = func(33, '33');
    console.log(`ret:${ret}`);
}

func3_4((num: number, str: string) => {
    return num.toString() === str;
});

interface inter3_5 {
    num: number;
    str: string;
}

interface inter3_6 {
    num: number;
    str1: number;
}

class Class3_1 implements inter3_5, inter3_6 {
    public num: number;
    public str: string;
    public str1: any;
}

const func3_6 = (obj: inter3_6) => {
    console.log(typeof(obj.str1));
}

const cls: Class3_1 = new Class3_1();
cls.num = 3;
cls.str1 = 33;
cls.str1 = '33';
const inter = cls as inter3_6;
// console.log(typeof(inter.str1));
func3_6(inter);

interface inter3_7 {
    new (w: number, h: number): inter3_8;
}

interface inter3_8 {
    func();
}

const func_3_7 = (ctor: inter3_7, w: number, h: number): inter3_8 => {
    return new ctor(w, h);
}

class class3_2  implements inter3_8 {
    constructor (w: number, h: number) {
    }

    public func() {
        console.log('beep.');
    }
}

class class3_3  implements inter3_8 {
    // constructor (w: number, h: number) {
    // }

    public func() {
        console.log('tick.');
    }
}

const dig = func_3_7(class3_2, 10, 30);
const dig1 = func_3_7(class3_3, 10, 30);
