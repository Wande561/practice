"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ProviderProfile from "./pages/ProviderProfile"
import Booking from "./pages/Booking"
import Messages from "./pages/Messages"
import MapView from "./pages/MapView"
import Reviews from "./pages/Reviews"
import ProviderDashboard from "./pages/ProviderDashboard"
import type { User } from "./types"

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated && <Navbar currentUser={currentUser} />}
        <Routes>
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUp
                  onSignUp={(user) => {
                    setCurrentUser(user)
                    setIsAuthenticated(true)
                  }}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/" element={isAuthenticated ? <Home currentUser={currentUser} /> : <Navigate to="/signup" />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/booking/:providerId" element={<Booking />} />
          <Route path="/messages" element={<Messages currentUser={currentUser} />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<ProviderDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
