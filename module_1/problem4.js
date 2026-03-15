"use strict";
/**
 * AoC 2025 Day 4: Printing Department
 *
 * A roll of paper (@) is accessible by a forklift if it has
 * fewer than 4 neighbors (of 8 adjacent cells) that are also @.
 * Count how many rolls are accessible.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function solve(input) {
    var grid = input.trim().split("\n").map(function (l) { return l.trim(); });
    var rows = grid.length;
    var cols = grid[0].length;
    var dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];
    var accessible = 0;
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (grid[r][c] !== "@")
                continue;
            var neighborRolls = 0;
            for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
                var _a = dirs_1[_i], dr = _a[0], dc = _a[1];
                var nr = r + dr;
                var nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "@") {
                    neighborRolls++;
                }
            }
            if (neighborRolls < 4)
                accessible++;
        }
    }
    return accessible;
}
// --- Example ---
var example = "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.";
console.log("=== Example ===");
var exampleResult = solve(example);
console.log("Accessible rolls:", exampleResult);
console.log("Expected:         13");
console.log("Match:", exampleResult === 13);
// --- Real input ---
var inputFile = process.argv[2];
if (inputFile) {
    console.log("\n=== Real Input ===");
    var realInput = fs.readFileSync(inputFile, "utf8");
    console.log("Accessible rolls:", solve(realInput));
}
