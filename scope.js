// const name = 'Tom Hanks';
// console.log('location', location)
// if (true) {
//     const data = 58;
//     console.log('inside the if block', data, name)
//     doMath(45, 59);
// }
// // console.log(data)

// while(true) {

// }

// for (const num of [1, 2, 5, 4, 6]){

// }

// function scope or local scope 
// function doMath(a, b) {
//     console.log(a, b)
//     const sum = a + b;
//     const total = sum + 10;
//     function doubleIt(x) {
//         return x * 2;
//     }
//     // console.log('calling double It', doubleIt(450))
// }
// console.log(a, b)

// var location = 'balur ghat';

//Temporal dead zone
// let location = 'balur ghat';


// Global Scope
// let name = 'Ali';

// function greet() {
//     console.log(name);
// }
// greet();

// // Function Scope
// function test() {
//     let x = 10;
//     console.log(x);
// }
// test();
// console.log(x);

// Block Scope
// if (true) {
//     let a = 5;
//     const b = 10;
// }
// console.log(a);
// console.log(b);

// if (true) {
//     var x = 20;
// }
// console.log(x);

// // Lexical Scope
// function outer() {
//     let message = 'Hello';

//     function inner() {
//         console.log(message);
//     }
//     inner();
// }
// outer();

// Scope Chain
// let a = 1;

// function one() {
//     let b = 2;

//     function two() {
//         let c = 3;
//         console.log(a, b, c);
//     }
//     two();
// }
// one();

// function test() {
//     x = 10;
// }
// test();
// console.log(x);

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}