function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct
let result2 = subtract(10, 5); // Correct

// Solution
let num1 = 5;
let num2 = parseInt('3');
let result3 = add(num1, num2);

let num3 = 10;
let num4 = parseInt('5');
let result4 = subtract(num3, num4); 