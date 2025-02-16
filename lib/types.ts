export type DailyData = {
  eventRevenue: number
  productRevenue: number
  totalRevenue: number
  eventCount: number
  productCount: number
  orderCount: number
  usOrderCount: number
  usProductCount: number
  usEventCount: number
  usRevenue: number
  usProductRevenue: number
  usEventRevenue: number
  caProductCount: number
  caOrderCount: number
  caEventCount: number
  caRevenue: number
  caProductRevenue: number
  caEventRevenue: number
}

export type ApiResponse = Record<string, DailyData>

export type CPISpecialtyItem = {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

export type Event = {
  id: number
  title: string
  date: string
  time: string
  type: string
  totalSeats: number
  availableSeats: number
}

