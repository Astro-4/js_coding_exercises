// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let capitilized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitilized;
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  let firstInitial = firstName.charAt(0);
  let lastInitial = lastName.charAt(0);
  return firstInitial + "." + lastInitial;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let finalPrice = originalPrice + (vatRate / 100) * originalPrice;
  if (!Number.isInteger(finalPrice)) return parseFloat(finalPrice.toFixed(2));
  else return finalPrice;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let finalPrice = originalPrice - (reduction / 100) * originalPrice;
  if (!Number.isInteger(finalPrice)) return parseFloat(finalPrice.toFixed(2));
  else return finalPrice;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length % 2 === 0)
    return str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2);
  else return str.charAt(str.length / 2);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reversedWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reversedArray = words.map(function (word) {
    return word.split("").reverse().join("");
  });

  return reversedArray;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0;
  users.forEach((user) => {
    if (user.type === "Linux") {
      count++;
    }
  });
  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let totalScore = 0;
  scores.forEach((score) => {
    totalScore = totalScore + score;
  });
  let meanScore = totalScore / scores.length;
  if (!Number.isInteger(meanScore)) return parseFloat(meanScore.toFixed(2));
  else return meanScore;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n % 5 === 0 && n % 3 === 0) return "fizzbuzz";
  else if (n % 5 === 0) return "buzz";
  else if (n % 3 === 0) return "fizz";
  else return n;
}
