import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ErrorCard from "./components/UI/ErrorCard";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./model/ExpenseData";
import LoadingCard from "./components/UI/LoadingCard";

const baseURL =
  "https://expensetracker-e36c2-default-rtdb.firebaseio.com/expenses.json";

const getExpenses = async () => {
  const response = await axios.get<ExpenseData[]>(baseURL);

  if (response.data) {
    return Object.values(response.data).map((x) => ({
      ...x,
      date: new Date(x.date),
    }));
  }

  return [];
};

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const getExpensesHandler = useCallback(async () => {
    try {
      const fetchedExpenses = await getExpenses();
      setExpenses(fetchedExpenses);
    } catch (error) {
      if (error instanceof Error) {
        setLoadingError(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addExpenseHanlder = async (newExpense: ExpenseData) => {
    setExpenses([newExpense, ...expenses]);
    await axios.post(baseURL, newExpense);
  };

  useEffect(() => {
    setTimeout(() => getExpensesHandler(), 2000);
  }, [getExpensesHandler]);

  if (isLoading) {
    return <LoadingCard>Loading...</LoadingCard>;
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHanlder} />
      {loadingError ? (
        <ErrorCard>Error on Loading</ErrorCard>
      ) : (
        <Expenses expenses={expenses} />
      )}
    </div>
  );
};

export default App;
