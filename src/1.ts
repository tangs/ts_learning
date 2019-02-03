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
const str = `num:${num}`;
console.log(str);
