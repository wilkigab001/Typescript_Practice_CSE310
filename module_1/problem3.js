"use strict";
/**
 
  For each bank, pick exactly 2 batteries
  to form the largest possible 2-digit number.
 
  pick the largest digit for the tens place,
  then the largest digit for the units place from everything to its right.
  Sum all banks' max joltages.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function maxJoltage(bank) {
    var best = 0;
    for (var i = 0; i < bank.length - 1; i++) {
        var tens = parseInt(bank[i]);
        var bestUnits = 0;
        for (var j = i + 1; j < bank.length; j++) {
            bestUnits = Math.max(bestUnits, parseInt(bank[j]));
        }
        best = Math.max(best, tens * 10 + bestUnits);
    }
    return best;
}
function solve(input) {
    var banks = input.trim().split("\n").filter(function (l) { return l.trim().length > 0; });
    var total = 0;
    for (var _i = 0, banks_1 = banks; _i < banks_1.length; _i++) {
        var bank = banks_1[_i];
        var joltage = maxJoltage(bank.trim());
        console.log("  ".concat(bank.trim(), " -> ").concat(joltage));
        total += joltage;
    }
    return total;
}
var example = "987654321111111\n811111111111119\n234234234234278\n818181911112111";
console.log("=== Example ===");
var exampleResult = solve(example);
console.log("Total joltage:", exampleResult);
console.log("Expected:      357");
console.log("Match:", exampleResult === 357);
// --- Real input ---
var inputFile = process.argv[2];
if (inputFile) {
    console.log("\n=== Real Input ===");
    var realInput = fs.readFileSync(inputFile, "utf8");
    var result = solve(realInput);
    console.log("Total joltage:", result);
}
