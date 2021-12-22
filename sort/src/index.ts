// import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
// const numbersCollection = new NumbersCollection([10, -5, 2, -99, 0]);
const charactersCollection = new CharactersCollection("asdfgA");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
// console.log(numbersCollection.data);
