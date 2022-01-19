"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
const summary = Summary_1.Summary.winAnalysisWithHtmlReport("Tottenham");
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
