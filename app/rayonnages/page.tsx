import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { RayonnageGrid } from "@/components/rayonnage-grid"
import { RayonnageInfo } from "@/components/rayonnage-info"

export default function RayonnagesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Rayonnages</h1>
          <p className="text-gray-600 dark:text-gray-400">Gérez les rayonnages et leur structure hiérarchique</p>
        </div>
        <Link href="/rayonnages/ajouter">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un rayonnage
          </Button>
        </Link>
      </div>

      <RayonnageInfo />
      <RayonnageGrid />
    </div>
  )
}
