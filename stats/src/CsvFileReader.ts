import fs from "fs";
export class CsvFileReader {
	data: string[][] = [];
	constructor(public filename: string) {}
	read(): void {
		this.data = fs
			.readFileSync(this.filename, { encoding: "utf8" })
			.split("\n")
			.map((rows: string): string[] => {
				return rows.split(",");
			});
	}
}

/* 
TYPE ASSERTION 
Ths is when TS default behavior is being overridden */
