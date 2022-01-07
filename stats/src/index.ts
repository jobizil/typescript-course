// Easy/ Bad Approach
import fs from "fs";

// Get a string representation of the data and using a \n && split method to get a readable arr data
const matches = fs
	.readFileSync("football.csv", { encoding: "utf8" })
	.split("\n")
	.map((row: string): string[] => {
		return row.split(",");
	});

let wonMatch = 0;

enum MatchResult {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}
for (let match of matches) {
	if (match[1] === "Everton" && match[5] === MatchResult.HomeWin) {
		wonMatch++;
	} else if (match[2] === "Everton" && match[5] === MatchResult.AwayWin) {
		wonMatch++;
	}
}
console.log(`Everton won ${wonMatch} matches`);
