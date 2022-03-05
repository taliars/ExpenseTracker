import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenseData } from "./expensesDatas";
import ExpenseData from "./model/ExpenseData";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseHanlder = (expense: ExpenseData) =>
    setExpenses([ expense, ...expenses ]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
