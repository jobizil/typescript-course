"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersCollection } from "./NumbersCollection";
const CharactersCollection_1 = require("./CharactersCollection");
const Sorter_1 = require("./Sorter");
// const numbersCollection = new NumbersCollection([10, -5, 2, -99, 0]);
const charactersCollection = new CharactersCollection_1.CharactersCollection("asdfgA");
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
// console.log(numbersCollection.data);
