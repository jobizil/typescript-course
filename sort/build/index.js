"use strict";
// Bubble sort is like a double nested for loop.
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    let leftHand = this.collection[j];
                    let rightHand = this.collection[j + 1];
                    this.collection[j] = rightHand;
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
