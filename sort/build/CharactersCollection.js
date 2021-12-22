"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    // Convert the data to be compared to lowercase characters
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        // Split string to get an array character
        const arrayCharacter = this.data.split("");
        const leftHand = arrayCharacter[leftIndex];
        arrayCharacter[leftIndex] = arrayCharacter[rightIndex];
        arrayCharacter[rightIndex] = leftHand;
        // Update the splitted array character into string
        this.data = arrayCharacter.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
