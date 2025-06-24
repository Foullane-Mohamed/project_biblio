import React from "react";
import {
  Book,
  Layers,
  Package,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";
import "../../styles/components/RayonnageCard.css";

const RayonnageCard = ({ rayonnage, viewMode }) => {
  const { nom, nbLivres, capacite, status } = rayonnage;
  const occupancy = (nbLivres / capacite) * 100;

  const statusClass = status.toLowerCase().replace(" ", "-");

  if (viewMode === "list") {
    return (
      <div className="rayonnage-card list-view">
        <div className="card-header">
          <h3 className="card-title">{nom}</h3>
        </div>
        <div className="card-stats">
          <span>
            {nbLivres} / {capacite} livres
          </span>
        </div>
        <div className="card-body">
          <div className="capacity-bar">
            <div
              className="capacity-fill"
              style={{ width: `${occupancy}%` }}
            ></div>
          </div>
        </div>
        <div className={`card-status ${statusClass}`}>{status}</div>
        <div className="card-footer">
          <button className="icon-button">
            <Edit size={18} />
          </button>
          <button className="icon-button danger">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rayonnage-card grid-view">
      <div className="card-header">
        <h3 className="card-title">{nom}</h3>
        <div className={`card-status ${statusClass}`}>{status}</div>
      </div>
      <div className="card-body">
        <div className="capacity-bar">
          <div
            className="capacity-fill"
            style={{ width: `${occupancy}%` }}
          ></div>
        </div>
        <div className="card-stats">
          <span>
            {nbLivres} / {capacite} livres
          </span>
          <span>{occupancy.toFixed(0)}%</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="icon-button">
          <Edit size={18} />
        </button>
        <button className="icon-button danger">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default RayonnageCard;
