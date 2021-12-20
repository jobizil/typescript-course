const cities: string[] = [] // Always remember to have a type annotation when declaring an empty array.

const carMakers = ["Ford", "toyota", "Lexus"]
const dates = [new Date(), new Date()]

// We can equally declare a nested array too
const nestedArr: string[][] = []
const carsByMake = [["Mustang", "Highlander", "Es350"]]

// Importance of Array in TS

// ? i. TS can do type inference when extracting values from any array.
const car = carMakers[0]
const myCar = carMakers.pop()
// ? ii. TS can prevent us from adding incompatible values to the array
// carMakers.push(100) //This will throw an error
// ? iii. TS helps us with the 'map', 'forEach', 'reduce' functions.
carMakers.map((car: string): string => {
	return car.toLowerCase()
})
//? iv. Arrays are flexible and they can still contain multiple different types.
const importantDates: (Date | string)[] = [new Date(), "2021-12-17"]
