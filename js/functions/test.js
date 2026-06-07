import syl_functions from "./functions.js";
import syl_testing from "../testing/testing.js";

console.log("Function.prototype.method allows adding a new method");
const add = function (a, b) {
  return a + b;
};
Function.method("add", add);
syl_testing.assert(Function.add(0, 1) === 1);

console.log("Function.prototype.method throws when adding an existing method");
try {
  Function.method("add", function (a, b) {
    return a + b;
  });
} catch (e) {
  syl_testing.assert(e.name === "MethodAlreadyExists");
}

console.log("Function.prototype.curry enables currying");
const add1 = add.curry(1);
syl_testing.assert(add1(5) === 6);

console.log("memoizer dimishes fibonacci recursive calls");
// const fibonacci = function (n) {
//   fibonacci_call_counter++;
//   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// };
// const fibonacci = (function () {
//   const memo = [0, 1];
//   var fib = function (n) {
//     fibonacci_call_counter++;
//     let result = memo[n];
//     if (typeof result !== "number") {
//       result = fib(n - 1) + fib(n - 2);
//       memo[n] = result;
//     }
//     return result;
//   };
//   return fib;
// })();
let fibonacci_call_counter = 0;
const fibonacci = syl_functions.memoizer([0, 1], function (recur, n) {
  fibonacci_call_counter++;
  return recur(n - 1) + recur(n - 2);
});
syl_testing.assert(fibonacci(10) === 55 && fibonacci_call_counter === 9);
