/* INTERFACES
 Creates new type describing the property names and values of an object.

*/
/*
interface Vehicle {
	//Always note the we can add any property into our interface including non primitive values and methods
	// name: string
	// // year: Date
	// year: number
	// broken: boolean
	summary(): string
}
const oldCorolla = {
	name: "Toyota Corolla",
	year: 2002,
	broken: false,
	summary(): string {
		return `I saw ${this.name} made on ${this.year} parked next to our house`
	},
}
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
// 	console.log(`Name: ${vehicle.name}`)
// 	console.log(`Year: ${vehicle.year}`)
// 	console.log(`Broken: ${vehicle.broken}`)
// }
//NOTE: THe printVehicle fn has a long annotation type.

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`${vehicle.summary()}`)
}
printVehicle(oldCorolla)
*/
// Let's refactor our code to something a little cleaner & Generic

interface Reportable {
	summary(): string
}

const corolla = {
	name: "Toyota Corolla",
	year: 2002,
	broken: false,
	summary(): string {
		return `I saw ${this.name} made on ${this.year} parked next to our house`
	},
}

const drink = {
	sugar: 40,
	type: "beer",
	summary(): string {
		return `I saw your brother last night drinking ${this.type} with ${this.sugar} grams of sugar.`
	},
}
const summaryReport = (item: Reportable): void => {
	console.log(`${item.summary()}`)
}
summaryReport(corolla)
summaryReport(drink)
