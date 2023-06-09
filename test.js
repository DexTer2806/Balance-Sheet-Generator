const fs = require('fs');

function calculateBalanceSheet(inputFile) {
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

  const startDate = data.expenseData[0].startDate;
  const balanceSheet = {};

  data.revenueData.forEach(entry => {
    const timestamp = entry.startDate;
    const month = timestamp.slice(0, 7);
    const amount = entry.amount;
    balanceSheet[month] = (balanceSheet[month] || 0) + amount;
  });

  data.expenseData.forEach(entry => {
    const timestamp = entry.startDate;
    const month = timestamp.slice(0, 7);
    const amount = entry.amount;
    balanceSheet[month] = (balanceSheet[month] || 0) - amount;
  });

  const sortedBalanceSheet = Object.entries(balanceSheet).sort((a, b) => a[0].localeCompare(b[0]));

  return sortedBalanceSheet;
}

const inputFile = '2-input.json';
const balanceSheet = calculateBalanceSheet(inputFile);
console.log(JSON.stringify(balanceSheet, null, 4));
