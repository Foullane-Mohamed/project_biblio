import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Download, RefreshCw } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { ActivityChart } from "@/components/activity-chart"
import { DistributionChart } from "@/components/distribution-chart"
import { RecentBooks } from "@/components/recent-books"

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tableau de Bord</h1>
          <p className="text-gray-600 dark:text-gray-400">Bienvenue dans votre système de gestion de bibliothèque</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            23 mai 2025
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser
          </Button>
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white dark:bg-gray-800">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Activité Récente</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Graphique des livres ajoutés les 30 derniers jours
            </p>
            <ActivityChart />
          </div>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Distribution</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Répartition des livres par catégorie</p>
            <DistributionChart />
          </div>
        </Card>
      </div>

      <RecentBooks />
    </div>
  )
}
