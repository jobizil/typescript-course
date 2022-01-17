// Easy/ Bad Approach
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./ReportTarget/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./ReportTarget/HtmlReport";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
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
