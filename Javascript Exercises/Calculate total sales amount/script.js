/*
 Problem:
	You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions.

Input details:

	An array of objects representing sales transactions. Each object has the following properties:
		- item: Name of the product (string)
		- quantity: Number of units sold (integer)
		- price: Price per unit (float)
		
Output details:

	A single number representing the total sales amount
	
Steps to implement:

	1. Define an array of sales transactions with at least 3 sample objects
	2. Write a function calculateTotalSales that takes this array as input
	3. Use a loop to iterate through the array and calculate the total sales amount
	4. Print the total sales amount to the console
	
	Hints:
	- The sales array contains objects, each representing a sales transaction with item, quantity, and price properties.
	- Use a loop to go through each object in the sales array.
	- For each object, multiply the quantity by the price to get the total for that item.
	- Accumulate the totals in a variable to get the overall sales amount.
	- Return the accumulated total and display it using console.log.
*/


const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];
function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}
console.log("Total Sales Amount:", calculateTotalSales(sales)); 