"use client"

import { useState } from "react"
import { Calendar, Users, Mic, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingConference } from "@/components/upcoming-conference"
import { PeopleToMeet } from "@/components/people-to-meet"
import { SessionInsights } from "@/components/session-insights"
import { FollowUpQueue } from "@/components/follow-up-queue"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Your next conference starts in 3 days. Let's prepare for success.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Conferences</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: TechSummit 2025 in 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">People to Meet</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">5 high-priority connections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Planned Sessions</CardTitle>
            <Mic className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 keynotes, 5 panels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Follow-ups</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">2 pending from last conference</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Conference</TabsTrigger>
          <TabsTrigger value="people">People to Meet</TabsTrigger>
          <TabsTrigger value="insights">Session Insights</TabsTrigger>
          <TabsTrigger value="followups">Follow-up Queue</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <UpcomingConference />
        </TabsContent>
        <TabsContent value="people" className="space-y-4">
          <PeopleToMeet />
        </TabsContent>
        <TabsContent value="insights" className="space-y-4">
          <SessionInsights />
        </TabsContent>
        <TabsContent value="followups" className="space-y-4">
          <FollowUpQueue />
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="h-14 w-14 rounded-full shadow-lg">
          <Sparkles className="h-6 w-6" />
          <span className="sr-only">AI Assistant</span>
        </Button>
      </div>
    </div>
  )
}
