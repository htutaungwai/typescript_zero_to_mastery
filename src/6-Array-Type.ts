// Array of Numbers

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Array of Strings
let products: string[] = ["hats", "shirts", "pipes", "lots"];

// Array of strings and numbers
let mixData: (string | number)[] = ["number", 89, "ok"];

console.log(`mixed data: `, mixData);

// nested number type array

let myNums: number[][] = [
  [1, 2],
  [35, 87],
];

console.log("my nums :", myNums);

// Nested string type array

let myStrings: string[][] = [["hi"], ["hello"], ["power"]];

let numAndStringArray: (string | number)[][] = [["hellos"], ["aidos", 34]];
