import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");

const summary = Summary.winAnalysisWithHtmlReport("Tottenham");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

/*============================================================================================== 
// Get a string representation of the data and using a \n && split method to get a readable arr data
const matches = fs
	.readFileSync("football.csv", { encoding: "utf8" })
	.split("\n")
	.map((row: string): string[] => {
		return row.split(",");
	});
 */
