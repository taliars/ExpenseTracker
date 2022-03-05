import React, { FC } from "react";
import DataPoint from "../../model/DataPoint";
import ChartBar from "./ChartBar";
import './Chart.css';

type Props = FC<{ dataPoints: DataPoint[] }>;

const Chart: Props = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMax}
          label={dataPoint.label}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
