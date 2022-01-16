// Easy/ Bad Approach
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
// Get a string representation of the data and using a \n && split method to get a readable arr data
/* const matches = fs
	.readFileSync("football.csv", { encoding: "utf8" })
	.split("\n")
	.map((row: string): string[] => {
		return row.split(",");
	});
 */

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
/* Create an instance of MatchReader and pass in something satisfying. the 'DataReader' interface*/

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let wonMatch = 0;

for (let match of matchReader.matches) {
	if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
		wonMatch++;
	} else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
		wonMatch++;
	}
}
console.log(`Man United won ${wonMatch} matches`);
