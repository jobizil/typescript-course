import fs from "fs";
export abstract class CsvFileReader<T> {
	// Read more on TS Generic Class
	data: T[] = [];
	constructor(public filename: string) {}

	abstract mapRow(row: string[]): T; // Remove { } when declared as abstract.
	read(): void {
		this.data = fs
			.readFileSync(this.filename, { encoding: "utf8" })
			.split("\n")
			.map((rows: string): string[] => {
				return rows.split(",");
			})
			.map(this.mapRow);
	}
}

/* 
TYPE ASSERTION 
Ths is when TS default behavior is being overridden */
