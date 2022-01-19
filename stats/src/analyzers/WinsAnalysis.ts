import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
	constructor(public team: string) {}
	run(matches: MatchData[]): string {
		let wonMatch = 0;

		for (let match of matches) {
			if (match[1] === "Tottenham" && match[5] === MatchResult.HomeWin) {
				wonMatch++;
			} else if (match[2] === "Tottenham" && match[5] === MatchResult.AwayWin) {
				wonMatch++;
			}
		}
		return `Team ${this.team} won ${wonMatch} games`;
	}
}
