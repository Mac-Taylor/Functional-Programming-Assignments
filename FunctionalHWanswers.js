//let planets = require('./planets');
//let settlers = require('./settlers');
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

// PROBLEM 2 - SALES TAX 

//IMPERATIVE 

function SalesTax(number) {
    let ListofItems = [];
    for (let i = 0; i < number.length; i++) {
        let taxed = number[i].price * 1.1;

        ListofItems.push({
            name: number[i].name,
            price: taxed
        });
    }
    return ListofItems;
}

let test2i = SalesTax(items);
console.log(test2i);

// FUNCTIONAL

function sales_functional(foods) {
    //Apply sales tax to one item
    function tax_it(food) {
        return {
            name: food.name,
            price: food.price * 1.1,
        }
    }
    return foods.map(tax_it);
}

console.log(sales_functional(items));

// Problem 3

//Imperative

let junk = ['apple', 324, true, '14'];

function zeroes_imperative(items) {
    let new_junk = [];

    for (let i = 0; i < items.length; i++) {
        new_junk.push(0);
    }
    return new_junk;
}

//Functional

function zeroes_functional(items) {
    function zero(item) {
        return 0;
    }
    return items.map(zero);
}

console.log(zeroes_imperative(items));
console.log(zeroes_functional(items));

//Abbreviation Problem #4

// Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
// a capitalized version of the first letter in each word.

//Imperative

let phrase = 'Movein after completion.'

function abbrev_imperative(sentence) {
    let words = sentence.split(' ');
    let abbrev = [];

    for (let i = 0; i < words.length; i++) {
        abbrev.push(words[0].toUpperCase());
    }
    return abbrev.join('');
}

//Functional

function abbrev_functional(sentence) {
    function abbrev(word) {
        return word[0].toUpperCase();
    }

    let words = sentence.split(' ');
    return words.map(abbrev).join('');
}

console.log(abbrev_imperative(phrase));
console.log(abbrev_functional(phrase));

//Problem 6: Write a function that accepts an array of numbers 
//and returns an array of boolean values reflecting whether
//each number is negative (true if yes, false if no).

function negative_imperative(nums) {
    let negative = [];

    for (let = 0; i < nu)
}

function negative_functional(nums) {
    function neg(num) {
        if (num < 0) {
            return true;
        } else {
            return false
        }
        return nums.map(neg);
    }
}

