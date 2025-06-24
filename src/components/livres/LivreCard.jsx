import React from "react";
import "../../styles/components/LivreCard.css";
import { Edit, Trash2 } from "lucide-react";

const LivreCard = ({ livre, viewMode }) => {
  const { titre, auteur, genre, annee, status } = livre;
  const coverUrl = `https://source.unsplash.com/random/400x600?book,cover&sig=${livre.id}`;

  const statusClass = status.toLowerCase().replace(" ", "-");

  if (viewMode === "list") {
    return (
      <div className="livre-card list">
        <img
          src={coverUrl}
          alt={`Couverture de ${titre}`}
          className="cover-image"
        />
        <div className="book-info">
          <h4 className="book-title">{titre}</h4>
          <p className="book-author">{auteur}</p>
        </div>
        <span>{genre}</span>
        <span>{annee}</span>
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
    <div className="livre-card grid">
      <img
        src={coverUrl}
        alt={`Couverture de ${titre}`}
        className="cover-image"
      />
      <div className="book-info">
        <h4 className="book-title">{titre}</h4>
        <p className="book-author">{auteur}</p>
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

export default LivreCard;
