// Function 1: calculateTax
// Calculates a 10% tax on the given amount
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: convertToUpperCase
// Converts the input string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: findMaximum
// Returns the larger of two numbers
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
// Checks if a word is a palindrome
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Function 5: calculateDiscountedPrice
// Calculates the price after applying a discount percentage
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

// This is required for the test to function properly
module.exports = { 
  calculateTax, 
  convertToUpperCase, 
  findMaximum, 
  isPalindrome, 
  calculateDiscountedPrice 
};
