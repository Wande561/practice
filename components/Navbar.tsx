import type React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, MessageCircle, Map, Star, BarChart3 } from "lucide-react"
import type { User as UserType } from "../types"

interface NavbarProps {
  currentUser: UserType | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const location = useLocation()

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/messages", icon: MessageCircle, label: "Messages" },
    { path: "/map", icon: Map, label: "Map" },
    { path: "/reviews", icon: Star, label: "Reviews" },
    ...(currentUser?.userType === "provider" ? [{ path: "/dashboard", icon: BarChart3, label: "Dashboard" }] : []),
  ]

  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === path ? "text-teal-600 bg-teal-50" : "text-gray-600 hover:text-teal-600"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
