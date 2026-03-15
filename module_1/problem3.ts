/**
 
  For each bank, pick exactly 2 batteries
  to form the largest possible 2-digit number.
 
  pick the largest digit for the tens place,
  then the largest digit for the units place from everything to its right.
  Sum all banks' max joltages.
 */

import * as fs from "fs";

function maxJoltage(bank: string): number {
  let best = 0;

  for (let i = 0; i < bank.length - 1; i++) {
    const tens = parseInt(bank[i]);
    let bestUnits = 0;
    for (let j = i + 1; j < bank.length; j++) {
      bestUnits = Math.max(bestUnits, parseInt(bank[j]));
    }
    best = Math.max(best, tens * 10 + bestUnits);
  }

  return best;
}

function solve(input: string): number {
  const banks = input.trim().split("\n").filter(l => l.trim().length > 0);
  let total = 0;
  for (const bank of banks) {
    const joltage = maxJoltage(bank.trim());
    console.log(`  ${bank.trim()} -> ${joltage}`);
    total += joltage;
  }
  return total;
}
const example = `987654321111111
811111111111119
234234234234278
818181911112111`;

console.log("=== Example ===");
const exampleResult = solve(example);
console.log("Total joltage:", exampleResult);
console.log("Expected:      357");
console.log("Match:", exampleResult === 357);

// --- Real input ---
const inputFile = process.argv[2];
if (inputFile) {
  console.log("\n=== Real Input ===");
  const realInput = fs.readFileSync(inputFile, "utf8");
  const result = solve(realInput);
  console.log("Total joltage:", result);
}