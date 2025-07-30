// --------------- TASK 1

const input = document.getElementById("input");

const printWithDelay = debounce((e) => {
  console.log(e.target.value);
}, 500);

input.addEventListener("input", printWithDelay);

function debounce(fn, delay = 400) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// ----------------------TASTK 2

const tripleButton = document.getElementById("curied-button");

tripleButton.addEventListener("click", () => console.log(sum(5)(3)(2)));

function sum(a) {
  return (b) => {
    return (c) => a + b + c;
  };
}

// ----------------------------TASK 3

const hibutton = document.getElementById("hi-button");

hibutton.addEventListener("click", () => {
  sayHi("John");
});

function greet(greeting) {
  return (name) => console.log(`${greeting}, ${name}`);
}

const sayHi = greet("Hi");

// -------------------------------TASK 4

const user1 = {
  name: "Alice",
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

const user2 = {
  name: "Bob",
};

console.log(user1.greet.call(user2));

// --------------------------------TASK 5

const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
};

const increment = counter.increment.bind(counter);

const clickMe = document.getElementById("clickBtn");

clickMe.addEventListener("click", increment);

// --------------------------------------TASK 6

let arr = [1, 2, 3, 6, 6, 8, 3, 3, 9, 10, 12, 12];

let set = new Set(arr);

console.log([...set]);

let arr2 = [1, 1, 1, 1, 1, 2, 3, 4, 3, 4, 4];

function deleteDuplicate(arr) {
  let arrN = [];
  for (let i = 0; i < arr.length; i++) {
    if (arrN.includes(arr[i])) {
      continue;
    } else {
      arrN.push(arr[i]);
    }
  }
  return arrN;
}

console.log(deleteDuplicate(arr2));

// ---------------------------------------- TASK 7

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
];

function groupByAge(people) {
  let map = new Map();

  people.forEach((person) => {
    const { name, age } = person;

    if (map.has(age)) {
      map.set(age, map.get(age) + `, ${name}`);
    } else {
      map.set(age, [name]);
    }
  });

  return map;
}

console.log(groupByAge(people));

// --------------------------------------------- TASK 8

const sales = new Map([
  [101, 10],
  [102, 5],
  [103, 8],
]);

function IncrementSold(map, id) {
  return map.set(id, map.get(id) + 1);
}

console.log(IncrementSold(sales, 102));
