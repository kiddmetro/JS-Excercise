const constants = [2.72, 3.14, 9.81, 37, 100];

// QUESTION 1

const deConstants = [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(deConstants);

// QUESTION 2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const deCountries = [fin, est, sw, den, nor] = countries;
console.log(deCountries);



// QUESTION 3

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

