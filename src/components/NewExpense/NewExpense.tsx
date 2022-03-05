import React, { FC, useState } from "react";
import ExpenseData from "../../model/ExpenseData";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

type Props = FC<{ onAddExpense: (newExpense: ExpenseData) => void }>;

const NewExpense: Props = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHanlder = (enteredExpense: ExpenseData) => {
    onAddExpense(enteredExpense);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHanlder}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
