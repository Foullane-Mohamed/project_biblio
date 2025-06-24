import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Rayonnages from "./pages/Rayonnages";
import Livres from "./pages/Livres";
import Recherche from "./pages/Recherche";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rayonnages" element={<Rayonnages />} />
          <Route path="/livres" element={<Livres />} />
          <Route path="/recherche" element={<Recherche />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
