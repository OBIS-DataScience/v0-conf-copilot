import { Suspense } from "react"
import { AppShell } from "@/components/app-shell"
import { DashboardSkeleton } from "@/components/dashboard-skeleton"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  return (
    <AppShell>
      <Suspense fallback={<DashboardSkeleton />}>
        <Dashboard />
      </Suspense>
    </AppShell>
  )
}
