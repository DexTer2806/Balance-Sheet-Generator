# Balance-Sheet-Generator
 The program should output the answer/ balance sheet to the console. The balance for any month is the sum of all revenue for the month - sum of all expense for the month (`revenue.amount - expense.amount`). Sort the balancesheet in ascending order by timestamp.
 
# Imp. Instruction
You should replace 'input.json' with the path to your input file, and the program will output the balance sheet month-wise for the given test cases

# Working Procedure 

1. The code begins with importing the `fs` module, which is a built-in module in Node.js used for file system operations.

2. The `calculateBalanceSheet` function takes an `inputFile` parameter, which represents the path to the input JSON file. It performs the following steps:

   - It reads the content of the JSON file synchronously using `fs.readFileSync` and parses it into a JavaScript object using `JSON.parse`. The resulting data object contains the revenue and expense information.
   - It extracts the start date from the first entry in the `expenseData` array and assigns it to the `startDate` variable.
   - It initializes an empty `balanceSheet` object to store the calculated balances for each month.

   - It iterates over each entry in the `revenueData` array using the `forEach` method. For each entry, it extracts the timestamp and month, and adds the corresponding revenue amount to the `balanceSheet` object.

   - It iterates over each entry in the `expenseData` array using the `forEach` method. For each entry, it extracts the timestamp and month, and subtracts the corresponding expense amount from the `balanceSheet` object.

   - It converts the `balanceSheet` object into an array of key-value pairs using `Object.entries`. The resulting array is then sorted based on the month using the `sort` method with a custom comparison function.

   - Finally, the sorted balance sheet array is returned.

3. The code defines the `inputFile` variable, which represents the path to the input JSON file.

4. It calls the `calculateBalanceSheet` function with the `inputFile` as an argument and assigns the result to the `balanceSheet` variable.

5. The code uses `console.log` to print the `balanceSheet` array as a formatted JSON string. The `JSON.stringify` method is used with indentation `4` to make the output more readable.

The overall purpose of the code is to read the input JSON file, calculate the balance sheet month-wise by summing the revenue and subtracting the expenses, and then print the resulting balance sheet as a JSON string.
