"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // Read more on TS Generic Class
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf8" })
            .split("\n")
            .map((rows) => {
            return rows.split(",");
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
/*
TYPE ASSERTION
Ths is when TS default behavior is being overridden */
