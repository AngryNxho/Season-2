"use strict";

const restaurant = {
    name : "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italina", "Pizzeria", "Vegetarian",
    "organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu:["Pizza", "Pasta", "Risotto"],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
    this.mainMenu[mainIndex]]
    }
};

const arr = [2, 3, 4]

const [x, y, z] = arr;
// console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

[main,secondary] = [secondary, main];
// console.log(main,secondary);

//recieve two return values from a function
const [starter, mainCourse] = (restaurant.order(2, 0));
// console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, ,j] = nested

// console.log(i, j);

//Nested destructuring
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9, ];
console.log(p, q, r); 
