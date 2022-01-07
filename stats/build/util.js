"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const datePart = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    //Months in a date constructor are 0 indexed.
    return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
exports.dateStringToDate = dateStringToDate;
