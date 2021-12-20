// Type Annotations => They're codes we add to tell TS what type of value a variable will refer to

//  * PRIMITIVE TYPES
const apples: number = 5 // The : number is known as the type annotation
let speed: string = "fast"
let canBreak: boolean = false
let nothing: null = null
let notDefined: undefined = undefined

// * OBJECT TYPES
// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ["red", "blue", "green", "yellow", "orange"]
let myNumber: number[] = [1, 2, 3, 4, 5]
let truths: boolean[] = [true, false]

// Classes
class Car {}
let car: Car = new Car()

//  Object literal
let point: { x: number; y: number; z: string } = {
	x: 8,
	y: 10,
	z: "jane",
}

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}

/*
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  * THE THREE CASES OF WHEN TO USE TYPE ANNOTATIONS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
NOTE: 'any' is a type, just as 'string' or 'boolean' are
When you see a type of 'any', it means TS has no idea what it is i.e can't check the correct property reference
! Always avoid variables with 'any' at all costs.

Always remember to include a type annotation to your variables.

 ********************************
* i.Function that returns the 'any' type
 ********************************
*/
const json = '{"x":10,"y":20}'
const coord = JSON.parse(json)
console.log(coord) // {x:10,y:20}
/*  ********************************
 * ii. When we declare a variable on one line and initialize it later
 ******************************** */
let words = ["hello", "world", "jane"]
let foundWord = false // another optional approach is inferring the variable to a type annotation.
// * i.e foundWord: boolean

for (let i = 0; i < words.length; i++) {
	if (words[i] === "jane") {
		foundWord = true
	}
}
/*  ********************************
 * iii. Variable whose type cannot be inferred correctly
 ********************************
 */
let numbers = [-10, 3, -4, 32]
let numbersAboveZero: boolean | number = false // Assigning an OR annotation to our variable helps TS identify the variable. THis is not a good practice.

for (let i = 0; i < words.length; i++) {
	if (numbers[i] > 0) {
		numbersAboveZero = numbers[i]
	}
}
