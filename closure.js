// // // // // function counter() {
// // // // //     let count = 0;
// // // // //     function innerFunction() {
// // // // //         console.log('inside the inner function, some one called me')
// // // // //     }
// // // // //     return innerFunction;
// // // // // }

// // // // // const output = counter();
// // // // // console.log(output())

// // // // function counter() {
// // // //     let count = 10;

// // // //     return function(user) {
// // // //         count = count + 1;
// // // //         console.log('inside the inner function',user, count)
// // // //     }
// // // // }
// // // // const innerFunc = counter();
// // // // // innerFunc();
// // // // // innerFunc();
// // // // // innerFunc();

// // // // const rahimCounter = counter();
// // // // rahimCounter('rahim');
// // // // rahimCounter('rahim');
// // // // rahimCounter('rahim');
// // // // rahimCounter('rahim');
// // // // console.log('------------------')
// // // // const karimCounter = counter();
// // // // karimCounter('karim')
// // // // rahimCounter('rahim')
// // // // const jabbarCounter = counter();
// // // // jabbarCounter('steve')
// // // // jabbarCounter('steve')
// // // // jabbarCounter('steve')
// // // // karimCounter('karim')
// // // // jabbarCounter('steve')

// // // function outer() {
// // //     let count = 0;

// // //     function inner(){
// // //         count++;
// // //         console.log(count);
// // //     }
// // //     return inner;
// // // }
// // // const myFunc = outer();
// // // myFunc();
// // // myFunc();
// // // myFunc();

// // function createCounter() {
// //     let count = 0;

// //     return function() {
// //         count++;
// //         return count;
// //     };

// // }
// // const counter = createCounter();

// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());


// function greet(name) {
//     return function() {
//         console.log('Hello' + name);
//     };
// }

// const sayHello = greet("jarif");
// sayHello();

// function delayedMessage(msg) {
//     setTimeout(function() {
//         console.log(msg);
//     }, 1000);
// }
// delayedMessage("Hello after 1 second");