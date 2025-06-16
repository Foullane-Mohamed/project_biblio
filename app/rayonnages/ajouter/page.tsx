"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { StructurePreview } from "@/components/structure-preview"

export default function AjouterRayonnagePage() {
  const [nom, setNom] = useState("")
  const [compartiments, setCompartiments] = useState([3])
  const [etageres, setEtageres] = useState([3])
  const [emplacements, setEmplacements] = useState([10])

  const totalEtageres = compartiments[0] * etageres[0]
  const totalEmplacements = totalEtageres * emplacements[0]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Link href="/rayonnages">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ajouter un Rayonnage</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Informations du Rayonnage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Créez un nouveau rayonnage avec sa structure complète
            </p>

            <div>
              <Label htmlFor="nom" className="text-sm font-medium">
                Nom du Rayonnage
              </Label>
              <Input
                id="nom"
                placeholder="Ex: Sciences, Littérature, A-Z..."
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Structure Automatique</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              La structure suivante sera automatiquement créée. Vous pouvez ajuster les valeurs par défaut.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-sm font-medium">Nombre de Compartiments</Label>
                  <span className="text-sm font-medium text-purple-600">{compartiments[0]}</span>
                </div>
                <Slider
                  value={compartiments}
                  onValueChange={setCompartiments}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-sm font-medium">Nombre d'Étagères par Compartiment</Label>
                  <span className="text-sm font-medium text-purple-600">{etageres[0]}</span>
                </div>
                <Slider value={etageres} onValueChange={setEtageres} max={10} min={1} step={1} className="w-full" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-sm font-medium">Nombre d'Emplacements par Étagère</Label>
                  <span className="text-sm font-medium text-purple-600">{emplacements[0]}</span>
                </div>
                <Slider
                  value={emplacements}
                  onValueChange={setEmplacements}
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">Créer le Rayonnage</Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Aperçu de la Structure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Visualisation de la structure qui sera créée
            </p>

            <StructurePreview
              nom={nom || "Nouveau Rayonnage"}
              compartiments={compartiments[0]}
              etageres={etageres[0]}
              emplacements={emplacements[0]}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Résumé de la structure</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Rayonnages:</span>
                <span className="text-sm font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Compartiments:</span>
                <span className="text-sm font-medium">{compartiments[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Étagères au total:</span>
                <span className="text-sm font-medium">{totalEtageres}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Emplacements au total:</span>
                <span className="text-sm font-medium">{totalEmplacements}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
