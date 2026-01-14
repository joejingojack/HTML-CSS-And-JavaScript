/*
 Problem:
  Write a JavaScript program that generates a receipt for a customer's order. The receipt should include each item's name, quantity, price, and total cost.

Input details:

	An array of objects representing ordered items. Each object has:
		- item: Name of the product (string)
		- quantity: Quantity ordered (integer)
		- price: Price per unit (float)
		
Output details:

	A detailed receipt showing each item's details and the grand total
	
Steps to implement:

	1. Define an array of ordered items with at least 3 sample entries
	2. Write a function generateReceipt that takes this array as input
	3. Use a loop to iterate through the items and calculate the total for each item and the grand total
	4. Print the receipt in a formatted string
	
	Hints:
	- The orders array contains objects, each with item, quantity, and price properties representing items ordered.
	- Use a loop to iterate through each object in the orders array.
	- For each item, calculate the total by multiplying quantity and price.
	- Accumulate the totals in a variable grandTotal.
	- Print each item's details and total cost using a formatted string.
	- Finally, print the grand total after iterating through the array.
*/
	
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];
function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------");
    for (let i = 0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}
generateReceipt(orders);