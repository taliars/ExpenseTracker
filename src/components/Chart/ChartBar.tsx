import React, { FC } from "react";
import "./ChartBar.css";

type Props = FC<{ maxValue: number; value: number; label: string }>;

const ChartBar: Props = ({ maxValue, value, label }) => {
  const barFillHeight = maxValue > 0 ? Math.round((value / maxValue) * 100) : 0;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: `${barFillHeight}%` }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
