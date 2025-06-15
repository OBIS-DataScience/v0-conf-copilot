"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"
import { Calendar, Users, Mic, FileText, Settings, Menu, Home, Search } from "lucide-react"

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      name: "Pre-Conference",
      path: "/pre-conference",
      icon: Calendar,
    },
    {
      name: "Session Companion",
      path: "/session",
      icon: Mic,
    },
    {
      name: "Networking",
      path: "/networking",
      icon: Users,
    },
    {
      name: "Post-Conference",
      path: "/post-conference",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6">
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 py-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.path ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : null}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/obis-logo.png" alt="OBIS Logo" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-obis-orange">Conference Copilot</span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              the first AI powered assistant to attend your conferences with you
            </span>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative w-full max-w-[600px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search across conferences, notes, contacts..."
              className="w-full rounded-md border border-input bg-background pl-8 pr-12 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <ModeToggle />
        </div>
      </header>
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="w-[240px] flex-shrink-0 border-r px-4 py-6 md:px-6">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 text-base font-medium transition-colors hover:text-primary",
                    pathname === route.path ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.name}
                </Link>
              ))}
            </nav>
          </aside>
        )}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
