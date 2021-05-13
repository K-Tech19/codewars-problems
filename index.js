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

  
  