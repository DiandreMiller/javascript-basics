// 💡 10-Part JavaScript Banking System Challenge

// Part 1: Basic Account Class

// 1. Create a BankAccount class
// Write a class BankAccount with the following:
// 	•	A constructor that accepts accountHolder and initialBalance.
// 	•	A private #balance field.
// 	•	A private #transactionHistory array.
// 	•	Methods:
// 	•	deposit(amount)
// 	•	withdraw(amount)
// 	•	getBalance()
// 	•	getHistory()

// ⸻

// Part 2: Inheritance with SavingsAccount

// 2. Create a SavingsAccount class that extends BankAccount
// Add:
// 	•	A constructor that takes interestRate in addition to the normal properties.
// 	•	A method applyInterest() that calculates interest on the current balance and deposits it.

// ⸻


// Part 3: Extend Native Array Class

// 3. Create a custom class BankAccountArray that extends the built-in Array class
// Add the following methods:
// 	•	findByName(name): returns the account with the given accountHolder name.
// 	•	totalBalance(): returns the total of all balances.
// 	•	sortByBalance(desc): returns a new array sorted by balance ascending or descending.

// ⸻

// Part 4: Bank as a Composition Class

// 4. Create a Bank class that contains a BankAccountArray
// Include:
// 	•	A constructor that sets the bank name and initializes the account array.
// 	•	Methods:
// 	•	addAccount(account)
// 	•	findAccount(name)
// 	•	getTotalAssets()

// ⸻


// Part 5: Static Utility Functions

// 5. Create a BankUtils class with static methods
// Write:
// 	•	formatCurrency(amount) – returns a string like $500.00
// 	•	topAccounts(accounts, n) – returns the top n accounts with the highest balance.

// ⸻

// Part 6: Encapsulation Practice

// 6. Why is using #balance instead of a public property beneficial in the BankAccount class?
// Write a short explanation about encapsulation and data protection.

// ⸻

// Part 7: Using the Bank Class

// 7. Instantiate a bank and add at least 4 accounts
// Do the following:
// 	•	Add at least one SavingsAccount
// 	•	Apply interest to a savings account
// 	•	Deposit money into a regular account
// 	•	Use getTotalAssets() to check total funds

// ⸻

// Part 8: Filter and Format

// 8. Use BankUtils.topAccounts to find and print the top 3 accounts
// Make sure to use BankUtils.formatCurrency() to print the balances nicely.

// ⸻

// Part 9: Sorting Practice

// 9. Sort all accounts in ascending order by balance using sortByBalance()
// Log each account’s name and balance.

// ⸻

// Part 10: Bonus – Method Chaining (Advanced)

// 10. Make BankAccountArray support method chaining
// Modify sortByBalance() so that you can do:


// bank.accounts.sortByBalance().filter(acc => acc.getBalance() > 1000);

// ⸻

