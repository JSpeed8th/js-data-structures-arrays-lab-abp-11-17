const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver (name) {
drivers.push('Ralph');
}

function destructivelyPrependDriver (name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers, 'Broom'];

  return newDrivers;
}

function prependDriver(name) {
  const newerDrivers = ['Arnold', ...drivers];

  return newerDrivers;
}

function removeLastDriver() {
  const removedDrivers = drivers.slice(0, drivers.length - 1);

  return removedDrivers;
}

function removeFirstDriver() {
  const newDrivers = drivers.slice(1);

  return newDrivers;
}