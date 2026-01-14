/*
 Problem:
  Write a JavaScript program to validate a list of passwords. A password is valid if:

	- It contains only alphanumeric characters (letters and numbers)
	- It must be at least 8 characters long, but no more than 20 characters
	
	Input details:

		- An array of passwords (strings)
		
	Output details:

		- A message indicating whether each password is valid or invalid
		
	Steps to implement:

		1. Define an array of sample passwords
		2. Write a function validatePasswords that takes this array as input
		3. Use a loop to iterate through the passwords and check each against the validation criteria
		4. Log whether each password is valid or invalid
		
	Hints:
		- The passwords array contains strings that need to be validated based on the given rules.
		- Use a regular expression to define the pattern for valid passwords. The pattern should allow only alphanumeric characters and be between 8 and 20 characters long.
		- Use the test method to check if each password matches the regular expression.
		- Iterate over the passwords array and log each password as either valid or invalid based on the result of the regex check.
*/

const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];
function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}
validatePasswords(passwords);