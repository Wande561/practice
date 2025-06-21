export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  location: string
  userType: "client" | "provider"
  createdAt: Date
}

export interface ServiceProvider extends User {
  businessName: string
  services: string[]
  rating: number
  reviewCount: number
  hourlyRate: number
  availability: boolean
  verified: boolean
  portfolio: string[]
  bio: string
  experience: number
  completedJobs: number
  responseTime: string
}

export interface Service {
  id: string
  name: string
  category: string
  description: string
  basePrice: number
  duration: number
  providerId: string
}

export interface Booking {
  id: string
  clientId: string
  providerId: string
  serviceId: string
  date: Date
  time: string
  location: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  totalAmount: number
  notes?: string
}

export interface Review {
  id: string
  bookingId: string
  clientId: string
  providerId: string
  rating: number
  comment: string
  photos?: string[]
  createdAt: Date
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: Date
  type: "text" | "image"
  imageUrl?: string
  read: boolean
}

export interface MapProvider {
  id: string
  name: string
  lat: number
  lng: number
  rating: number
  category: string
  available: boolean
}
