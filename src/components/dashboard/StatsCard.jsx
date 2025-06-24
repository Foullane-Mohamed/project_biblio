import React from "react";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import "../../styles/components/StatsCard.css";

const StatsCard = ({ title, value, color }) => {
  // A simple hashing function to get a different icon for each card
  const getIcon = (title) => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const icons = [TrendingUp, TrendingDown, ArrowRight]; // Add more icons if needed
    return icons[Math.abs(hash) % icons.length] || ArrowRight;
  };

  const CardIcon = getIcon(title);

  return (
    <div className="stats-card">
      <div className="stats-header">
        <span className="stats-title">{title}</span>
        <div
          className="stats-icon"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          <CardIcon size={20} />
        </div>
      </div>
      <div className="stats-body">
        <h3 className="stats-value">{value}</h3>
        <div className="stats-change">
          <TrendingUp size={24} color={color} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
