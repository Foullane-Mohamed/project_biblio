import React, { useState } from "react";
import { X, BookOpen, Save } from "lucide-react";
import "../../styles/components/Modal.css";

const CreateRayonnageModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    compartiments: 4,
    etageres: 3,
    emplacements: 12,
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Littérature",
    "Sciences",
    "Histoire",
    "Philosophie",
    "Art",
    "Jeunesse",
    "Technologie",
    "Autres",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.description.trim()) {
      newErrors.description = "La description est requise";
    }

    if (!formData.category) {
      newErrors.category = "La catégorie est requise";
    }

    if (formData.compartiments < 1 || formData.compartiments > 20) {
      newErrors.compartiments =
        "Le nombre de compartiments doit être entre 1 et 20";
    }

    if (formData.etageres < 1 || formData.etageres > 10) {
      newErrors.etageres = "Le nombre d'étagères doit être entre 1 et 10";
    }

    if (formData.emplacements < 1 || formData.emplacements > 1000) {
      newErrors.emplacements =
        "Le nombre d'emplacements doit être entre 1 et 1000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      compartiments: 4,
      etageres: 3,
      emplacements: 12,
    });
    setErrors({});
    onClose();
  };

  const calculateTotalEmplacements = () => {
    return (
      formData.compartiments *
      formData.etageres *
      Math.ceil(
        formData.emplacements / (formData.compartiments * formData.etageres)
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <BookOpen size={20} />
            <h2>Créer un nouveau rayonnage</h2>
          </div>
          <button className="modal-close" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nom du rayonnage *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? "error" : ""}`}
              placeholder="Ex: Littérature Classique"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`form-input ${errors.description ? "error" : ""}`}
              placeholder="Description du rayonnage..."
              rows="3"
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Catégorie *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`form-input ${errors.category ? "error" : ""}`}
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="error-message">{errors.category}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="compartiments" className="form-label">
                Nombre de compartiments
              </label>
              <input
                type="number"
                id="compartiments"
                name="compartiments"
                value={formData.compartiments}
                onChange={handleInputChange}
                className={`form-input ${errors.compartiments ? "error" : ""}`}
                min="1"
                max="20"
              />
              {errors.compartiments && (
                <span className="error-message">{errors.compartiments}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="etageres" className="form-label">
                Étagères par compartiment
              </label>
              <input
                type="number"
                id="etageres"
                name="etageres"
                value={formData.etageres}
                onChange={handleInputChange}
                className={`form-input ${errors.etageres ? "error" : ""}`}
                min="1"
                max="10"
              />
              {errors.etageres && (
                <span className="error-message">{errors.etageres}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="emplacements" className="form-label">
                Emplacements par étagère
              </label>
              <input
                type="number"
                id="emplacements"
                name="emplacements"
                value={formData.emplacements}
                onChange={handleInputChange}
                className={`form-input ${errors.emplacements ? "error" : ""}`}
                min="1"
                max="1000"
              />
              {errors.emplacements && (
                <span className="error-message">{errors.emplacements}</span>
              )}
            </div>
          </div>

          <div className="form-summary">
            <div className="summary-item">
              <span className="summary-label">Total emplacements:</span>
              <span className="summary-value">
                {calculateTotalEmplacements()}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Structure:</span>
              <span className="summary-value">
                {formData.compartiments} compartiments × {formData.etageres}{" "}
                étagères
              </span>
            </div>
          </div>
        </form>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            <Save size={16} />
            Créer le rayonnage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRayonnageModal;
