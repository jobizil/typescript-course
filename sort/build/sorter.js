"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Bubble sort is like a double nested for loop.
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
/* !NOTE: The narrow type of a value to a primitive type [typeof] => number,string,boolean or symbol
 Every other type is narrowed down to [instanceof] => Every other value that is created with a constructor function.
*/
