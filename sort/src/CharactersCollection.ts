export class CharactersCollection {
	constructor(public data: string) {}
	get length(): number {
		return this.data.length;
	}
	// Convert the data to be compared to lowercase characters
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
	}

	swap(leftIndex: number, rightIndex: number): void {
		// Split string to get an array character
		const arrayCharacter = this.data.split("");
		const leftHand = arrayCharacter[leftIndex];
		arrayCharacter[leftIndex] = arrayCharacter[rightIndex];
		arrayCharacter[rightIndex] = leftHand;

		// Update the splitted array character into string
		this.data = arrayCharacter.join("");
	}
}
