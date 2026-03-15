/**
 
  parse fresh ID ranges and a list of ingredient IDs.
  count how many ingredient IDs fall within at least one fresh range.
*/

import * as fs from "fs";

function solve(input: string): number {
  const [rangeSection, idSection] = input.trim().split("\n\n");

  const ranges: [number, number][] = rangeSection
    .trim()
    .split("\n")
    .map(line => {
      const [a, b] = line.trim().split("-").map(Number);
      return [a, b];
    });

  const ids: number[] = idSection
    .trim()
    .split("\n")
    .map(line => Number(line.trim()));

  let fresh = 0;
  for (const id of ids) {
    if (ranges.some(([lo, hi]) => id >= lo && id <= hi)) {
      fresh++;
    }
  }

  return fresh;
}

const example = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

console.log("=== Example ===");
const exampleResult = solve(example);
console.log("Fresh ingredients:", exampleResult);
console.log("Expected:          3");
console.log("Match:", exampleResult === 3);

const inputFile = process.argv[2];
if (inputFile) {
  console.log("\n=== Real Input ===");
  const realInput = fs.readFileSync(inputFile, "utf8");
  console.log("Fresh ingredients:", solve(realInput));
}