module.exports = function getZerosCount(number) {
  zeros = 0;
  for(let i = 1;  Math.pow(5, i) <= number; i++) {
    zeros += Math.floor(number / Math.pow(5, i));
  }
  return zeros;
}
