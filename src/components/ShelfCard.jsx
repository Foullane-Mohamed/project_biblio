import styles from '../styles/ShelfCard.module.css'

const ShelfCard = ({ 
  title, 
  bookCount, 
  compartments, 
  shelves, 
  locations, 
  books, 
  color = 'blue',
  onManage 
}) => {
  const colorClasses = {
    blue: styles.blue,
    purple: styles.purple,
    green: styles.green,
    orange: styles.orange,
    red: styles.red,
    indigo: styles.indigo
  }

  return (
    <div className={`${styles.shelfCard} ${colorClasses[color]}`}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
          <button className={styles.menuButton}>⋯</button>
        </div>
        <div className={styles.bookCount}>
          {bookCount} livres
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.statRow}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>📁</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{compartments}</span>
              <span className={styles.statLabel}>Compartiments</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>📚</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{shelves}</span>
              <span className={styles.statLabel}>Étagères</span>
            </div>
          </div>
        </div>

        <div className={styles.statRow}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>📍</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{locations}</span>
              <span className={styles.statLabel}>Emplacements</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>📖</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{books}</span>
              <span className={styles.statLabel}>Livres</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.manageButton} onClick={onManage}>
          ✏️ Gérer
        </button>
      </div>
    </div>
  )
}

export default ShelfCard
