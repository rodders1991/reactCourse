// const person = {
//   age: 26,
//   location: {
//     city: 'London',
//     temp: 30,
//   }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}`);
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// Array destructuring

const address = ['1299 S Juniper Street', 'London', 'Somewhere', '13121'];

const [, city, state = "New york", zip] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];

const [coffeeType, , cost ] = item;
console.log(`A medium ${coffeeType} costs ${cost}`);
