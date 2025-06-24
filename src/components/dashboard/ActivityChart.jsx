import React from "react";
import "../../styles/components/ActivityChart.css";

const ActivityChart = () => {
  return (
    <div className="activity-chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Activité des emprunts</h3>
        <select className="form-select">
          <option>Ce mois</option>
          <option>3 derniers mois</option>
          <option>Cette année</option>
        </select>
      </div>
      <div className="chart-placeholder">[ Chart Area ]</div>
    </div>
  );
};

export default ActivityChart;
