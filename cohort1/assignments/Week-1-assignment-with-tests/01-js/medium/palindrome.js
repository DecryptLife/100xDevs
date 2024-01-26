/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var start = 0;
  var end = str.length - 1;

  str = str.toLowerCase();

  for (var i = 0; i < str.length / 2; i++) {
    var startCh = str.charAt(start);
    var endCh = str.charAt(end);

    if (startCh.charCodeAt(0) >= 97 && startCh.charCodeAt(0) <= 122) {
      if (endCh.charCodeAt(0) >= 97 && endCh.charCodeAt(0) <= 122) {
        if (str.charAt(start) !== str.charAt(end)) return false;

        start += 1;
        end -= 1;
      } else {
        end = end - 1;
      }
    } else {
      start = start + 1;
    }
  }

  return true;
}

console.log(isPalindrome(""));
module.exports = isPalindrome;
