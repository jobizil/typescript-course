const profile = {
	name: "Jane",
	age: 24,
	coords: {
		lat: 12.3,
		lng: 23.4,
	},
	setAge(age: number): void {
		this.age = age
	},
}

const { age }: { age: number } = profile
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
// in assigning annotations, you have to make it look as the destructured object property.
