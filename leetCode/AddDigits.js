/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * 
 * Example 1:
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2 
 * Since 2 has only one digit, return it.
 * 
 * Example 2:
 * Input: num = 0
 * Output: 0
 * 
 * @param {number} num
 * @return {number}
 */

function addDigits(num) {
    let sumDigits = 0;
    let n = num;
    while (n > 0) {
        sumDigits += n % 10
        n = Math.floor(n / 10)
    }
    if (sumDigits > 9) {
        sumDigits = addDigits(sumDigits)
    }
    return sumDigits;
};

const result = addDigits(138);
console.log(result);