"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, User, Settings, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function RecherchePage() {
  const [query, setQuery] = useState("")

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Recherche</h1>
          <p className="text-gray-600 dark:text-gray-400">Recherchez des livres dans toute la bibliothèque</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Manager</span>
              <span className="text-xs text-gray-500">manager@biblio.com</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Search className="h-5 w-5 mr-2" />
          Recherche de livres
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Recherchez les livres par titre, auteur, ISBN ou contenu. La recherche est instantanée sur toutes les fiches
          de frappe.
        </p>

        <div className="flex space-x-2">
          <Input
            placeholder="Titre, auteur, ISBN ou contenu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Rechercher</Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Commencez votre recherche</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Entrez des termes de recherche pour trouver des livres dans la bibliothèque.
          </p>
        </div>
      </div>
    </div>
  )
}
