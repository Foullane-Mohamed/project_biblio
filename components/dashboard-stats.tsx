export function DashboardStats() {
  const stats = [
    {
      title: "Total des Livres",
      value: "1,248",
      subtitle: "+2 depuis la dernière fois",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      icon: "TL",
    },
    {
      title: "Rayonnages",
      value: "12",
      subtitle: "+2 depuis la dernière fois",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      icon: "R",
    },
    {
      title: "Livres Disponibles",
      value: "1,132",
      subtitle: "+14 depuis la dernière fois",
      bgColor: "bg-green-600",
      textColor: "text-white",
      icon: "LD",
    },
    {
      title: "Livres Référencés",
      value: "1,893",
      subtitle: "+12 depuis la dernière fois",
      bgColor: "bg-orange-600",
      textColor: "text-white",
      icon: "LR",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <span className={`${stat.textColor} font-bold text-sm`}>{stat.icon}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
