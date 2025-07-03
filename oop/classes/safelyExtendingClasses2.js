// 💡 10-Part JavaScript Banking System Challenge

// Part 1: Basic Bank Account Class

// ✅ Task:

// Create a BankAccount class with data encapsulation (using private fields).

// ✅ Requirements:
// 	•	Class name: BankAccount
// 	•	Private fields:
// 	•	#balance (number)
// 	•	#transactionHistory (array)
// 	•	Constructor parameters:
// 	•	accountHolder (string)
// 	•	initialBalance (number)
// 	•	Methods:
// 	•	deposit(amount) → Adds to balance and records the transaction
// 	•	withdraw(amount) → Subtracts from balance (if sufficient funds) and records the transaction
// 	•	getBalance() → Returns current balance (number)
// 	•	getHistory() → Returns array of transaction strings

// ✅ Example:

// const acc = new BankAccount('Alice', 500);
// acc.deposit(200);
// acc.withdraw(100);
// console.log(acc.getBalance()); // Output: 600
// console.log(acc.getHistory()); // Output: ['Deposited: 200', 'Withdrew: 100']

// ⸻

// Part 2: Inheritance with SavingsAccount

// ✅ Task:

// Create a SavingsAccount class that inherits from BankAccount and adds interest functionality.

// ✅ Requirements:
// 	•	Class name: SavingsAccount
// 	•	Inherits from: BankAccount
// 	•	Constructor parameters:
// 	•	accountHolder (string)
// 	•	initialBalance (number)
// 	•	interestRate (number, as a decimal like 0.05 for 5%)
// 	•	Additional Method:
// 	•	applyInterest() → Calculates interest (balance * interestRate) and deposits it.

// ✅ Example:

// const savings = new SavingsAccount('Bob', 1000, 0.05);
// savings.applyInterest();
// console.log(savings.getBalance()); // Output: 1050

// ⸻


// Part 3: Custom BankAccountArray Class (Extending Array)

// ✅ Task:

// Create a BankAccountArray class that extends the built-in Array class, adding custom methods for managing accounts.

// ✅ Requirements:
// 	•	Class name: BankAccountArray
// 	•	Inherits from: JavaScript Array
// 	•	Methods:
// 	•	findByName(name) → Returns the account (object) whose accountHolder matches the string name.
// 	•	totalBalance() → Returns the sum of all account balances (number).
// 	•	sortByBalance(desc) → Returns a new array sorted by balance:
// 	•	If desc is true, sort descending (highest first).
// 	•	If false or omitted, sort ascending (lowest first).

// ✅ Example:
// const accounts = new BankAccountArray();
// accounts.push(new BankAccount('Alice', 500), new BankAccount('Bob', 800));

// console.log(accounts.findByName('Bob')); // Output: Bob's BankAccount object
// console.log(accounts.totalBalance());    // Output: 1300
// console.log(accounts.sortByBalance(true)); // Output: Array sorted high-to-low


// ⸻

// Part 4: Bank Class (Composition)

// ✅ Task:

// Create a Bank class that contains a BankAccountArray as a property.

// ✅ Requirements:
// 	•	Class name: Bank
// 	•	Constructor parameters:
// 	•	name (string)
// 	•	Property:
// 	•	accounts → Instance of BankAccountArray
// 	•	Methods:
// 	•	addAccount(account) → Adds an account (instance of BankAccount or SavingsAccount)
// 	•	findAccount(name) → Finds an account by account holder name
// 	•	getTotalAssets() → Returns total assets (sum of all balances)

// ✅ Example:

// const bank = new Bank('MyBank');
// bank.addAccount(new BankAccount('Alice', 500));
// console.log(bank.getTotalAssets()); // Output: 500


// ⸻


// Part 5: Static Utility Functions – BankUtils

// ✅ Task:

// Create a BankUtils class with static helper methods.

// ✅ Requirements:
// 	•	Class name: BankUtils
// 	•	Static methods:
// 	•	formatCurrency(amount) → Returns a formatted string like $500.00
// 	•	topAccounts(accounts, n) → Returns an array of the top n accounts (by highest balance), sorted descending.

// ✅ Example:

// console.log(BankUtils.formatCurrency(1500)); // Output: "$1,500.00"

// const topAccounts = BankUtils.topAccounts(bank.accounts, 2);
// topAccounts.forEach(acc => console.log(acc.accountHolder));

// // ⸻

// Part 6: Encapsulation Explanation (Short Written Answer)

// ✅ Task:

// Answer this question in 2–4 sentences:

// Why is using #balance (private field) better than making balance a public property in the BankAccount class?

// ✅ Expected Answer:

// You should explain data protection and encapsulation. Example points:
// 	•	Prevents external code from directly changing balance.
// 	•	Ensures balance only changes via controlled methods (deposit, withdraw).


// ⸻

// Part 7: Using the Bank Class (Simulation)

// ✅ Task:

// Simulate real banking actions.

// ✅ Instructions:
// 	•	Create a Bank instance.
// 	•	Add at least 4 accounts, including:
// 	•	At least 1 SavingsAccount
// 	•	Perform the following:
// 	•	Apply interest to the SavingsAccount.
// 	•	Deposit money into at least one regular BankAccount.
// 	•	Use getTotalAssets() to calculate total assets.

// ✅ Example Flow:

// const bank = new Bank('MyBank');
// bank.addAccount(new BankAccount('Alice', 500));
// bank.addAccount(new SavingsAccount('Bob', 1000, 0.05));
// bank.addAccount(new BankAccount('Charlie', 300));
// bank.addAccount(new BankAccount('Dana', 1200));

// bank.findAccount('Bob').applyInterest();
// bank.findAccount('Alice').deposit(200);

// console.log(bank.getTotalAssets()); // Should reflect all balances


// ⸻


// Part 8: Filter and Format Top Accounts

// ✅ Task:

// Find and display the top 3 accounts by balance, formatted as currency.

// ✅ Instructions:
// 	•	Use BankUtils.topAccounts() on your bank’s accounts.
// 	•	For each top account, print:
// 	•	Account holder name
// 	•	Formatted balance (using BankUtils.formatCurrency())

// ✅ Example Output:

// Top 3 Accounts:
// Dana - $1,200.00
// Bob - $1,050.00
// Alice - $700.00

// ⸻

// Part 9: Sort All Accounts by Balance (Ascending)

// ✅ Task:

// Sort all accounts by balance (low to high).

// ✅ Instructions:
// 	•	Use the sortByBalance() method (without desc flag or with false).
// 	•	Log each account’s name and balance.

// ✅ Example Output:

// Account Balances (Low to High):
// Charlie - $300.00
// Alice - $700.00
// Bob - $1,050.00
// Dana - $1,200.00

// ⸻

// Part 10: Bonus – Method Chaining Support (Advanced)

// ✅ Task:

// Enable method chaining on the BankAccountArray class.

// ✅ Instructions:
// 	•	Modify your sortByBalance() so it returns this instead of a new array.
// 	•	This will allow code like:

//     bank.accounts
//     .sortByBalance()
//     .filter(acc => acc.getBalance() > 1000)
//     .forEach(acc => console.log(acc.accountHolder));

//     ✅ Expected Behavior:

// Chaining works. After sorting, .filter() and .forEach() run as expected.

// ⸻


// ✅ ✅ ✅ FINAL NOTES:
// 	•	Every class must be written with clean syntax and correct ES6+ JavaScript.
// 	•	Methods and parameters must exactly match the names and behaviors described here.
// 	•	Test your code thoroughly for each part before moving to the next.


