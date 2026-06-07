export const is_number = function (value) {
  return typeof value === "number" && isFinite(value);
};

const syl_numbers = {
  is_number,
};
export default syl_numbers;
