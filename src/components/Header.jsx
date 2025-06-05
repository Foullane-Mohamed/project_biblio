import styles from '../styles/Header.module.css'

const Header = ({ title, showAddButton = false, onAddClick, onBackClick, showBackButton = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          {showBackButton && (
            <button className={styles.backButton} onClick={onBackClick}>
              ←
            </button>
          )}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>📚</div>
            <span className={styles.logoText}>Biblio</span>
          </div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navItem}>Tableau de bord</a>
            <a href="#" className={`${styles.navItem} ${styles.active}`}>Rayonnages</a>
            <a href="#" className={styles.navItem}>Livres</a>
            <a href="#" className={styles.navItem}>Recherche</a>
          </nav>
        </div>
        <div className={styles.rightSection}>
          <button className={styles.iconButton}>🔔</button>
          <button className={styles.iconButton}>🌙</button>
          <div className={styles.userProfile}>
            <div className={styles.avatar}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.pageHeader}>
        <div className={styles.pageTitle}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>Gérez les rayonnages et leur structure hiérarchique</p>
        </div>
        {showAddButton && (
          <button className={styles.addButton} onClick={onAddClick}>
            + Ajouter un rayonnage
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
