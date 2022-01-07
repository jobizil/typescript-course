"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Easy/ Bad Approach
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
// Get a string representation of the data and using a \n && split method to get a readable arr data
/* const matches = fs
    .readFileSync("football.csv", { encoding: "utf8" })
    .split("\n")
    .map((row: string): string[] => {
        return row.split(",");
    });
 */
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read(); // This opens data in the CsvFileReader file and loads it and assign it into the data
let wonMatch = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        wonMatch++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        wonMatch++;
    }
}
console.log(`Man United won ${wonMatch} matches`);
