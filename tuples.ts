// A tuple always have a consistent value
const drink = {
	color: "brown",
	carbonated: true,
	sugar: 30,
}

const pepsi: [string, boolean, number] = ["brown", true, 40] // This is a tuple but we have to explicitly keep it's annotation.

//* An alternative way to declare a tuple is by using the type alias.
type Drink = [string, boolean, number]
const sprite: Drink = ["clear", true, 40]

const carSpecs: [number, number] = [380, 4323]

const carStat = {
	horsepower: 380,
	weight: 4323,
}
