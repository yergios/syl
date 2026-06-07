const OK = "OK";
const FAILED = "FAILED";

export const assert = function (result, failMsg = FAILED, okMsg = OK) {
  return result ? console.log(okMsg) : console.log(failMsg);
};

const syl_testing = {
  assert,
};
export default syl_testing;
