// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(element) {
  drivers.push(element);
}

function destructivelyPrependDriver(element) {
  drivers.unshift(element);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}
