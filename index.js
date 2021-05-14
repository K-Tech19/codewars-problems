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

//   8 kyu
// Filter out the geese

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// Solution: 

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    
    let removeGeese = [];
    
    for(i = 0; i < birds.length; i++ ){
      if(!geese.includes(birds[i])){
         removeGeese.push(birds[i])
        }
    }
    
     
      return removeGeese
    
  };

//   8 kyu
// Will you make it?

// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
    // Nearest pump 50 miles
    const d = distanceToPump;
    // on average car runs 25 per miles hour
    let m = mpg;
    // 2 gallons left
    let f = fuelLeft;
      if (d <= f * m){
        return true
      } else {
        return false
      }
    //should return true 
    //should return false 
    // values are positive
    
  };


//   8 kyu
// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : l*2 + w*2 ; 
    
  //    if (l == w) {
  //        return l*w 
  //   } else {
  //     return l*2 + w*2
  //   }
  };

//   8 kyu
// The Wide-Mouthed frog!

// The wide mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.

// Solution: 

function mouthSize(animal) {
  
    let a = animal
    
    let alligator = "small"
    let w = "wide"
    
    if (a == "alligator" ){
      return alligator
    } else {
      return w
      }  
    
    }

//     8 kyu
// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Solution: 

function bmi(weight, height) {
  
    let bmi = weight/height**2;
  
    let u = 'Underweight'
    let normal = 'Normal'
    let overweight = 'Overweight'
    let obese = 'Obese'
    
      if( bmi <= 18.5){
        return u
      } else if( bmi <= 25) {
        return normal
      } else if ( bmi <= 30) {
        return overweight
      } else if ( bmi > 30 ) {
        return obese
      }
    
  }

//   8 kyu
// How many lightsabers do you own?

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// Solution:

function howManyLightsabersDoYouOwn(name) {
  
    let n = name;
    let z = 'Zach'
  
    if(n !== z ) {
      return 0
    } else { 
    return 18
    }
    
  }

//   7 kyu
//   Small enough? - Beginner

//   You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution:

