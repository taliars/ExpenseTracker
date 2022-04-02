import React, { FC } from "react";
import ExpenseData from "../../model/ExpenseData";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

const ExpenseItem: FC<ExpenseData> = ({ title, date, amount }) => {
  return (
    <li>
      <Card className={styles.expense_item}>
        <ExpenseDate date={date} />
        <div className={styles.expense_item__description}>
          <h2>{title}</h2>
          <div className={styles.expense_item__price}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
