const isPalindrome = (str) => {
    return str == str.split('').reverse().join('')
  };
  
  // Example usage:
  const inputString1 = "noon"
  const inputString2 = "hello"
  
  console.log(isPalindrome(inputString1)) 
  console.log(isPalindrome(inputString2))
  
