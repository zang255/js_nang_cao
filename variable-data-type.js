
//giang

// console.log(1);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Console error & warning
// console.error('Alert');
// console.warn('Warning');

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// // Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);


//bài 3
// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'John';
// const lastName = 'Doe';
// let age = 30;
// console.log(firstName);
// console.log(lastName);
// const arr=[1,2,3,4];
// arr.push(5);
// arr.push('g');
// console.log(arr);
// String
// const firstName = 'Sara';

// // Number
// const age = 30;
// const temp = 98.9;

// // Boolean
// const hasKids = true;

// // Null
// const aptNumber = null;

// // Undefined
// // let score;
// const score = undefined;
// //console.log(score);
// // Symbol
// const id = Symbol('id');

// // BigInt
// const n = 9007199254740991n;

// // Reference Types

// const numbers = [1, 2, 3, 4];

// const people = {
//   name: 'Brad',
// };

// function sayHello() {
//   console.log('Hello');
// }

// const output = sayHello;

// console.log(output, typeof output); 


//let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;


// x = 'Hello' + ' ' + 'World';

// x = 2 ** 3;


//  x = 1;

//  x++;


//  x--;



//  x = 5;

//  x += 5;
//  x -= 5;
//  x *= 5;
//  x /= 5;
//   x %= 5;
//  x **= 5;




//  x = 2 == '2';


//  x = 2 === '2';


//  x = 2 != '2';


//  x = 2 !== 2;

//  x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);



// x = 5 + '5';

//  x = 5 + Number('5');


//  x = 5 * '5';


//  x = 5 + null;

//  x = Number(null);

// x = Number(true);
// x = Number(false);


//  x = 5 + true;


//  x = 5 + false;


//  x = 5 + undefined;

// console.log(x, typeof x);




// const name = 'John';
// const age = 31;


// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';


//  x = `Hello, my name is ${name} and I am ${age} years old`;


//  const s = new String('Hello World');

//  x = typeof s;

//  x = s.length;

//  x = s[0];


//  x = s.__proto__;


// x = s.toUpperCase();
// x = s.toLowerCase();


// x = s.charAt(0);


// x = s.indexOf('d');


// x = s.substring(2, 5);
// x = s.substring(7);


// x = s.slice(-11, -6);


// x = '         Hello World';
// x = x.trim();


// x = s.replace('World', 'John');


// x = s.includes('Hell');


// x = s.valueOf();


// x = s.split('');


// // Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);
// const num = new Number(5);

// // toString() - returns a string representation of the number
// x = num.toString();
// // To get the length
// x = num.toString().length;

// // toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2);

// // toPrecision() - returns a number with the specified length
// x = num.toPrecision(3);

// // toExponential() -  convert a number to exponential notation and return its value as a string
// x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
// x = num.toLocaleString('en-US');

// // valueOf - Get value
// x = num.valueOf();

// // The Number object itself has some properties and methods

// // Largest and smallest possible number
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;



// // Square root
// x = Math.sqrt(9);

// // Absolute value
// x = Math.abs(-5);

// // Round
// x = Math.round(4.2);

// // Round up
// x = Math.ceil(4.2);

// // Round down
// x = Math.floor(4.9);

// // Exponent
// x = Math.pow(2, 3);

// // Minimum number
// x = Math.min(4, 5, 3);

// // Maximum number
// x = Math.max(4, 5, 3);

// // Get a random number/decimal between 0 and 1
// x = Math.random();

// // Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);
// console.log(x);
// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);

// console.log(d);

// let x;
// let d = new Date();

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);