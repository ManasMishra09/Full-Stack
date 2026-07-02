// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function EvenNumbers(Array){
    return Array.filter(function(num) {
        return num % 2 === 0;
    })
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = EvenNumbers(array);
console.log(evenArray); // Output: [2, 4, 6, 8, 10]