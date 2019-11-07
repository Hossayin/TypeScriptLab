"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    let tallest = mountains[0].height;
    let currentTallest = mountains[0].name;
    mountains.forEach(mountain => {
        if (mountain.height > tallest) {
            tallest = mountain.height;
            currentTallest = mountain.name;
        }
    });
    return currentTallest;
}
let answer = findNameOfTallestMountain(mountains);
console.log(answer);
let products = [
    { name: "clifBar", price: 30 },
    { name: "oxygenTank", price: 220 },
    { name: "snow picks", price: 340 },
    { name: "snow shoes", price: 500 }
];
function calcAverageProductPrice(products) {
    let total = 0;
    products.forEach(product => {
        total += product.price;
    });
    let average = total / products.length;
    return average;
}
let totalAverage = calcAverageProductPrice(products);
console.log(totalAverage);
let inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    let total = 0;
    inventory.map(item => {
        total += item.product.price * item.quantity;
    });
    return total;
}
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
