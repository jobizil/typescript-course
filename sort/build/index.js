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
                // The code below only works if collection is a number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        let leftHand = this.collection[j];
                        let rightHand = this.collection[j + 1];
                        this.collection[j] = rightHand;
                        this.collection[j + 1] = leftHand;
                    }
                }
                // The code below only works if collection is a string
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
/* !NOTE: The narrow type of a value to a primitive type [typeof] => number,string,boolean or symbol
 Every other type is narrowed down to [instanceof] => Every other value that is created with a constructor function.
*/
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
