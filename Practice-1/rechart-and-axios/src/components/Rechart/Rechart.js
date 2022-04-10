import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import Piechart from "./PieChart/Piechart";

const Rechart = () => {
  const data = [
    { name: "Page A", marks: 90, pv: 2400, amt: 2400 },
    { name: "Page B", marks: 65, pv: 2400, amt: 2400 },
    { name: "Page D", marks: 88, pv: 2400, amt: 2400 },
    { name: "Page E", marks: 66, pv: 2400, amt: 2400 },
    { name: "Page F", marks: 75, pv: 2400, amt: 2400 },
    { name: "Page G", marks: 80, pv: 2400, amt: 2400 },
  ];

  return (
    <div>
      <div>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar type="monotone" dataKey="marks" fill="#8884d8" />
        </BarChart>
      </div>
      <div>
        <Piechart></Piechart>
      </div>
    </div>
  );
};

export default Rechart;
