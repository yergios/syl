import syl_numbers from "./numbers.js";
import syl_testing from "../testing/testing.js";

console.log("is_number correctly identifies a number");
syl_testing.assert(syl_numbers.is_number(1));

console.log("is_number correctly identifies NaN");
syl_testing.assert(!syl_numbers.is_number(NaN));

console.log("is_number correctly identifies Infinity");
syl_testing.assert(!syl_numbers.is_number(Infinity));

console.log("is_number correctly identifies a null");
syl_testing.assert(!syl_numbers.is_number(null));

console.log("is_number correctly identifies a string number");
syl_testing.assert(!syl_numbers.is_number("0"));

console.log("is_number correctly identifies a string");
syl_testing.assert(!syl_numbers.is_number("hello, world!"));

console.log("is_number correctly identifies an object");
syl_testing.assert(!syl_numbers.is_number({}));
