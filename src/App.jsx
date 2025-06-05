import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import AddShelf from './pages/AddShelf'


function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigateToAddShelf={() => setCurrentPage('addShelf')} />
      case 'addShelf':
        return <AddShelf onNavigateBack={() => setCurrentPage('dashboard')} />
      default:
        return <Dashboard onNavigateToAddShelf={() => setCurrentPage('addShelf')} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
