"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wonMatch = 0;
        for (let match of matches) {
            if (match[1] === "Tottenham" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wonMatch++;
            }
            else if (match[2] === "Tottenham" && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wonMatch++;
            }
        }
        return `Team ${this.team} won ${wonMatch} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
