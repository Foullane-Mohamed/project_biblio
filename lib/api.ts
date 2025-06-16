const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export interface Article {
  id: number
  nom: string
  code: string
  isbn: string
  type: string
  prix: number
  couleur: string
}

export interface Emplacement {
  id: number
  articles: Article[]
}

export interface Etagere {
  id: number
  emplacements: Emplacement[]
}

export interface Compartiment {
  id: number
  etageres: Etagere[]
}

export interface Rayonnage {
  id: number
  name: string
  description: string
  compartiments: Compartiment[]
}

export interface CreateRayonnageRequest {
  libraryId: number
  nom: string
  description: string
  nombreCompartiments: number
  nombreEtagèresParCompartiment: number
  nombreEmplacementsParEtagère: number
}

export interface CreateArticleRequest {
  nom: string
  code: string
  isbn: string
  type: string
  prix: number
  couleur: string
}

// API Functions
export async function getLibraryStructure(libraryId: number): Promise<Rayonnage[]> {
  const response = await fetch(`${API_BASE_URL}/library-structure/${libraryId}`)
  if (!response.ok) {
    throw new Error("Failed to fetch library structure")
  }
  return response.json()
}

export async function createRayonnage(data: CreateRayonnageRequest): Promise<{ message: string; rayonnageId: number }> {
  const response = await fetch(`${API_BASE_URL}/rayonnage/create`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error("Failed to create rayonnage")
  }
  return response.json()
}

export async function searchArticles(query: string): Promise<Article[]> {
  const response = await fetch(`${API_BASE_URL}/articles/search?query=${encodeURIComponent(query)}`)
  if (!response.ok) {
    throw new Error("Failed to search articles")
  }
  return response.json()
}

export async function addArticleToEmplacement(emplacementId: number, articleId: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/emplacements/${emplacementId}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ articleId }),
  })
  if (!response.ok) {
    throw new Error("Failed to add article to emplacement")
  }
}

export async function createArticle(data: CreateArticleRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/articles/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error("Failed to create article")
  }
}

export async function updateCompartimentEtageres(compartimentId: number, nouveauNombreEtagères: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/compartiments/${compartimentId}/update-etageres`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nouveauNombreEtagères }),
  })
  if (!response.ok) {
    throw new Error("Failed to update compartiment etageres")
  }
}

export async function updateEtagereEmplacements(etagereId: number, nouveauNombreEmplacements: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/etagères/${etagereId}/update-emplacements`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nouveauNombreEmplacements }),
  })
  if (!response.ok) {
    throw new Error("Failed to update etagere emplacements")
  }
}
