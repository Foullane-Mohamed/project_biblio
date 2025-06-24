import React from "react";
import {
  BookOpen,
  Book,
  Users,
  TrendingUp,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  PlusCircle,
} from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import ActivityChart from "../components/dashboard/ActivityChart";
import DistributionChart from "../components/dashboard/DistributionChart";
import RecentBooks from "../components/dashboard/RecentBooks";
import "../styles/pages/Dashboard.css";

const Dashboard = () => {
  const stats = [
    { title: "Livres au total", value: "1,250", change: "+15%", changeType: "increase", color: "#4c6ef5" },
    { title: "Rayonnages", value: "75", change: "+5", changeType: "increase", color: "#28a745" },
    { title: "Emprunts (Mois)", value: "310", change: "-8%", changeType: "decrease", color: "#ff9500" },
    { title: "Visiteurs (24h)", value: "4,820", change: "+2.5%", changeType: "increase", color: "#dc3545" },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "emprunt",
      book: "Le Petit Prince",
      user: "Marie Dupont",
      time: "Il y a 2 heures",
      icon: Book,
    },
    {
      id: 2,
      type: "retour",
      book: "1984",
      user: "Jean Martin",
      time: "Il y a 3 heures",
      icon: Book,
    },
    {
      id: 3,
      type: "ajout",
      book: "Nouveau rayonnage créé",
      user: "Admin",
      time: "Il y a 5 heures",
      icon: BookOpen,
    },
    {
      id: 4,
      type: "emprunt",
      book: "Harry Potter",
      user: "Sophie Bernard",
      time: "Il y a 6 heures",
      icon: Book,
    },
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Tableau de bord</h1>
        <button className="add-button">
          <PlusCircle size={20} />
          <span>Ajouter un livre</span>
        </button>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="activity-chart-container">
        <ActivityChart />
      </div>

      <div className="distribution-chart-container">
        <DistributionChart />
      </div>

      <div className="recent-books-container">
        <RecentBooks />
      </div>
    </div>
  );
};

export default Dashboard;
