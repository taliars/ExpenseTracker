import React, { FC } from "react";
import "./ExpenseDate.css";

const ExpenseDate: FC<{ date: Date }> = ({ date }) => {
  const month = date.toLocaleString("en-Us", { month: "long" });
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense_date__month">{month}</div>
      <div className="expense_date__day">{day}</div>
      <div className="expense_date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
