import React from "react";
import "../../styles/components/DistributionChart.css";

const DistributionChart = () => {
  const data = [
    { label: "Romans", value: 35, color: "#4c6ef5" },
    { label: "Science-Fiction", value: 30, color: "#28a745" },
    { label: "Biographie", value: 20, color: "#ff9500" },
    { label: "Histoire", value: 15, color: "#dc3545" },
  ];

  return (
    <div className="dist-chart-card">
      <div className="dist-chart-header">
        <h3 className="dist-chart-title">Distribution par genre</h3>
      </div>
      <div className="dist-chart-placeholder">
        <div className="pie-placeholder"></div>
      </div>
      <div className="dist-chart-legend">
        {data.map((item, index) => (
          <div className="legend-item" key={index}>
            <div
              className="legend-color-box"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributionChart;
