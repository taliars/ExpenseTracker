import axios from "axios";
import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./model/ExpenseData";

const baseURL =
  "https://expensetracker-e36c2-default-rtdb.firebaseio.com/expenses.json";

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);

  const getExpensesHandler = async () => {
    try {
      const res = await axios.get<ExpenseData[]>(baseURL);
      if (res.data) {
        const expenses = Object.values(res.data).map((x) => ({
          ...x,
          date: new Date(x.date),
        }));
        setExpenses(expenses);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const addExpenseHanlder = async (newExpense: ExpenseData) => {
    setExpenses([newExpense, ...expenses]);
    await axios.post(baseURL, newExpense);
  };

  useEffect(() => {
    getExpensesHandler();
  }, []);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHanlder} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
