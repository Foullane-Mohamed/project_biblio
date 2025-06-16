"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"

const navigation = [
  { name: "Tableau de bord", href: "/" },
  { name: "Rayonnages", href: "/rayonnages" },
  { name: "Livres", href: "/livres" },
  { name: "Recherche", href: "/recherche" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Biblio</span>
            </div>

            <div className="flex space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
                        isActive &&
                          "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 rounded-none",
                      )}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">M</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
