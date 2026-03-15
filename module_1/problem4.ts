/**

 A roll of paper (@) is accessible by a forklift if it has
  fewer than 4 neighbors (of 8 adjacent cells) that are also @.
  Count how many rolls are accessible.
*/

import * as fs from "fs";

function solve(input: string): number {
  const grid = input.trim().split("\n").map(l => l.trim());
  const rows = grid.length;
  const cols = grid[0].length;

  const dirs = [
    [-1,-1],[-1,0],[-1,1],
    [ 0,-1],        [ 0,1],
    [ 1,-1],[ 1,0],[ 1,1],
  ];

  let accessible = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== "@") continue;

      let neighborRolls = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "@") {
          neighborRolls++;
        }
      }

      if (neighborRolls < 4) accessible++;
    }
  }

  return accessible;
}

const example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

console.log("=== Example ===");
const exampleResult = solve(example);
console.log("Accessible rolls:", exampleResult);
console.log("Expected:         13");
console.log("Match:", exampleResult === 13);

const inputFile = process.argv[2];
if (inputFile) {
  console.log("\n=== Real Input ===");
  const realInput = fs.readFileSync(inputFile, "utf8");
  console.log("Accessible rolls:", solve(realInput));
}