'use strict';

var add = function add(a, b) {
	return a + b;
};

console.log(add(55, 1));

// This keyword

var user = {
	name: 'George',
	cities: ['London', 'Hong Kong', 'Cardiff'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		console.log(this.name);
		console.log(this.cities);

		var cityMessages = this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});

		return cityMessages;
	}
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
	numbers: [5, 6, 8],
	multiplyBy: 2,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (n) {
			return n * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
