function isPalindrome(word) {
  word = word.toLowerCase();
 
  word = word.replace(/\s/g, "");

  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false; 
    }

    start++;
    end--;
  }

  return true; 
}
let word1 = "gag";
let word2 = "kayak";
let word3 = "php";
let word4 = "radar";

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));
console.log(isPalindrome(word4));