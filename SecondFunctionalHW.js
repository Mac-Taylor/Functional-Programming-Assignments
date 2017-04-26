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
    let total = nmbrs.reduce(sum, 0);
    return total / anything.length;
} // this is the function that will get the average given an array of numbers 'anything'

console.log(avg(nmbrs)); // There it is! Returned 15!

//=============================================================================================

// PROBLEM 2 - 'containsVowels' function 

let letters = 'aghtyi' // should return 'true'
let more_letters = 'ghjkl' // should return 'false'

function SplitUp(anything) {
    let ltrs = anything.split('');
    return ltrs;
} // This function splits up the string into an array.

function IsVowel(whatever) {
    if ((whatever === 'a') || (whatever === 'e') || (whatever === 'i') || (whatever === 'o') || (whatever === 'u')) {
        return true;
    } else {
        return false;
    }
} // Is this a vowel? If so, return true, if not, return false.

function containsVowels(str) {
    let results = SplitUp(str);
    let vowels = results.filter(IsVowel);
    if (vowels.length > 0) {
        return true;
    } else {
        return false;
    }
} //This is the function.

console.log(containsVowels(letters)); //This input should return 'true'. 'more_letters' will return 'false'.

//=============================================================================================

// PROBLEM 3 - 'pigLatin' function 

let test1 = 'Mac';
let test2 = 'Long day.'

function firstLetter(word) {
    let first = word.slice(0, 1);
    return first;
} // function grabs the first letter of the string

function remaining_letters(word) {
    let remaining = word.slice(1);
    return remaining;
} // function isolates the remaining letters of the 

function pigLatin(str) {
    let endresult = remaining_letters(str) + firstLetter(str) + 'ay';
    return endresult;
} //I figured out how to get it to run pigLatin on one-word strings, having trouble with phrases. Will ask
// or come back, know it has something to do with filter but am stuck right now.

console.log(pigLatin(test1));

//=============================================================================================

// PROBLEM 4 - 'longestWord' function

let a_test = 'the longest word in this string is hippopotamus';
let b_test = 'onomatopoeia is the longest word in this string';
let c_test = 'the longest word is orangutan in this string';

function which_is_longer(current, longest) {
    if (current.length > longest.length) {
        return current;
    } else {
        return longest;
    }
} // inequality function to use as parameter in longestWord, use reduce to find longest word

function longestWord(str) {
    let split = str.split(' ');
    let longestword = split.reduce(which_is_longer, 0);
    return longestword;
} //'longestWord' finds the longest word in a given string

console.log(longestWord(c_test)); // this test returns 'orangutan'

//=============================================================================================

// PROBLEM 5 - 'multiples' function



function range(min, max) {
  let nums = [];

  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return nums;
} /* Generate an array of numbers from `min` to `max`. */

function multiples(nmbr, other_nmbr) {

} // having trouble getting started