import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}
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
