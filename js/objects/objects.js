export const is_object = function (value) {
  return Object.prototype.toString.apply(value) === "[object Object]";
};

const syl_objects = {
  is_object,
};
export default syl_objects;
