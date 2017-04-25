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