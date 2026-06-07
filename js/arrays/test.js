import syl_arrays from "./arrays.js";
import syl_testing from "../testing/testing.js";

console.log("is_array identifies correctly an array type");
const array = [1, 2, 3];
syl_testing.assert(syl_arrays.is_array(array));

console.log("is_array distinguishes an object");
const obj = { 0: 1, 1: 2, 2: 3 };
syl_testing.assert(!syl_arrays.is_array(obj));

console.log("Array.dim makes an array containing 10 zeros");
const a = Array.dim(10, 0);
syl_testing.assert(
  (() => {
    let result = true,
      i;
    for (i = 0; i < 10; i++) {
      if (a[i] !== 0) {
        result = false;
        break;
      }
    }
    return result;
  })(),
);

console.log("Array.matrix makes a 4*4 matrix filled with zeros");
const matrix = Array.matrix(4, 4, 0);
syl_testing.assert(
  (() => {
    let result = true,
      i,
      j;
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        if (matrix[i][j] !== 0) {
          result = false;
          break;
        }
      }
    }
    return result;
  })(),
);

console.log("Array.identity makes an identity matrix of dimension 3");
const identity = Array.identity(3);
syl_testing.assert(
  (() => {
    let result = true,
      i,
      j;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (identity[i][j] !== 1) {
          result = false;
          break;
        }
      }
    }
    return result;
  })(),
);

console.log("by allows object sorting on multiple keys");
const s = [
  { first: "Joe", last: "Besser" },
  { first: "Moe", last: "Howard" },
  { first: "Joe", last: "DeRita" },
  { first: "Shemp", last: "Howard" },
  { first: "Larry", last: "Fine" },
  { first: "Curly", last: "Howard" },
];
s.sort(syl_arrays.by("last", syl_arrays.by("first")));
syl_testing.assert(
  (() =>
    s[0].first === "Joe" &&
    s[0].last === "Besser" &&
    s[1].first === "Joe" &&
    s[1].last === "DeRita" &&
    s[2].first === "Larry" &&
    s[2].last === "Fine" &&
    s[3].first === "Curly" &&
    s[3].last === "Howard" &&
    s[4].first === "Moe" &&
    s[4].last === "Howard" &&
    s[5].first === "Shemp" &&
    s[5].last === "Howard")(),
);
