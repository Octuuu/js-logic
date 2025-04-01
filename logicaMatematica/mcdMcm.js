function MCD(a, b) {
    return b === 0 ? a : MCD(b, a % b);
}

function MCM(a, b) {
    return (a * b) / MCD(a, b);
}

console.log(MCD(48, 18)); // 6
console.log(MCM(48, 18)); // 144