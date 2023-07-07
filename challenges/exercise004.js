export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let lessThanOneArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) lessThanOneArr.push(nums[i]);
  }
  return lessThanOneArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) newArr.push(names[i]);
  }
  return newArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].charAt(0) === "t" &&
      words[i].charAt(1) === "o" &&
      words[i].charAt(2) === " "
    )
      newArr.push(words[i]);
  }
  return newArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integerArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) integerArr.push(nums[i]);
  }
  return integerArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cityArr = [];
  users.forEach((user) => {
    cityArr.push(user.data.city.displayName);
  });
  return cityArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
