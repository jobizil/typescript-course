interface Sortable {
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
	length: number;
}
// Bubble sort is like a double nested for loop.
export abstract class Sorter {
	// abstract is used to mark keywords as existing in the future
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;
	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}

/* !NOTE: The narrow type of a value to a primitive type [typeof] => number,string,boolean or symbol
 Every other type is narrowed down to [instanceof] => Every other value that is created with a constructor function.
*/
