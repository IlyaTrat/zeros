module.exports = function getZerosCount(number) {
  zeros = 0;
  for(let i = 1; i < Math.pow(number, 0.2); i++) {
    zeros += Math.floor(number / Math.pow(5, i));
  }
  return zeros;
}
