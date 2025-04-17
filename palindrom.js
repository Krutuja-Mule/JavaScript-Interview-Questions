const isPalindrome = (word) => {
    return word === word.split('').reverse().join('')
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));  


const isPalindromeAllChecks = (input) => {
  // Step 1: Convert to string, lowercase, and remove non-alphanumeric characters
  const cleaned = input.toString().toLowerCase().replace(/[^a-z0-9]/g, '');

  // Step 2: Check characters from both ends
  const len = cleaned.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      
      console.log(input,"Not a palindrome")
      return false; 
    }
  }
  console.log(input,"Is a palindrome")
  return true; 
};

isPalindromeAllChecks(09812332189);
isPalindromeAllChecks("racecar");
