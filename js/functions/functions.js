// Add a method conditionally
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
  throw {
    name: "MethodAlreadyExists",
    message: `Function prototype already has a method named '${name}'`,
  };
};

// Enable currying
Function.method("curry", function () {
  const slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this;
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

// Make a memoized function
export const memoizer = function (memoArray, formulaFn) {
  const recurFn = function (n) {
    let result = memoArray[n];
    if (typeof result === "undefined") {
      result = formulaFn(recurFn, n);
      memoArray[n] = result;
    }
    return result;
  };
  return recurFn;
};

const syl_functions = {
  memoizer,
};
export default syl_functions;
