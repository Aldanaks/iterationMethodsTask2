// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

const incomeTransactions = transactions.filter((transaction) => {
  if (transaction[0] == "income") {
    return true;
  } else {
    return false;
  }
});
console.log("Output 1):", incomeTransactions);

// Task 2: Filter expense transactions

const expenseTransactions = transactions.filter((transaction) => {
  if (transaction[0] == "expense") {
    return true;
  } else {
    return false;
  }
});
console.log("Output 2):", expenseTransactions);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

let sum = 0;
const sum1 = incomeTransactions.forEach((task3) => {
  sum = sum + task3[1];
});
console.log("total income):", sum);

let sum2 = 0;
const sumtask4 = expenseTransactions.forEach((task4) => {
  sum2 = sum2 + task4[1];
});
console.log("total expense):", sum2);

//
//  * *********************************************
// Part 3: Net Analysis

// Task 5) Calculate the net total (total income - total expenses) and return it.
//        Output 5) 2400

// Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
//        Output 6) [["income", 1000], ["income", 1500]]

// ******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

let total = sum - sum2;
console.log("net total:", total);

const income = transactions.filter((transaction) => {
  if (transaction[1] > 500) {
    return true;
  } else {
    return false;
  }
});
console.log(income);
