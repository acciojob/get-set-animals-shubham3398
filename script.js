//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	
	get getSpecies(){
		return this.species;
	}
	
	makeSound() {
		console.log("making sound");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}

	bark(){
		console.log("bark");
	}
}

class Cat extends Animal {
	constructor(species);

	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
