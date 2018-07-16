const add = (a, b) => {
	return a + b;
}

console.log(add(55,1));

// This keyword

const user = {
	name: 'George',
	cities: ['London', 'Hong Kong', 'Cardiff'],
	printPlacesLived() {
		console.log(this.name);
		console.log(this.cities);

		const cityMessages = this.cities.map((city) => {
			return this.name + ' has lived in ' + city;
		});

		return cityMessages;
	}
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	numbers: [5, 6, 8],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((n) => n * this.multiplyBy)
	}
};

console.log(multiplier.multiply())