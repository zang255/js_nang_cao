// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // pop() - Take the last value off
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// arr.unshift(99);

// // shift() - Remove first value
// arr.shift();

// // reverse() - Reverse an array
// arr.reverse();

// // includes() - Check to see if something is in the array
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// x = arr.toString();
// x = arr.join();

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);

// let arr1=['a','b','c'];
// let arr2=['f','h','k'];
// let h=arr1.concat(arr2);
// h=[...arr1,...arr2];         //nối các mảng lại với nhau
// console.log(h);


// const arr=[1,2,[3,4],[5,9]];
// const x=arr.flat();
// console.log(x);
// console.log(arr);
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
    hello: function(){
        console.log(`hello cac ban toi la ${this.name}`)
    }
};

let x;
x=person.hello();

//destructuring-naming
const{ name:myName }=person;
console.log(myName);

