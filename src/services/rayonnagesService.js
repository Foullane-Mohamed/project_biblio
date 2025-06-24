import ApiService from './api';

class RayonnagesService {
  constructor() {
    this.endpoint = '/rayonnages';
  }

  // Get all rayonnages with optional filters
  async getAllRayonnages(filters = {}) {
    try {
      // For development, return mock data if API is not available
      const mockData = this.getMockRayonnages();
      
      // Apply filters to mock data
      let filteredData = mockData;
      
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filteredData = filteredData.filter(rayonnage => 
          rayonnage.name.toLowerCase().includes(search) ||
          rayonnage.description.toLowerCase().includes(search)
        );
      }
      
      if (filters.category && filters.category !== 'all') {
        filteredData = filteredData.filter(rayonnage => rayonnage.category === filters.category);
      }
      
      if (filters.status && filters.status !== 'all') {
        filteredData = filteredData.filter(rayonnage => rayonnage.status === filters.status);
      }
      
      return {
        data: filteredData,
        total: filteredData.length,
        page: filters.page || 1,
        limit: filters.limit || 10
      };
    } catch (error) {
      console.error('Error fetching rayonnages:', error);
      // Return mock data as fallback
      return {
        data: this.getMockRayonnages(),
        total: this.getMockRayonnages().length,
        page: 1,
        limit: 10
      };
    }
  }

  // Get a single rayonnage by ID
  async getRayonnageById(id) {
    try {
      return await ApiService.get(`${this.endpoint}/${id}`);
    } catch (error) {
      console.error('Error fetching rayonnage:', error);
      // Return mock data as fallback
      const mockData = this.getMockRayonnages();
      return mockData.find(rayonnage => rayonnage.id === parseInt(id));
    }
  }

  // Create a new rayonnage
  async createRayonnage(rayonnageData) {
    try {
      const totalEmplacements = rayonnageData.compartiments * rayonnageData.etageres * rayonnageData.emplacements;
      
      const newRayonnage = {
        ...rayonnageData,
        id: Date.now(), // Temporary ID generation
        emplacements: totalEmplacements,
        livres: 0,
        status: 'actif',
        lastUpdate: new Date().toISOString().split('T')[0],
        createdDate: new Date().toISOString().split('T')[0]
      };
      
      console.log('Creating new rayonnage:', newRayonnage);
      // In a real app, this would be: return await ApiService.post(this.endpoint, rayonnageData);
      return { success: true, data: newRayonnage };
    } catch (error) {
      console.error('Error creating rayonnage:', error);
      throw new Error('Erreur lors de la création du rayonnage');
    }
  }

  // Update an existing rayonnage
  async updateRayonnage(id, rayonnageData) {
    try {
      const updatedRayonnage = {
        ...rayonnageData,
        id: parseInt(id),
        lastUpdate: new Date().toISOString().split('T')[0]
      };
      
      console.log('Updating rayonnage:', updatedRayonnage);
      // In a real app, this would be: return await ApiService.put(`${this.endpoint}/${id}`, rayonnageData);
      return { success: true, data: updatedRayonnage };
    } catch (error) {
      console.error('Error updating rayonnage:', error);
      throw new Error('Erreur lors de la mise à jour du rayonnage');
    }
  }

  // Delete a rayonnage
  async deleteRayonnage(id) {
    try {
      console.log('Deleting rayonnage with ID:', id);
      // In a real app, this would be: return await ApiService.delete(`${this.endpoint}/${id}`);
      return { success: true, message: 'Rayonnage supprimé avec succès' };
    } catch (error) {
      console.error('Error deleting rayonnage:', error);
      throw new Error('Erreur lors de la suppression du rayonnage');
    }
  }

  // Get available categories
  async getCategories() {
    try {
      const mockData = this.getMockRayonnages();
      const categories = [...new Set(mockData.map(rayonnage => rayonnage.category))];
      return categories.sort();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return ['Littérature', 'Sciences', 'Histoire', 'Philosophie', 'Art', 'Jeunesse', 'Technologie'];
    }
  }

  // Get rayonnages statistics
  async getStats() {
    try {
      const mockData = this.getMockRayonnages();
      const totalEmplacements = mockData.reduce((sum, r) => sum + r.emplacements, 0);
      const totalLivres = mockData.reduce((sum, r) => sum + r.livres, 0);
      
      return {
        total: mockData.length,
        actif: mockData.filter(r => r.status === 'actif').length,
        maintenance: mockData.filter(r => r.status === 'maintenance').length,
        totalEmplacements,
        totalLivres,
        tauxOccupation: totalEmplacements > 0 ? Math.round((totalLivres / totalEmplacements) * 100) : 0,
        categories: [...new Set(mockData.map(r => r.category))].length
      };
    } catch (error) {
      console.error('Error fetching stats:', error);
      return {
        total: 0,
        actif: 0,
        maintenance: 0,
        totalEmplacements: 0,
        totalLivres: 0,
        tauxOccupation: 0,
        categories: 0
      };
    }
  }

  // Update rayonnage status
  async updateStatus(id, status) {
    try {
      console.log(`Updating rayonnage ${id} status to:`, status);
      // In a real app, this would be: return await ApiService.put(`${this.endpoint}/${id}/status`, { status });
      return { success: true, message: 'Statut mis à jour avec succès' };
    } catch (error) {
      console.error('Error updating status:', error);
      throw new Error('Erreur lors de la mise à jour du statut');
    }
  }

  // Get books in a specific rayonnage
  async getLivresInRayonnage(rayonnageId) {
    try {
      // In a real app, this would be: return await ApiService.get(`${this.endpoint}/${rayonnageId}/livres`);
      return {
        data: [],
        total: 0
      };
    } catch (error) {
      console.error('Error fetching livres in rayonnage:', error);
      return {
        data: [],
        total: 0
      };
    }
  }

  // Mock data for development
  getMockRayonnages() {
    return [
      {
        id: 1,
        name: "Littérature Classique",
        description: "Rayonnage dédié aux œuvres littéraires classiques",
        category: "Littérature",
        compartiments: 8,
        etageres: 5,
        emplacements: 200,
        livres: 156,
        status: "actif",
        lastUpdate: "2024-01-15",
        createdDate: "2023-01-01",
        zone: "Zone A",
        responsable: "Marie Dubois"
      },
      {
        id: 2,
        name: "Sciences et Technologies",
        description: "Livres scientifiques et technologiques",
        category: "Sciences",
        compartiments: 6,
        etageres: 4,
        emplacements: 120,
        livres: 98,
        status: "actif",
        lastUpdate: "2024-01-14",
        createdDate: "2023-01-01",
        zone: "Zone B",
        responsable: "Pierre Martin"
      },
      {
        id: 3,
        name: "Histoire et Géographie",
        description: "Ouvrages historiques et géographiques",
        category: "Histoire",
        compartiments: 7,
        etageres: 5,
        emplacements: 175,
        livres: 142,
        status: "actif",
        lastUpdate: "2024-01-13",
        createdDate: "2023-01-01",
        zone: "Zone A",
        responsable: "Anne Leroy"
      },
      {
        id: 4,
        name: "Philosophie",
        description: "Textes philosophiques et essais",
        category: "Philosophie",
        compartiments: 4,
        etageres: 3,
        emplacements: 60,
        livres: 45,
        status: "maintenance",
        lastUpdate: "2024-01-12",
        createdDate: "2023-01-01",
        zone: "Zone C",
        responsable: "Jean Moreau"
      },
      {
        id: 5,
        name: "Art et Culture",
        description: "Livres d'art et de culture",
        category: "Art",
        compartiments: 5,
        etageres: 4,
        emplacements: 100,
        livres: 78,
        status: "actif",
        lastUpdate: "2024-01-11",
        createdDate: "2023-01-01",
        zone: "Zone B",
        responsable: "Sophie Bernard"
      },
      {
        id: 6,
        name: "Jeunesse",
        description: "Section dédiée aux jeunes lecteurs",
        category: "Jeunesse",
        compartiments: 6,
        etageres: 4,
        emplacements: 120,
        livres: 89,
        status: "actif",
        lastUpdate: "2024-01-10",
        createdDate: "2023-01-01",
        zone: "Zone D",
        responsable: "Claire Dubois"
      }
    ];
  }
}

export default new RayonnagesService();
