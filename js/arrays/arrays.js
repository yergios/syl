// Initialize an unidimensional array
Array.dim = function (length, initialValue) {
  const a = [];
  let i;
  for (i = 0; i < length; i++) {
    a[i] = initialValue;
  }
  return a;
};

// Initialize a multidimensional array
Array.matrix = function (m, n, initialValue) {
  const mat = [];
  let a, i, j;
  for (i = 0; i < m; i++) {
    a = [];
    for (j = 0; j < n; j++) {
      a[j] = initialValue;
    }
    mat[i] = a;
  }
  return mat;
};

// Make an identity matrix
Array.identity = function (n) {
  let i;
  const mat = Array.matrix(n, n, 1);
  return mat;
};

// Utility to distinguish arrays from objects
export const is_array = function (value) {
  return Object.prototype.toString.apply(value) === "[object Array]";
};

// Multiple key object sorting
export const by = function (name, minor) {
  return function (o, p) {
    let a, b;
    if (o && p && typeof o === "object" && typeof p === "object") {
      a = o[name];
      b = p[name];
      if (a === b) {
        return typeof minor === "function" ? minor(o, p) : 0;
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw {
        name: "Error",
        message: "Expected an object when sorting by " + name,
      };
    }
  };
};

const syl_arrays = {
  is_array,
  by,
};
export default syl_arrays;
