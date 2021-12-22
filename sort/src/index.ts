// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";

import { LinkedList } from "./LinkedList";

import { Sorter } from "./Sorter";
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
// const numbersCollection = new NumbersCollection([10, -5, 2, -99, 0]);
// const charactersCollection = new CharactersCollection("ape");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// console.log(numbersCollection.data);
