export function RecentBooks() {
  const books = [
    {
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      category: "Littérature",
      status: "Disponible",
      avatar: "LP",
    },
    {
      title: "L'Étranger",
      author: "Albert Camus",
      category: "Littérature",
      status: "Disponible",
      avatar: "LE",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Sciences",
      status: "Disponible",
      avatar: "C",
    },
    {
      title: "Sapiens: Une brève histoire de l'humanité",
      author: "Yuval Noah Harari",
      category: "Sciences",
      status: "Disponible",
      avatar: "S",
    },
    {
      title: "1984",
      author: "George Orwell",
      category: "Littérature",
      status: "Disponible",
      avatar: "19",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2">Livres récemment ajoutés</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Les 5 derniers livres ajoutés à la bibliothèque</p>

      <div className="space-y-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">{book.avatar}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{book.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {book.author} • {book.category}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
              {book.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
