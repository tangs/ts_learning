console.log("var:");
for(var i = 0; i < 4; ++i) {
    for(var i = 0; i < 4; ++i) {
        console.log(i);
    }
}

console.log("let:");
for(let i = 0; i < 4; ++i) {
    for(let i = 0; i < 4; ++i) {
        console.log(i);
    }
}

const num = 1;
const str = `num:${num}

end.`;
console.log(str);

let func1 = () => {
    return 10;
};
const num1 = func1();
let x: [number, string, number];
x = [1, '33', 3];
console.log(num1);

enum Color {Red, Green, Blue};
const c: string = Color[2];
const c1: Color = Color.Blue;
console.log(c);
console.log(Color.Blue);
console.log(c1.toString());
console.log(c1 === 2);
