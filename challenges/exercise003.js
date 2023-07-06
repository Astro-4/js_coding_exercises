export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squareArr = [];
  for (let i = 0; i < nums.length; i++) {
    squareArr[i] = nums[i] * nums[i];
  }
  return squareArr;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelWord = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    let firstLetterCapWord =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    camelWord += firstLetterCapWord;
  }

  return camelWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count = 0;
  people.forEach((person) => {
    count += Object.keys(person.subjects).length;
  });
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  let ingredientUsed = false;
  menu.forEach((dish) => {
    if (Object.values(dish.ingredients).includes(ingredient))
      ingredientUsed = true;
  });
  return ingredientUsed;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let commonNumbers = [];
  for (let i = 0; i < arr1.length; i++) {
    let currentNumer = arr1[i];
    if (arr2.includes(currentNumer) && !commonNumbers.includes(currentNumer))
      commonNumbers.push(currentNumer);
  }
  return commonNumbers.sort();
}
