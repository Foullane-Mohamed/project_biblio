import React, { useState } from "react";
import {
  Search,
  Filter,
  Book,
  BookOpen,
  MapPin,
  Calendar,
  User,
  Eye,
  Download,
  Share2,
} from "lucide-react";
import "../styles/pages/Recherche.css";

const Recherche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample search results
  const sampleResults = [
    {
      id: 1,
      type: "livre",
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      isbn: "978-2070408504",
      category: "Littérature",
      status: "disponible",
      rayonnage: "Littérature Classique",
      emplacement: "A1-B2",
      addedDate: "2024-01-15",
      cover: "📚",
      description:
        "Un conte poétique et philosophique sous l'apparence d'un livre pour enfants.",
    },
    {
      id: 2,
      type: "rayonnage",
      name: "Littérature Classique",
      description: "Rayonnage dédié aux œuvres littéraires classiques",
      category: "Littérature",
      compartiments: 8,
      etageres: 5,
      emplacements: 200,
      livres: 156,
      status: "actif",
      icon: "📚",
    },
    {
      id: 3,
      type: "livre",
      title: "1984",
      author: "George Orwell",
      isbn: "978-2070368228",
      category: "Science-Fiction",
      status: "emprunté",
      rayonnage: "Sciences et Technologies",
      emplacement: "B3-C1",
      addedDate: "2024-01-14",
      cover: "📖",
      description:
        "Un roman d'anticipation dystopique qui dépeint une société totalitaire.",
    },
  ];

  const searchTypes = [
    { value: "all", label: "Tout", icon: Search },
    { value: "livre", label: "Livres", icon: Book },
    { value: "rayonnage", label: "Rayonnages", icon: BookOpen },
    { value: "emplacement", label: "Emplacements", icon: MapPin },
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
  const statuses = [
    "all",
    "disponible",
    "emprunté",
    "réservé",
    "maintenance",
    "actif",
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const filtered = sampleResults.filter((result) => {
        const matchesQuery =
          result.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.isbn?.includes(searchQuery) ||
          result.description?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType = searchType === "all" || result.type === searchType;
        const matchesCategory =
          filterCategory === "all" || result.category === filterCategory;
        const matchesStatus =
          filterStatus === "all" || result.status === filterStatus;

        return matchesQuery && matchesType && matchesCategory && matchesStatus;
      });

      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "disponible":
      case "actif":
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
      case "actif":
        return "Actif";
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
    <div className="recherche-page fade-in">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Recherche avancée</h1>
          <p className="page-subtitle">
            Trouvez rapidement vos livres, rayonnages et emplacements
          </p>
        </div>
      </div>

      {/* Search Interface */}
      <div className="search-interface">
        <div className="search-main">
          <div className="search-input-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher par titre, auteur, ISBN, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-input-main"
            />
            <button
              className="btn btn-primary search-btn"
              onClick={handleSearch}
              disabled={isSearching}
            >
              {isSearching ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  <Search size={16} />
                  Rechercher
                </>
              )}
            </button>
          </div>
        </div>

        <div className="search-filters">
          <div className="filter-group">
            <label className="filter-label">Type de recherche</label>
            <div className="filter-options">
              {searchTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.value}
                    className={`filter-option ${
                      searchType === type.value ? "active" : ""
                    }`}
                    onClick={() => setSearchType(type.value)}
                  >
                    <IconComponent size={16} />
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label className="filter-label">Catégorie</label>
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

            <div className="filter-group">
              <label className="filter-label">Statut</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all"
                      ? "Tous les statuts"
                      : getStatusText(status)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <div className="results-header">
            <h2>Résultats de recherche ({searchResults.length})</h2>
            <div className="results-actions">
              <button className="btn btn-secondary">
                <Download size={16} />
                Exporter
              </button>
              <button className="btn btn-secondary">
                <Share2 size={16} />
                Partager
              </button>
            </div>
          </div>

          <div className="results-grid">
            {searchResults.map((result) => (
              <div key={result.id} className="result-card">
                <div className="result-header">
                  <div className="result-icon">
                    {result.type === "livre" ? (
                      <span className="result-cover">{result.cover}</span>
                    ) : (
                      <span className="result-icon-emoji">{result.icon}</span>
                    )}
                  </div>
                  <div className="result-type">
                    {result.type === "livre" ? "Livre" : "Rayonnage"}
                  </div>
                  <div
                    className="result-status"
                    style={{ backgroundColor: getStatusColor(result.status) }}
                  >
                    {getStatusText(result.status)}
                  </div>
                </div>

                <div className="result-content">
                  <h3 className="result-title">
                    {result.title || result.name}
                  </h3>

                  {result.type === "livre" ? (
                    <>
                      <p className="result-author">
                        <User size={14} />
                        {result.author}
                      </p>
                      <p className="result-isbn">ISBN: {result.isbn}</p>
                      <p className="result-description">{result.description}</p>
                      <div className="result-details">
                        <span className="detail-item">
                          <BookOpen size={14} />
                          {result.rayonnage}
                        </span>
                        <span className="detail-item">
                          <MapPin size={14} />
                          {result.emplacement}
                        </span>
                        <span className="detail-item">
                          <Calendar size={14} />
                          {formatDate(result.addedDate)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="result-description">{result.description}</p>
                      <div className="result-details">
                        <span className="detail-item">
                          <Book size={14} />
                          {result.livres} livres
                        </span>
                        <span className="detail-item">
                          <MapPin size={14} />
                          {result.emplacements} emplacements
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="result-actions">
                  <button className="btn btn-primary btn-sm">
                    <Eye size={14} />
                    Voir détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {searchQuery && searchResults.length === 0 && !isSearching && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>Aucun résultat trouvé</h3>
          <p>
            Aucun résultat ne correspond à votre recherche "{searchQuery}".
            Essayez de modifier vos critères de recherche.
          </p>
          <div className="search-tips">
            <h4>Conseils de recherche :</h4>
            <ul>
              <li>Vérifiez l'orthographe des mots-clés</li>
              <li>Essayez des mots-clés plus généraux</li>
              <li>Utilisez moins de filtres</li>
              <li>Recherchez par ISBN pour les livres</li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Tips */}
      {!searchQuery && (
        <div className="search-tips-section">
          <div className="tips-header">
            <h3>Conseils de recherche</h3>
            <p>Optimisez vos recherches avec ces astuces</p>
          </div>

          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📚</div>
              <h4>Recherche par livre</h4>
              <p>
                Utilisez le titre, l'auteur ou l'ISBN pour trouver un livre
                spécifique
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">📖</div>
              <h4>Recherche par rayonnage</h4>
              <p>Trouvez des rayonnages par nom ou catégorie</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">📍</div>
              <h4>Recherche par emplacement</h4>
              <p>Localisez rapidement un emplacement spécifique</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">🔍</div>
              <h4>Filtres avancés</h4>
              <p>Utilisez les filtres pour affiner vos résultats</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recherche;
