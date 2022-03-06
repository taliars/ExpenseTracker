import React, { FC, useRef, FormEvent, RefObject } from "react";
import ExpenseData from "../../model/ExpenseData";
import styles from "./ExpenseForm.module.css";

type Props = FC<{
  onSaveExpense: (enteredExpense: ExpenseData) => void;
  onCancel: () => void;
}>;

const ExpenseForm: Props = ({ onSaveExpense, onCancel }) => {
  const enteredTitleRef = useRef<HTMLInputElement>(null);
  const enteredAmountRef = useRef<HTMLInputElement>(null);
  const enteredDateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const getValue = (ref: RefObject<HTMLInputElement>) =>
      ref.current?.value.trim() ?? "";

    const title = getValue(enteredTitleRef);
    const amount = getValue(enteredAmountRef);
    const data = getValue(enteredDateRef);

    if ([title, amount, data].some((x) => x.length === 0)) {
      console.error("Invalid input data");
      return;
    }

    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: parseFloat(amount),
      date: new Date(data),
    };

    onSaveExpense(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Title</label>
          <input type="text" ref={enteredTitleRef} />
        </div>
        <div className={styles.new_expense__control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" ref={enteredAmountRef} />
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            ref={enteredDateRef}
          />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
