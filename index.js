//  Daily Codewars Problems

// 8 kyu //
// Multiply

// This code does not execute properly. Try to figure out why.

// Solution:

function multiply(a, b){
    a * b
  }

//   7 kyu //
// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Solution: 

function filter_list (l) {

    return newArr = l.filter(item => typeof item !== 'string')
  
  }

//   6 kyu //
//   Two Sum
  
//   Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// Solution: 

function twoSum(nums, target) {
    // ...
    const map = [];
    const indexnum = [];
    
    for (let x = 0; x < nums.length; x++)
    {
    if (map[nums[x]] != null)
    {
    var index = map[nums[x]];
    indexnum[0] = index;
    indexnum[1] = x;
  
    }
    else
    {
    map[target - nums[x]] = x;
    }
    }
    return indexnum;
  }

//   6 kyu
// Does my number look big in this?

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

  // Solution: 
  
  function narcissistic( value ) {
    let valString = '' + value;
    let valLength = valString.length;
      let result = 0;  
      for (let i in valString) {
        result += Math.pow((+valString[i]), valLength);
      }
        return result === value;
    }
    
//     8 kyu
// Twice as old

// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// Solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    // twice the age
    // twice dads age
    // son's age * 2
    
    
    let d = dadYearsOld
    let s = sonYearsOld * 2
    
    if(d === s){ // if dad needs to de-age
      return 0
    } else if( d > s) {
      return d - s
    } else {
      return s - d
    }
    
    
    
    // if dad was twice as old
      
    
  }

//   8 kyu
// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution:

function removeChar(str){

    str = str.split("")
    str.pop();
    str.shift();
    str = str.join("");
      
    return str
  };
  
//   8 kyu
// MakeUpperCase

// Write a function which converts the input string to uppercase.

// Solution:

function makeUpperCase(str) {  
    let upperCase = str.toUpperCase();
    
    return upperCase
  }

  