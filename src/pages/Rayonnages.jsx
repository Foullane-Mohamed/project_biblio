import React, { useState } from "react";
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  PlusCircle,
} from "lucide-react";
import RayonnageCard from "../components/rayonnages/RayonnageCard";
import CreateRayonnageModal from "../components/rayonnages/CreateRayonnageModal";
import StatsCard from "../components/dashboard/StatsCard";
import "../styles/pages/Rayonnages.css";

const Rayonnages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Sample data for rayonnages
  const rayonnages = [
    {
      id: 1,
      name: "Littérature Classique",
      description: "Rayonnage dédié aux œuvres littéraires classiques",
      category: "Littérature",
      compartiments: 8,
      etageres: 5,
      emplacements: 200,
      livres: 156,
      status: "actif",
      lastUpdate: "2024-01-15",
    },
    {
      id: 2,
      name: "Sciences et Technologies",
      description: "Livres scientifiques et technologiques",
      category: "Sciences",
      compartiments: 6,
      etageres: 4,
      emplacements: 120,
      livres: 98,
      status: "actif",
      lastUpdate: "2024-01-14",
    },
    {
      id: 3,
      name: "Histoire et Géographie",
      description: "Ouvrages historiques et géographiques",
      category: "Histoire",
      compartiments: 7,
      etageres: 5,
      emplacements: 175,
      livres: 142,
      status: "actif",
      lastUpdate: "2024-01-13",
    },
    {
      id: 4,
      name: "Philosophie",
      description: "Textes philosophiques et essais",
      category: "Philosophie",
      compartiments: 4,
      etageres: 3,
      emplacements: 60,
      livres: 45,
      status: "maintenance",
      lastUpdate: "2024-01-12",
    },
    {
      id: 5,
      name: "Art et Culture",
      description: "Livres d'art et de culture",
      category: "Art",
      compartiments: 5,
      etageres: 4,
      emplacements: 100,
      livres: 78,
      status: "actif",
      lastUpdate: "2024-01-11",
    },
    {
      id: 6,
      name: "Jeunesse",
      description: "Section dédiée aux jeunes lecteurs",
      category: "Jeunesse",
      compartiments: 6,
      etageres: 4,
      emplacements: 120,
      livres: 89,
      status: "actif",
      lastUpdate: "2024-01-10",
    },
  ];

  const categories = [
    "all",
    "Littérature",
    "Sciences",
    "Histoire",
    "Philosophie",
    "Art",
    "Jeunesse",
  ];

  const filteredRayonnages = rayonnages.filter((rayonnage) => {
    const matchesSearch =
      rayonnage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rayonnage.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || rayonnage.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateRayonnage = (rayonnageData) => {
    console.log("Creating new rayonnage:", rayonnageData);
    setIsModalOpen(false);
    // Here you would typically make an API call to create the rayonnage
  };

  const stats = [
    {
      title: "Rayonnages Actifs",
      value: rayonnages.filter((r) => r.status === "actif").length.toString(),
      color: "#4c6ef5",
    },
    {
      title: "Capacité Totale",
      value: rayonnages.reduce((sum, r) => sum + r.emplacements, 0).toString(),
      color: "#28a745",
    },
    {
      title: "Livres Stockés",
      value: rayonnages.reduce((sum, r) => sum + r.livres, 0).toString(),
      color: "#ff9500",
    },
    {
      title: "Taux d'Occupation",
      value:
        Math.round(
          (rayonnages.reduce((sum, r) => sum + r.livres, 0) /
            rayonnages.reduce((sum, r) => sum + r.emplacements, 0)) *
            100
        ) + "%",
      color: "#dc3545",
    },
  ];

  return (
    <div className="rayonnages-page fade-in">
      <header className="rayonnages-header">
        <h1 className="rayonnages-title">Gestion des Rayonnages</h1>
        <div className="rayonnages-actions">
          <div className="search-bar">
            <Search size={20} color="var(--text-tertiary-light)" />
            <input
              type="text"
              placeholder="Rechercher un rayonnage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="view-toggle" onClick={() => setViewMode("list")}>
            <List size={20} />
          </button>
          <button className="view-toggle" onClick={() => setViewMode("grid")}>
            <Grid size={20} />
          </button>
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            <PlusCircle size={20} />
            <span>Nouveau Rayonnage</span>
          </button>
        </div>
      </header>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

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
      </div>

      {/* Rayonnages Grid/List */}
      <div className={`rayonnages-container ${viewMode}`}>
        {filteredRayonnages.length > 0 ? (
          filteredRayonnages.map((rayonnage) => (
            <RayonnageCard
              key={rayonnage.id}
              rayonnage={rayonnage}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <h3 className="empty-state-title">Aucun rayonnage trouvé</h3>
            <p className="empty-state-description">
              {searchTerm || filterCategory !== "all"
                ? "Essayez de modifier vos critères de recherche"
                : "Commencez par créer votre premier rayonnage"}
            </p>
            {!searchTerm && filterCategory === "all" && (
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus size={16} />
                Créer un rayonnage
              </button>
            )}
          </div>
        )}
      </div>

      {/* Create Rayonnage Modal */}
      <CreateRayonnageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateRayonnage}
      />
    </div>
  );
};

export default Rayonnages;
