import React, { FC } from "react";
import styles from "./ChartBar.module.css";

type Props = FC<{ maxValue: number; value: number; label: string }>;

const ChartBar: Props = ({ maxValue, value, label }) => {
  const barFillHeight = maxValue > 0 ? Math.round((value / maxValue) * 100) : 0;

  return (
    <div className={styles.chart_bar}>
      <div className={styles.chart_bar__inner}>
        <div
          className={styles.chart_bar__fill}
          style={{ height: `${barFillHeight}%` }}
        ></div>
      </div>
      <div className={styles.chart_bar__label}>{label}</div>
    </div>
  );
};

export default ChartBar;
