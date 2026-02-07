function total2(a , b) {
    console.log('value of parameters', a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
const result2 = total2(5, 7);
