"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Easy/ Bad Approach
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./ReportTarget/HtmlReport");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
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
