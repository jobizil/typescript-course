const add = (a: number, b: number): number => {
	return a + b
} // When a function annotation is not void or any, always remember to return a value
// W/O using the return statement, it is very easy to make mistake hence TS would return such function as 'void'

const subtract = (a: number, b: number): number => {
	return a - b
}

// Also annotation works for all other types of functions too...

function divide(a: number, b: number): number {
	return a / b
}

const multiply = function (a: number, b: number): number {
	return a * b
}

const logger = (message: string): void => {
	console.log(message)
}
// Whenever we annotate a function to return void, we actually aren't expecting it to return any value.

const throwError = (message: string): never => {
	throw new Error(message)
} // The 'never' annotation simply indicates that we don't ever get to the end of the function. There's always something to block

//Example
const todaysWeather = {
	date: new Date(),
	weather: "sunny",
}
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date)
	console.log(weather)
}
logWeather(todaysWeather)
