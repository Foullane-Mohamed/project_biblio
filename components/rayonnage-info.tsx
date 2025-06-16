import { Button } from "@/components/ui/button"
export function RayonnageInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="mr-2">📚</span>
          Gestion des Rayonnages
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Ajouter, modifier ou supprimer les rayonnages</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Lorsque vous ajoutez un rayonnage, une structure complète est automatiquement générée avec des compartiments,
          des étagères et des emplacements par défaut.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="mr-2">⚙️</span>
          Structure Automatique
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Configuration par défaut pour chaque rayonnage</p>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Compartiments par rayonnage:</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded">
              3
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Étagères par compartiment:</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded">
              5
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Emplacements par étagère:</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded">
              10
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-4 text-gray-600">
          Modifier les valeurs par défaut
        </Button>
      </div>
    </div>
  )
}
