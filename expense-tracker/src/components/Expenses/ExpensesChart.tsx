import React, { FC } from "react";
import ExpenseData from "../../model/ExpenseData";

import Chart from "../Chart/Chart";

type Props = FC<{ expenses: ExpenseData[] }>;

const ExpensesChart: Props = ({ expenses }) => {
  const chartDataPoints = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => ({ label: month, value: 0 }));

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
