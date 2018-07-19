const person = {
  age: 26,
  location: {
    city: 'London',
    temp: 30,
  }
};

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}`);

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
