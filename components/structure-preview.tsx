interface StructurePreviewProps {
  nom: string
  compartiments: number
  etageres: number
  emplacements: number
}

export function StructurePreview({ nom, compartiments, etageres, emplacements }: StructurePreviewProps) {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
      <div className="text-center mb-4">
        <h4 className="font-medium text-purple-700 dark:text-purple-300">Rayonnage: {nom}</h4>
      </div>

      <div className="space-y-3">
        {Array.from({ length: compartiments }, (_, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-3 rounded border">
            <h5 className="text-sm font-medium mb-2">Compartiment {i + 1}</h5>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: etageres }, (_, j) => (
                <div key={j} className="bg-gray-100 dark:bg-gray-600 p-2 rounded">
                  <div className="text-xs font-medium mb-1">Étagère {j + 1}</div>
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.min(emplacements, 6) }, (_, k) => (
                      <div key={k} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    ))}
                    {emplacements > 6 && <span className="text-xs text-gray-500">...</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
