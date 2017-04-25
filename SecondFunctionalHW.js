// Second Functional Programming Assignment

// NO LOOPS OR DATA MUTATION ALLOWED. DETERMINISTIC. IMMUTABLE. COMPOSABLE.

// map

// filter

// reduce

// PROBLEM 1 - 'avg' function

let nmbrs = [5, 10, 15, 20, 25] // Average of these numbers (
                                 // aka what the function should return) is 15.

function sum(first, second) {
    return first + second;
} 

function avg(anything) {
    let total = nmbrs.reduce(sum,0);
    return total / anything.length;
}

console.log(avg(nmbrs)); // There it is!

// PROBLEM 2 - 