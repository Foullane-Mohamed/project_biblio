import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/AddShelf.module.css'

const AddShelf = ({ onNavigateBack }) => {
  const [shelfName, setShelfName] = useState('')
  const [compartmentCount, setCompartmentCount] = useState(3)
  const [shelvesPerCompartment, setShelvesPerCompartment] = useState(3)
  const [locationsPerShelf, setLocationsPerShelf] = useState(10)

  const generatePreview = () => {
    const compartments = []
    for (let i = 1; i <= compartmentCount; i++) {
      const shelves = []
      for (let j = 1; j <= shelvesPerCompartment; j++) {
        shelves.push({
          id: j,
          name: `Étagère ${j}`,
          locations: locationsPerShelf
        })
      }
      compartments.push({
        id: i,
        name: `Compartiment ${i}`,
        shelves
      })
    }
    return compartments
  }

  const totalShelves = compartmentCount * shelvesPerCompartment
  const totalLocations = totalShelves * locationsPerShelf
  const previewData = generatePreview()

  const handleSubmit = () => {
    if (!shelfName.trim()) {
      alert('Veuillez entrer un nom pour le rayonnage')
      return
    }
    
    console.log('Creating shelf:', {
      name: shelfName,
      compartments: compartmentCount,
      shelvesPerCompartment,
      locationsPerShelf,
      totalShelves,
      totalLocations
    })
    
    // Here you would typically save to your backend
    alert('Rayonnage créé avec succès!')
    onNavigateBack()
  }

  return (
    <div className={styles.addShelf}>
      <Header 
        title="Ajouter un Rayonnage"
        showBackButton={true}
        onBackClick={onNavigateBack}
      />
      
      <main className={styles.mainContent}>
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>📋</div>
              <div>
                <h3>Informations du Rayonnage</h3>
                <p>Créez un nouveau rayonnage avec sa structure complète</p>
              </div>
            </div>

            <div className={styles.formBody}>
              <div className={styles.inputGroup}>
                <label>Nom du Rayonnage</label>
                <input
                  type="text"
                  placeholder="Ex: Sciences, Littérature, A-Z..."
                  value={shelfName}
                  onChange={(e) => setShelfName(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.structureSection}>
                <h4>Structure Automatique</h4>
                <p>La structure suivante sera automatiquement créée. Vous pouvez ajuster les valeurs par défaut.</p>

                <div className={styles.sliderGroup}>
                  <label>Nombre de Compartiments</label>
                  <div className={styles.sliderContainer}>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={compartmentCount}
                      onChange={(e) => setCompartmentCount(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <span className={styles.sliderValue}>{compartmentCount}</span>
                  </div>
                </div>

                <div className={styles.sliderGroup}>
                  <label>Nombre d'Étagères par Compartiment</label>
                  <div className={styles.sliderContainer}>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={shelvesPerCompartment}
                      onChange={(e) => setShelvesPerCompartment(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <span className={styles.sliderValue}>{shelvesPerCompartment}</span>
                  </div>
                </div>

                <div className={styles.sliderGroup}>
                  <label>Nombre d'Emplacements par Étagère</label>
                  <div className={styles.sliderContainer}>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      value={locationsPerShelf}
                      onChange={(e) => setLocationsPerShelf(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <span className={styles.sliderValue}>{locationsPerShelf}</span>
                  </div>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button className={styles.cancelButton} onClick={onNavigateBack}>
                  Annuler
                </button>
                <button className={styles.createButton} onClick={handleSubmit}>
                  📋 Créer le Rayonnage
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <h3>Aperçu de la Structure</h3>
              <p>Visualisation de la structure qui sera créée</p>
            </div>

            <div className={styles.previewContent}>
              <div className={styles.previewTitle}>
                Rayonnage: {shelfName || 'Nouveau Rayonnage'}
              </div>

              <div className={styles.compartmentsGrid}>
                {previewData.map(compartment => (
                  <div key={compartment.id} className={styles.compartment}>
                    <div className={styles.compartmentTitle}>
                      {compartment.name}
                    </div>
                    <div className={styles.shelvesGrid}>
                      {compartment.shelves.map(shelf => (
                        <div key={shelf.id} className={styles.shelf}>
                          <div className={styles.shelfTitle}>{shelf.name}</div>
                          <div className={styles.locations}>
                            {Array.from({ length: Math.min(shelf.locations, 6) }, (_, i) => (
                              <div key={i} className={styles.location}></div>
                            ))}
                            {shelf.locations > 6 && (
                              <div className={styles.moreLocations}>
                                +{shelf.locations - 6}...
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryTitle}>Résumé de la structure</div>
              <div className={styles.summaryStats}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Rayonnages:</span>
                  <span className={styles.summaryValue}>1</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Compartiments:</span>
                  <span className={styles.summaryValue}>{compartmentCount}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Étagères au total:</span>
                  <span className={styles.summaryValue}>{totalShelves}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Emplacements au total:</span>
                  <span className={styles.summaryValue}>{totalLocations}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddShelf
