import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Book,
  Library,
  Search,
  Settings,
  Moon,
  Sun,
  Menu,
  X,
  BookCopy,
} from "lucide-react";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Dashboard", icon: LayoutDashboard },
    { to: "/livres", text: "Livres", icon: Book },
    { to: "/rayonnages", text: "Rayonnages", icon: Library },
    { to: "/recherche", text: "Recherche", icon: Search },
  ];

  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="navbar-logo">
          <BookCopy className="logo-icon" />
          <span>BiblioTech</span>
        </div>
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.to}>
              <Link
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <link.icon className="nav-icon" />
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-footer">
          <div className="theme-switcher">
            <span className="theme-label">Thème</span>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
};

export default Navbar;
