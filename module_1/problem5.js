"use strict";
/**
 
  parse fresh ID ranges and a list of ingredient IDs.
  count how many ingredient IDs fall within at least one fresh range.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function solve(input) {
    var _a = input.trim().split("\n\n"), rangeSection = _a[0], idSection = _a[1];
    var ranges = rangeSection
        .trim()
        .split("\n")
        .map(function (line) {
        var _a = line.trim().split("-").map(Number), a = _a[0], b = _a[1];
        return [a, b];
    });
    var ids = idSection
        .trim()
        .split("\n")
        .map(function (line) { return Number(line.trim()); });
    var fresh = 0;
    var _loop_1 = function (id) {
        if (ranges.some(function (_a) {
            var lo = _a[0], hi = _a[1];
            return id >= lo && id <= hi;
        })) {
            fresh++;
        }
    };
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var id = ids_1[_i];
        _loop_1(id);
    }
    return fresh;
}
var example = "3-5\n10-14\n16-20\n12-18\n\n1\n5\n8\n11\n17\n32";
console.log("=== Example ===");
var exampleResult = solve(example);
console.log("Fresh ingredients:", exampleResult);
console.log("Expected:          3");
console.log("Match:", exampleResult === 3);
var inputFile = process.argv[2];
if (inputFile) {
    console.log("\n=== Real Input ===");
    var realInput = fs.readFileSync(inputFile, "utf8");
    console.log("Fresh ingredients:", solve(realInput));
}
