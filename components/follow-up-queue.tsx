import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar, MessageSquare, Mail, Phone, Video, Coffee, CheckCircle, AlertCircle } from "lucide-react"

export function FollowUpQueue() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Follow-up Queue</h2>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="drafts">Email Drafts</TabsTrigger>
          <TabsTrigger value="insights">Connection Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "David Chang",
                role: "CTO at InnovateTech",
                image: "/placeholder.svg?height=40&width=40",
                initials: "DC",
                priority: "high",
                dueDate: "June 21, 2025",
                action: "Send follow-up email about potential partnership",
                status: "urgent",
                notes: "Discussed AI integration possibilities for their platform",
              },
              {
                name: "Elena Rodriguez",
                role: "VP Product at DataFlow",
                image: "/placeholder.svg?height=40&width=40",
                initials: "ER",
                priority: "medium",
                dueDate: "June 23, 2025",
                action: "Schedule demo of your enterprise solution",
                status: "normal",
                notes: "Expressed interest in your data processing capabilities",
              },
              {
                name: "James Wilson",
                role: "Partner at Accel Ventures",
                image: "/placeholder.svg?height=40&width=40",
                initials: "JW",
                priority: "high",
                dueDate: "June 22, 2025",
                action: "Send pitch deck and arrange call",
                status: "urgent",
                notes: "Showed interest in your growth metrics and expansion plans",
              },
              {
                name: "Michelle Lee",
                role: "CEO at HealthTech Solutions",
                image: "/placeholder.svg?height=40&width=40",
                initials: "ML",
                priority: "medium",
                dueDate: "June 25, 2025",
                action: "Connect on LinkedIn and share case study",
                status: "normal",
                notes: "Interested in healthcare applications of your technology",
              },
            ].map((person, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                        <AvatarFallback>{person.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{person.name}</CardTitle>
                        <CardDescription>{person.role}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={person.status === "urgent" ? "destructive" : "outline"}>
                      {person.status === "urgent" ? <AlertCircle className="mr-1 h-3 w-3" /> : null}
                      {person.status === "urgent" ? "Due Soon" : "Pending"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pb-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Action needed:</div>
                    <div className="text-sm text-muted-foreground">{person.action}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Due by {person.dueDate}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Meeting notes:</div>
                    <div className="rounded-md bg-muted p-2 text-sm">{person.notes}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="mr-1 h-3.5 w-3.5" />
                    Draft Email
                  </Button>
                  <Button size="sm" className="flex-1">
                    <CheckCircle className="mr-1 h-3.5 w-3.5" />
                    Complete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Follow-ups</CardTitle>
              <CardDescription>Successfully completed networking connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "CIO at Enterprise Solutions",
                    action: "Sent follow-up email and scheduled call",
                    date: "May 10, 2025",
                    outcome: "Call scheduled for June 30",
                  },
                  {
                    name: "Michael Chen",
                    role: "Director of Innovation at TechCorp",
                    action: "Shared case study and product demo",
                    date: "May 12, 2025",
                    outcome: "Evaluating for potential partnership",
                  },
                  {
                    name: "Jessica Williams",
                    role: "VP Engineering at DataSystems",
                    action: "Connected on LinkedIn and shared resources",
                    date: "May 15, 2025",
                    outcome: "Introduced to procurement team",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start justify-between rounded-lg border p-3">
                    <div className="space-y-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.role}</div>
                      <div className="mt-1 text-sm">{item.action}</div>
                      <div className="mt-1 flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                        <span>{item.outcome}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Completed
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Drafts</CardTitle>
              <CardDescription>AI-generated email templates for your follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    recipient: "David Chang, CTO at InnovateTech",
                    subject: "Following up on our conversation at TechSummit",
                    preview:
                      "It was great connecting with you at TechSummit yesterday. I wanted to follow up on our discussion about AI integration possibilities...",
                    tone: "Professional",
                  },
                  {
                    recipient: "James Wilson, Partner at Accel Ventures",
                    subject: "Pitch deck and additional information as discussed",
                    preview:
                      "Thank you for taking the time to discuss our growth strategy at TechSummit. As promised, I've attached our pitch deck with the metrics we discussed...",
                    tone: "Formal",
                  },
                  {
                    recipient: "Elena Rodriguez, VP Product at DataFlow",
                    subject: "Demo scheduling for our enterprise solution",
                    preview:
                      "It was a pleasure meeting you at TechSummit. Based on your interest in our data processing capabilities, I'd like to schedule a personalized demo...",
                    tone: "Friendly",
                  },
                ].map((email, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">To: {email.recipient}</div>
                      <Badge variant="outline">{email.tone}</Badge>
                    </div>
                    <div className="mt-1 text-sm font-medium">Subject: {email.subject}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{email.preview}</div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">Send</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate New Email Draft</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connection Insights</CardTitle>
              <CardDescription>Analytics on your networking effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Follow-up Statistics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-sm text-muted-foreground">Response Rate</div>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Meetings Scheduled</div>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-muted-foreground">Partnerships Initiated</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Follow-up Methods</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { method: "Email", icon: Mail, count: 15 },
                      { method: "Call", icon: Phone, count: 5 },
                      { method: "Video", icon: Video, count: 8 },
                      { method: "In-person", icon: Coffee, count: 3 },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center rounded-lg border p-3">
                        <item.icon className="mb-1 h-5 w-5 text-muted-foreground" />
                        <div className="text-lg font-bold">{item.count}</div>
                        <div className="text-xs text-muted-foreground">{item.method}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Top Connection Outcomes</h3>
                  <div className="space-y-2">
                    {[
                      { outcome: "Information sharing", percentage: 35 },
                      { outcome: "Meeting scheduled", percentage: 25 },
                      { outcome: "Introduction to team", percentage: 20 },
                      { outcome: "Partnership discussion", percentage: 15 },
                      { outcome: "No response", percentage: 5 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg border p-3">
                        <div className="flex-1">
                          <div className="font-medium">{item.outcome}</div>
                          <div className="text-sm text-muted-foreground">{item.percentage}% of connections</div>
                        </div>
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Smart Follow-Up Timeline</CardTitle>
          <CardDescription>Recommended actions based on your networking goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "June 21, 2025",
                actions: [
                  {
                    type: "email",
                    recipient: "David Chang, CTO at InnovateTech",
                    description: "Send follow-up email about potential partnership",
                  },
                  {
                    type: "calendar",
                    recipient: "Team Debrief",
                    description: "Share key insights from TechSummit Day 1",
                  },
                ],
              },
              {
                date: "June 22, 2025",
                actions: [
                  {
                    type: "email",
                    recipient: "James Wilson, Partner at Accel Ventures",
                    description: "Send pitch deck and arrange call",
                  },
                ],
              },
              {
                date: "June 23, 2025",
                actions: [
                  {
                    type: "calendar",
                    recipient: "Elena Rodriguez, VP Product at DataFlow",
                    description: "Schedule demo of your enterprise solution",
                  },
                ],
              },
              {
                date: "June 25, 2025",
                actions: [
                  {
                    type: "linkedin",
                    recipient: "Michelle Lee, CEO at HealthTech Solutions",
                    description: "Connect on LinkedIn and share case study",
                  },
                  {
                    type: "email",
                    recipient: "Conference Attendees",
                    description: "Send thank you note to all new connections",
                  },
                ],
              },
            ].map((day, index) => (
              <div key={index} className="space-y-2">
                <div className="font-medium">{day.date}</div>
                <div className="space-y-2">
                  {day.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-3 rounded-lg border p-3">
                      <div className="mt-0.5 rounded-full bg-muted p-1">
                        {action.type === "email" && <Mail className="h-4 w-4 text-primary" />}
                        {action.type === "calendar" && <Calendar className="h-4 w-4 text-primary" />}
                        {action.type === "linkedin" && <MessageSquare className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{action.recipient}</div>
                        <div className="text-sm text-muted-foreground">{action.description}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Schedule
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add to Calendar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
