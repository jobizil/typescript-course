import faker from "faker";
export class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		// Generate a random name for user
		this.name = faker.name.firstName();
		this.location = {
			//parseFloat return a decimal number
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
}
