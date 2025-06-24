import ApiService from './api';

class LivresService {
  constructor() {
    this.endpoint = '/livres';
  }

  // Get all books with optional filters
  async getAllLivres(filters = {}) {
    try {
      // For development, return mock data if API is not available
      const mockData = this.getMockLivres();
      
      // Apply filters to mock data
      let filteredData = mockData;
      
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filteredData = filteredData.filter(livre => 
          livre.title.toLowerCase().includes(search) ||
          livre.author.toLowerCase().includes(search) ||
          livre.isbn.includes(search)
        );
      }
      
      if (filters.category && filters.category !== 'all') {
        filteredData = filteredData.filter(livre => livre.category === filters.category);
      }
      
      if (filters.status && filters.status !== 'all') {
        filteredData = filteredData.filter(livre => livre.status === filters.status);
      }
      
      return {
        data: filteredData,
        total: filteredData.length,
        page: filters.page || 1,
        limit: filters.limit || 10
      };
    } catch (error) {
      console.error('Error fetching livres:', error);
      // Return mock data as fallback
      return {
        data: this.getMockLivres(),
        total: this.getMockLivres().length,
        page: 1,
        limit: 10
      };
    }
  }

  // Get a single book by ID
  async getLivreById(id) {
    try {
      return await ApiService.get(`${this.endpoint}/${id}`);
    } catch (error) {
      console.error('Error fetching livre:', error);
      // Return mock data as fallback
      const mockData = this.getMockLivres();
      return mockData.find(livre => livre.id === parseInt(id));
    }
  }

  // Create a new book
  async createLivre(livreData) {
    try {
      const newLivre = {
        ...livreData,
        id: Date.now(), // Temporary ID generation
        addedDate: new Date().toISOString().split('T')[0],
        status: livreData.status || 'disponible'
      };
      
      console.log('Creating new livre:', newLivre);
      // In a real app, this would be: return await ApiService.post(this.endpoint, livreData);
      return { success: true, data: newLivre };
    } catch (error) {
      console.error('Error creating livre:', error);
      throw new Error('Erreur lors de la création du livre');
    }
  }

  // Update an existing book
  async updateLivre(id, livreData) {
    try {
      const updatedLivre = {
        ...livreData,
        id: parseInt(id),
        updatedDate: new Date().toISOString().split('T')[0]
      };
      
      console.log('Updating livre:', updatedLivre);
      // In a real app, this would be: return await ApiService.put(`${this.endpoint}/${id}`, livreData);
      return { success: true, data: updatedLivre };
    } catch (error) {
      console.error('Error updating livre:', error);
      throw new Error('Erreur lors de la mise à jour du livre');
    }
  }

  // Delete a book
  async deleteLivre(id) {
    try {
      console.log('Deleting livre with ID:', id);
      // In a real app, this would be: return await ApiService.delete(`${this.endpoint}/${id}`);
      return { success: true, message: 'Livre supprimé avec succès' };
    } catch (error) {
      console.error('Error deleting livre:', error);
      throw new Error('Erreur lors de la suppression du livre');
    }
  }

  // Get available categories
  async getCategories() {
    try {
      const mockData = this.getMockLivres();
      const categories = [...new Set(mockData.map(livre => livre.category))];
      return categories.sort();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return ['Littérature', 'Science-Fiction', 'Fantasy', 'Histoire', 'Philosophie', 'Art', 'Jeunesse'];
    }
  }

  // Get books statistics
  async getStats() {
    try {
      const mockData = this.getMockLivres();
      return {
        total: mockData.length,
        disponible: mockData.filter(l => l.status === 'disponible').length,
        emprunte: mockData.filter(l => l.status === 'emprunté').length,
        reserve: mockData.filter(l => l.status === 'réservé').length,
        maintenance: mockData.filter(l => l.status === 'maintenance').length,
        categories: [...new Set(mockData.map(l => l.category))].length
      };
    } catch (error) {
      console.error('Error fetching stats:', error);
      return {
        total: 0,
        disponible: 0,
        emprunte: 0,
        reserve: 0,
        maintenance: 0,
        categories: 0
      };
    }
  }

  // Mock data for development
  getMockLivres() {
    return [
      {
        id: 1,
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        isbn: "978-2070408504",
        category: "Littérature",
        status: "disponible",
        rayonnage: "Littérature Classique",
        emplacement: "A1-B2",
        addedDate: "2024-01-15",
        cover: "📚",
        description: "Un conte philosophique et poétique sous l'apparence d'un conte pour enfants.",
        pages: 96,
        editeur: "Gallimard",
        anneePublication: 1943
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        isbn: "978-2070368228",
        category: "Science-Fiction",
        status: "emprunté",
        rayonnage: "Sciences et Technologies",
        emplacement: "B3-C1",
        addedDate: "2024-01-14",
        cover: "📖",
        description: "Un roman dystopique qui dépeint une société totalitaire.",
        pages: 384,
        editeur: "Gallimard",
        anneePublication: 1949
      },
      {
        id: 3,
        title: "Harry Potter à l'école des sorciers",
        author: "J.K. Rowling",
        isbn: "978-2070541270",
        category: "Fantasy",
        status: "disponible",
        rayonnage: "Jeunesse",
        emplacement: "C2-D1",
        addedDate: "2024-01-13",
        cover: "🔮",
        description: "Le premier tome de la saga Harry Potter.",
        pages: 320,
        editeur: "Gallimard Jeunesse",
        anneePublication: 1997
      },
      {
        id: 4,
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        isbn: "978-2070612888",
        category: "Fantasy",
        status: "disponible",
        rayonnage: "Littérature Classique",
        emplacement: "A2-B3",
        addedDate: "2024-01-12",
        cover: "💍",
        description: "Une épopée fantasy qui suit la quête pour détruire l'Anneau Unique.",
        pages: 1216,
        editeur: "Gallimard",
        anneePublication: 1954
      },
      {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        isbn: "978-2070368229",
        category: "Science-Fiction",
        status: "emprunté",
        rayonnage: "Sciences et Technologies",
        emplacement: "B1-C2",
        addedDate: "2024-01-11",
        cover: "🏜️",
        description: "Un roman de science-fiction qui se déroule dans un univers féodal futuriste.",
        pages: 688,
        editeur: "Gallimard",
        anneePublication: 1965
      },
      {
        id: 6,
        title: "Les Misérables",
        author: "Victor Hugo",
        isbn: "978-2070408505",
        category: "Littérature",
        status: "disponible",
        rayonnage: "Littérature Classique",
        emplacement: "A3-B1",
        addedDate: "2024-01-10",
        cover: "📜",
        description: "Un roman historique français qui dépeint la vie de plusieurs personnages dans la France du XIXe siècle.",
        pages: 1664,
        editeur: "Gallimard",
        anneePublication: 1862
      }
    ];
  }
}

export default new LivresService();
