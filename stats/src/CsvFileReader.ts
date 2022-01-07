import fs from "fs";
import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";

// Define a tuple as a new type
type MatchData = [Date, String, String, Number, Number, MatchResult, Number];
export class CsvFileReader {
	data: MatchData[] = [];
	constructor(public filename: string) {}
	read(): void {
		this.data = fs
			.readFileSync(this.filename, { encoding: "utf8" })
			.split("\n")
			.map((rows: string): string[] => {
				return rows.split(",");
			})
			.map((row: string[]): MatchData => {
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult, //Type Assertion
					row[6],
				];
			});
	}
}

/* 
TYPE ASSERTION 
Ths is when TS default behavior is being overridden */
