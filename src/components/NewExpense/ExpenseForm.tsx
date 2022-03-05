import React, { FC, useState } from "react";
import ExpenseData from "../../model/ExpenseData";
import "./ExpenseForm.css";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;
type Props = FC<{
  onSaveExpense: (enteredExpense: ExpenseData) => void;
  onCancel: () => void;
}>;

const ExpenseForm: Props = ({onSaveExpense, onCancel}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHanlder = (event: ChangeEvent) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: ChangeEvent) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: ChangeEvent) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };

    onSaveExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
