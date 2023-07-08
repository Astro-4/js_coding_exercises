export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let index = nums.indexOf(n);
  if (index !== -1 && index < nums.length - 1) {
    return nums[index + 1];
  }
  return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let zerosAndOnesCount = { 1: 0, 0: 0 };
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char === "1") {
      zerosAndOnesCount[1]++;
    } else if (char === "0") {
      zerosAndOnesCount[0]++;
    }
  }

  return zerosAndOnesCount;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let reversestrNum = n.tostr().split("").reverse().join("");
  let reverseNumber = parseInt(reversestrNum, 10);
  return reverseNumber;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    let internalArr = arrs[i];
    for (let j = 0; j < internalArr.length; j++) {
      sum += internalArr[j];
    }
  }
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  for (let key in haystack) {
    if (
      haystack.hasOwnProperty(key) &&
      typeof haystack[key] === "str" &&
      haystack[key].includes(searchTerm)
    ) {
      return true;
    }
  }

  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let words = str.toLowerCase().split(/\W+/);
  let frequencies = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word !== "") {
      if (frequencies[word]) {
        frequencies[word]++;
      } else {
        frequencies[word] = 1;
      }
    }
  }

  return frequencies;
};
