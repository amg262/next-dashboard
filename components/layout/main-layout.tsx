"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // Don't render the sidebar on the auth page
  if (pathname === "/auth") {
    return <>{children}</>
  }

  return (
    <div className="flex w-screen min-h-screen">
      <DashboardSidebar />
      <SidebarInset className="flex-1 overflow-auto">
        <main className="p-6 animate-fadeIn">{children}</main>
      </SidebarInset>
    </div>
  )
}

