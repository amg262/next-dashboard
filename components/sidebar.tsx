"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Settings,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  LogIn,
  User,
  FileText,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: LogIn, label: "Login", href: "/login" },
  { icon: FileText, label: "Meme Form", href: "/meme-form" },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary transition-all duration-200 group-data-[state=collapsed]:hidden">
            Template
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto p-4">
        <div className="flex flex-col gap-2 items-start transition-all duration-200 group-data-[state=collapsed]:items-center">
          <Button variant="ghost" size="icon" className="h-7 w-7 mb-2 rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-7 w-7 mb-2 rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <SidebarTrigger>
            {({ state }) => (
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                {state === "expanded" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </Button>
            )}
          </SidebarTrigger>
        </div>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}

