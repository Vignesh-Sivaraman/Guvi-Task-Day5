"use strict";

//Do the below Programs in anonymous and IIFE
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = [
  -1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20,
];
let arr4 = ["radar", "level", 121, "rat", "cat", 454, "pop"];
let arr5 = [13, 7, 8, 12, 18];
let arr6 = [1, 2, 2, 3, 4, 5, 6, 4, 7, 6];

// a. Print odd numbers in array
// Anonyms function
let odd_Numbers = function (array) {
  for (let num of array) {
    if (num % 2 != 0) console.log(num);
  }
};
odd_Numbers(arr1);
// IIFE
(function (array) {
  for (let num of array) {
    if (num % 2 != 0) console.log(num);
  }
})(arr1);

// b. Convert all the strings to title caps in a string array
// Anonyms function
let caps = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  console.log(array);
};
caps(arr2);
// IIFE
(function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  console.log(array);
})(arr2);

// c. sum of all number in array
// Anonyms function
let sum = function (ele) {
  let total = ele.reduce(function (a, b) {
    return a + b;
  });
  console.log(total);
};
sum(arr1);
// IIFE
(function (ele) {
  let total = ele.reduce(function (a, b) {
    return a + b;
  });
  console.log(total);
})(arr1);

// d. Return all the prime number in array
// Anonyms function
let prime_Numbers = [];
let prime = function (ele) {
  for (let num of ele) {
    let temp = 0;
    if (num < 2) temp += 1;
    for (let k = 2; k < num; k++) {
      if (num % k === 0) temp += 1;
    }
    if (temp === 0) prime_Numbers.push(num);
  }
  console.log(prime_Numbers);
};
prime(arr3);
// IIFE
prime_Numbers = [];
(function (ele) {
  for (let num of ele) {
    let temp = 0;
    if (num < 2) temp += 1;
    for (let k = 2; k < num; k++) {
      if (num % k === 0) temp += 1;
    }
    if (temp === 0) prime_Numbers.push(num);
  }
  console.log(prime_Numbers);
})(arr3);

// e. Return all palindromes in an array
// Anonyms function
let all_Palindromes = [];
let palindromes = function (array) {
  for (let num of array) {
    let x = num.toString();
    let y = x.split("").reverse().join("");
    if (x === y) all_Palindromes.push(num);
  }
  console.log(all_Palindromes);
};
palindromes(arr4);
// IIFE
all_Palindromes = [];
(function (array) {
  for (let num of array) {
    let x = num.toString();
    let y = x.split("").reverse().join("");
    if (x === y) all_Palindromes.push(num);
  }
  console.log(all_Palindromes);
})(arr4);

// f. Return median of two sorted arrays of the same size
// Anonyms function
let median = function (array1, array2) {
  array1 = array1.sort(function (a, b) {
    return a - b;
  });
  array2 = array2.sort(function (a, b) {
    return a - b;
  });
  console.log((array1[array1.length - 1] + array2[0]) / 2);
};
median(arr1, arr5);
// IIFE
(function (array1, array2) {
  array1 = array1.sort(function (a, b) {
    return a - b;
  });
  array2 = array2.sort(function (a, b) {
    return a - b;
  });
  console.log((array1[array1.length - 1] + array2[0]) / 2);
})(arr1, arr5);

// g. Remove duplicates from Array
// Anonyms function
let not_duplicates = function (array) {
  let duplicates_removed = [...new Set(array)];
  console.log(duplicates_removed);
};
not_duplicates(arr6);
// IIFE
(function (array) {
  let duplicates_removed = [...new Set(array)];
  console.log(duplicates_removed);
})(arr6);

// h. Rotate an array by k times

// Anonyms function
let array_rotation = function (array, k) {
  for (let i = 0; i < k; i++) {
    let x = array.shift();
    arr1.push(x);
  }
  console.log(array);
};
array_rotation(arr1, 4);
// IIFE
(function (array, k) {
  for (let i = 0; i < k; i++) {
    let x = array.shift();
    arr5.push(x);
  }
  console.log(array);
})(arr5, 3);

// Do the below Programs in arrow functions

// a. Print odd numbers in array

let odd_Numbers_arrow = (array) => {
  for (let num of array) {
    if (num % 2 != 0) console.log(num);
  }
};
odd_Numbers_arrow(arr1);

// b. Convert all the strings to title caps in a string array

let caps_arrow = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  console.log(array);
};
caps_arrow(arr2);

// c. sum of all number in array

let sum_arrow = (ele) => {
  let total = ele.reduce(function (a, b) {
    return a + b;
  });
  console.log(total);
};
sum_arrow(arr1);

// d. Return all the prime number in array

prime_Numbers = [];
let prime_arrow = (ele) => {
  for (let num of ele) {
    let temp = 0;
    if (num < 2) temp += 1;
    for (let k = 2; k < num; k++) {
      if (num % k === 0) temp += 1;
    }
    if (temp === 0) prime_Numbers.push(num);
  }
  console.log(prime_Numbers);
};
prime_arrow(arr3);

// e. Return all palindromes in an array

all_Palindromes = [];
let palindromes_arrow = (array) => {
  for (let num of array) {
    let x = num.toString();
    let y = x.split("").reverse().join("");
    if (x === y) all_Palindromes.push(num);
  }
  console.log(all_Palindromes);
};
palindromes_arrow(arr4);
