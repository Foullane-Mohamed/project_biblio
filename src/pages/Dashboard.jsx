import { useState } from 'react'
import Header from '../components/Header'
import ShelfCard from '../components/ShelfCard'
import styles from '../styles/Dashboard.module.css'

const Dashboard = ({ onNavigateToAddShelf }) => {
  const [shelves] = useState([
    {
      id: 1,
      title: 'Sciences',
      bookCount: 132,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 132,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Littérature',
      bookCount: 143,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 143,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Histoire',
      bookCount: 98,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 98,
      color: 'green'
    },
    {
      id: 4,
      title: 'Philosophie',
      bookCount: 76,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 76,
      color: 'orange'
    },
    {
      id: 5,
      title: 'Art',
      bookCount: 54,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 54,
      color: 'red'
    },
    {
      id: 6,
      title: 'A-Z',
      bookCount: 187,
      compartments: 3,
      shelves: 15,
      locations: 150,
      books: 187,
      color: 'indigo'
    }
  ])

  const handleManageShelf = (shelfId) => {
    console.log('Managing shelf:', shelfId)
  }

  return (
    <div className={styles.dashboard}>
      <Header 
        title="Rayonnages" 
        showAddButton={true}
        onAddClick={onNavigateToAddShelf}
      />
      
      <main className={styles.mainContent}>
        <div className={styles.managementSection}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionIcon}>📋</div>
            <div className={styles.sectionContent}>
              <h3>Gestion des Rayonnages</h3>
              <p>Ajoutez, modifiez ou supprimez des rayonnages</p>
              <p className={styles.description}>
                Lorsque vous ajoutez un rayonnage, une structure complète est automatiquement 
                générée avec des compartiments, des étagères et des emplacements par défaut.
              </p>
            </div>
          </div>

          <div className={styles.sectionCard}>
            <div className={styles.sectionIcon}>⚙️</div>
            <div className={styles.sectionContent}>
              <h3>Structure Automatique</h3>
              <p>Configuration par défaut</p>
              
              <div className={styles.configItems}>
                <div className={styles.configItem}>
                  <span>Compartiments par rayonnage:</span>
                  <div className={styles.configValue}>
                    <span>3</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.configItem}>
                  <span>Étagères par compartiment:</span>
                  <div className={styles.configValue}>
                    <span>5</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '50%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.configItem}>
                  <span>Emplacements par étagère:</span>
                  <div className={styles.configValue}>
                    <span>10</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <button className={styles.modifyButton}>
                ⚙️ Modifier les valeurs par défaut
              </button>
            </div>
          </div>
        </div>

        <div className={styles.shelvesGrid}>
          {shelves.map(shelf => (
            <ShelfCard
              key={shelf.id}
              title={shelf.title}
              bookCount={shelf.bookCount}
              compartments={shelf.compartments}
              shelves={shelf.shelves}
              locations={shelf.locations}
              books={shelf.books}
              color={shelf.color}
              onManage={() => handleManageShelf(shelf.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
