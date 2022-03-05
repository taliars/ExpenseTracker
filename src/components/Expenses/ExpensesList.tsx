import React, { FC } from "react";
import ExpenseData from "../../model/ExpenseData";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

type Props = FC<{ items: ExpenseData[] }>;

const ExpenseList: Props = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
