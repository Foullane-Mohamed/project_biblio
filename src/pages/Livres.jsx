import React, { useState } from "react";
import {
  Book,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  PlusCircle,
} from "lucide-react";
import "../styles/pages/Livres.css";
import LivreCard from "../components/livres/LivreCard";

const Livres = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample data for books
  const livres = [
    {
      id: 1,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      isbn: "978-2070408504",
      category: "Littérature",
      status: "disponible",
      rayonnage: "Littérature Classique",
      emplacement: "A1-B2",
      addedDate: "2024-01-15",
      cover: "📚",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      isbn: "978-2070368228",
      category: "Science-Fiction",
      status: "emprunté",
      rayonnage: "Sciences et Technologies",
      emplacement: "B3-C1",
      addedDate: "2024-01-14",
      cover: "📖",
    },
    {
      id: 3,
      title: "Harry Potter à l'école des sorciers",
      author: "J.K. Rowling",
      isbn: "978-2070541270",
      category: "Fantasy",
      status: "disponible",
      rayonnage: "Jeunesse",
      emplacement: "C2-D1",
      addedDate: "2024-01-13",
      cover: "🔮",
    },
    {
      id: 4,
      title: "Le Seigneur des Anneaux",
      author: "J.R.R. Tolkien",
      isbn: "978-2070612888",
      category: "Fantasy",
      status: "disponible",
      rayonnage: "Littérature Classique",
      emplacement: "A2-B3",
      addedDate: "2024-01-12",
      cover: "💍",
    },
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      isbn: "978-2070368229",
      category: "Science-Fiction",
      status: "emprunté",
      rayonnage: "Sciences et Technologies",
      emplacement: "B1-C2",
      addedDate: "2024-01-11",
      cover: "🏜️",
    },
    {
      id: 6,
      title: "Les Misérables",
      author: "Victor Hugo",
      isbn: "978-2070408505",
      category: "Littérature",
      status: "disponible",
      rayonnage: "Littérature Classique",
      emplacement: "A3-B1",
      addedDate: "2024-01-10",
      cover: "📜",
    },
  ];

  const categories = [
    "all",
    "Littérature",
    "Science-Fiction",
    "Fantasy",
    "Histoire",
    "Philosophie",
    "Art",
    "Jeunesse",
  ];
  const statuses = ["all", "disponible", "emprunté", "réservé", "maintenance"];

  const filteredLivres = livres.filter((livre) => {
    const matchesSearch =
      livre.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livre.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livre.isbn.includes(searchTerm);
    const matchesCategory =
      filterCategory === "all" || livre.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || livre.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "disponible":
        return "var(--success-color)";
      case "emprunté":
        return "var(--warning-color)";
      case "réservé":
        return "var(--primary-color)";
      case "maintenance":
        return "var(--error-color)";
      default:
        return "var(--text-muted)";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "disponible":
        return "Disponible";
      case "emprunté":
        return "Emprunté";
      case "réservé":
        return "Réservé";
      case "maintenance":
        return "Maintenance";
      default:
        return status;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="livres-page fade-in">
      <header className="livres-header">
        <h1 className="livres-title">Catalogue de Livres</h1>
        <div className="livres-actions">
          <div className="search-bar">
            <Search size={20} color="var(--text-tertiary-light)" />
            <input
              type="text"
              placeholder="Rechercher un livre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-button">
            <Filter size={20} />
          </button>
          <button className="icon-button" onClick={() => setViewMode("list")}>
            <List size={20} />
          </button>
          <button className="icon-button" onClick={() => setViewMode("grid")}>
            <Grid size={20} />
          </button>
          <button className="add-button">
            <PlusCircle size={20} />
            <span>Ajouter un Livre</span>
          </button>
        </div>
      </header>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="filter-dropdown">
          <Filter size={16} />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "Toutes les catégories" : category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-dropdown">
          <Filter size={16} />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === "all" ? "Tous les statuts" : getStatusText(status)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-overview">
        <div className="stat-item">
          <div className="stat-icon">
            <Book size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{livres.length}</div>
            <div className="stat-label">Total livres</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <Book size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">
              {livres.filter((l) => l.status === "disponible").length}
            </div>
            <div className="stat-label">Disponibles</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <Book size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">
              {livres.filter((l) => l.status === "emprunté").length}
            </div>
            <div className="stat-label">Empruntés</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <Book size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">
              {new Set(livres.map((l) => l.category)).size}
            </div>
            <div className="stat-label">Catégories</div>
          </div>
        </div>
      </div>

      {/* Books Grid/List */}
      <div className={`livres-container ${viewMode}`}>
        {filteredLivres.length > 0 ? (
          filteredLivres.map((livre) => (
            <LivreCard key={livre.id} livre={livre} viewMode={viewMode} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <h3 className="empty-state-title">Aucun livre trouvé</h3>
            <p className="empty-state-description">
              {searchTerm || filterCategory !== "all" || filterStatus !== "all"
                ? "Essayez de modifier vos critères de recherche"
                : "Commencez par ajouter votre premier livre"}
            </p>
            {!searchTerm &&
              filterCategory === "all" &&
              filterStatus === "all" && (
                <button className="btn btn-primary">
                  <Plus size={16} />
                  Ajouter un livre
                </button>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Livres;
