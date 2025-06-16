import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const rayonnages = [
  {
    name: "Sciences",
    color: "bg-purple-500",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 132,
  },
  {
    name: "Littérature",
    color: "bg-red-500",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 143,
  },
  {
    name: "Histoire",
    color: "bg-blue-500",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 98,
  },
  {
    name: "Philosophie",
    color: "bg-orange-500",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 76,
  },
  {
    name: "Art",
    color: "bg-red-400",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 54,
  },
  {
    name: "A-Z",
    color: "bg-blue-400",
    compartiments: 3,
    etageres: 15,
    emplacements: 150,
    livres: 107,
  },
]

export function RayonnageGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rayonnages.map((rayonnage, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className={`h-3 ${rayonnage.color}`}></div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{rayonnage.name}</h3>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{rayonnage.compartiments}</span>
                <span className="text-xs text-gray-500 dark:text-gray-500">Compartiments</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{rayonnage.etageres}</span>
                <span className="text-xs text-gray-500 dark:text-gray-500">Étagères</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{rayonnage.emplacements}</span>
                <span className="text-xs text-gray-500 dark:text-gray-500">Emplacements</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{rayonnage.livres}</span>
                <span className="text-xs text-gray-500 dark:text-gray-500">Livres</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Gérer
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
