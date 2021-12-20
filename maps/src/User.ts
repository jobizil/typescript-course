import faker from "faker";
import { Mappable } from "./CustomMap";
//NOTE: THe implements clause helps TS ensure we complete/fulfil all requirements of the interface
export class User implements Mappable {
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
	markerContent(): string {
		return `Username is <b>${this.name}</b>`;
	}
}
