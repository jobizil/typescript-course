//  Modifiers in TS Classes are in 3 categories: Public, Private and Protected
/* 
? PUBLIC: This method can be called anywhere and anytime
? PRIVATE: This method can only be called by other methods in this class.
? PROTECTED: This method can only be called by other methods in this class, or by other methods in child class.*/

class Vehicle {
	/* color: string;
	constructor(color: string) {
	    this.color = color;
	}  */
	//This can be replaced with
	constructor(public color: string) {}

	protected honk(): void {
		console.log("Beep Beep");
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log("Bentley");
	}
	drivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, "Red");
car.drivingProcess();

console.log(car.color, car.wheels);
