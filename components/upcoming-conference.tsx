import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, Users, Calendar, Star } from "lucide-react"

export function UpcomingConference() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">TechSummit 2025</h2>
        <Button variant="outline" size="sm">
          View All Conferences
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conference Overview</CardTitle>
            <CardDescription>June 17-19, 2025 • San Francisco</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>3 days until start</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Moscone Center, 747 Howard St</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>5,000+ attendees expected</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>8 sessions planned for you</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Complete Pre-Conference Prep</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Sessions</CardTitle>
            <CardDescription>Based on your role and interests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {[
                {
                  title: "Future of AI in Enterprise",
                  time: "June 17, 9:00 AM",
                  speaker: "Sarah Chen, CTO at FutureAI",
                  priority: "high",
                },
                {
                  title: "Leadership in Tech Transformation",
                  time: "June 17, 2:00 PM",
                  speaker: "Michael Rodriguez, CEO at TechTrans",
                  priority: "medium",
                },
                {
                  title: "Venture Capital Trends 2025",
                  time: "June 18, 11:00 AM",
                  speaker: "Jennifer Wu, Partner at Sequoia",
                  priority: "high",
                },
              ].map((session, index) => (
                <div key={index} className="flex items-start justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <div className="font-medium">{session.title}</div>
                    <div className="text-sm text-muted-foreground">{session.time}</div>
                    <div className="text-sm text-muted-foreground">{session.speaker}</div>
                  </div>
                  <Badge variant={session.priority === "high" ? "default" : "outline"}>
                    {session.priority === "high" ? <Star className="mr-1 h-3 w-3" /> : null}
                    {session.priority === "high" ? "Priority" : "Recommended"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Sessions
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Speaker Intel</CardTitle>
            <CardDescription>Key people to know about</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                {
                  name: "Sarah Chen",
                  role: "CTO at FutureAI",
                  image: "/placeholder.svg?height=40&width=40",
                  initials: "SC",
                  info: "Recently led $50M AI initiative, former Google Research",
                },
                {
                  name: "Michael Rodriguez",
                  role: "CEO at TechTrans",
                  image: "/placeholder.svg?height=40&width=40",
                  initials: "MR",
                  info: "Featured in Forbes 40 Under 40, 3x founder",
                },
                {
                  name: "Jennifer Wu",
                  role: "Partner at Sequoia",
                  image: "/placeholder.svg?height=40&width=40",
                  initials: "JW",
                  info: "Led investments in 5 unicorns, focus on AI/ML startups",
                },
              ].map((speaker, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                    <AvatarFallback>{speaker.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="font-medium">{speaker.name}</div>
                    <div className="text-sm text-muted-foreground">{speaker.role}</div>
                    <div className="text-sm">{speaker.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Speakers
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Radar</CardTitle>
            <CardDescription>Recent updates on companies of interest</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                {
                  company: "FutureAI",
                  update: "Announced Series C funding of $120M",
                  date: "2 days ago",
                },
                {
                  company: "TechTrans",
                  update: "Launched new enterprise platform for AI integration",
                  date: "1 week ago",
                },
                {
                  company: "Sequoia Capital",
                  update: "New $1B fund focused on AI startups",
                  date: "3 weeks ago",
                },
              ].map((update, index) => (
                <div key={index} className="rounded-lg border p-3">
                  <div className="font-medium">{update.company}</div>
                  <div className="mt-1 text-sm">{update.update}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{update.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Company Updates
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Pre-Conference Checklist</h2>
        <Badge variant="outline">3/7 Complete</Badge>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[
              { task: "Review speaker profiles", completed: true },
              { task: "Prepare session schedule", completed: true },
              { task: "Research companies of interest", completed: true },
              { task: "Prepare networking talking points", completed: false },
              { task: "Set conference goals", completed: false },
              { task: "Download venue map", completed: false },
              { task: "Prepare questions for key sessions", completed: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  readOnly
                />
                <span className={item.completed ? "text-muted-foreground line-through" : ""}>{item.task}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
