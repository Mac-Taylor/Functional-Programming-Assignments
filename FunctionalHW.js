/**
 * This assignment requires that you write IMPERATIVE and FUNCTIONAL versions of the
 * same code.
 *
 * For IMPERATIVE, you should avoid passing functions as parameters.
 * For FUNCTIONAL, you should avoid for loops and mutating variables.
 */

//let planets = require('./planets');
//let settlers = require('./settlers');
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

/**
 * Problem #1
 *
 * Write a function that returns the subjects from a student's report card. Use the REPORTCARD
 * dataset as an input.
 */

// IMPERATIVE SOLUTION BY MAC

function WhatsTheSubject(word) {
    let currentSubject = [];
    for (let i = 0; i < word.length; i++) {
        currentSubject.push(word[i].subject)
    }
    return currentSubject;
}

let test1 = WhatsTheSubject(reportcard);
console.log(test1); 

// FUNCTIONAL SOLUTION BY MAC

let listofsubjects = [];

function IsolateSubject(listofsubjects) {
    let subjectTitle = listofsubjects.subject;
    return subjectTitle;
}

let test2 = reportcard.map(IsolateSubject);
console.log(test2); 

/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */

// IMPERATIVE SOLUTION BY MAC

function SalesTax(number) {
    let ListofPrices = [];
    for (let i = 0; i < number.length; i++) {
        ListofPrices.push(number[i].price * 1.10);
    }
    return ListofPrices;
}

let test3 = SalesTax(items);
console.log(test3);

// 
/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */



/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */


/**
 * Problem #5
 *
 * Write a function that removes all punctuation from a provided sentence (exclamation marks, periods, and 
 * commas). 
 */


/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */



/**
 * Problem #7
 *
 * Write a function that accepts an array of farm animals and returns the distance of each animal from the barn
 * (specified as a number). Use the ANIMALS array as an input for this problem, and assume the barn is at (0, 0).
 *
 * You will need to use the Pythagorean theorem to solve this!
 * https://en.wikipedia.org/wiki/Pythagorean_theorem#Other_forms_of_the_theorem
 */