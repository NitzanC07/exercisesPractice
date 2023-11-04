/** 
 * Apply Transform Over Each Element in Array
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = function(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = [...newArr, fn(arr[i], i)]
    }
    return newArr;
};

function plusOne(x, i) {
    return x+i;
}

const result = map([1, 2, 3], plusOne)
console.log(result);