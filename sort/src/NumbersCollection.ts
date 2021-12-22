export class NumbersCollection {
	constructor(public data: number[]) {}
	//USing an accessor helps you call methods like a property.
	get length(): number {
		return this.data.length;
	}
	// rightIndex => leftIndex + 1
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}
	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}
}