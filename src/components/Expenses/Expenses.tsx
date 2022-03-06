import React, { FC, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseData from "../../model/ExpenseData";
import ExpensesChart from "./ExpensesChart";
import styles from "./Expenses.module.css";

type Props = FC<{ expenses: ExpenseData[] }>;

const Expenses: Props = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterChangeHandler = (year: string) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (x) => x.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
