"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Easy/ Bad Approach
const fs_1 = __importDefault(require("fs"));
// Get a string representation of the data and using a \n && split method to get a readable arr data
const matches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf8" })
    .split("\n")
    .map((row) => {
    return row.split(",");
});
let wonMatch = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of matches) {
    if (match[1] === "Everton" && match[5] === MatchResult.HomeWin) {
        wonMatch++;
    }
    else if (match[2] === "Everton" && match[5] === MatchResult.AwayWin) {
        wonMatch++;
    }
}
console.log(`Everton won ${wonMatch} matches`);
