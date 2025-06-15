import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, Clock, Calendar, MessageSquare, FileText, Tag, Bookmark, ThumbsUp } from "lucide-react"

export function SessionInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Session Insights</h2>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          View Schedule
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="attended">Attended</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
          <TabsTrigger value="notes">My Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Future of AI in Enterprise",
                time: "June 17, 9:00 AM",
                location: "Main Hall A",
                speaker: "Sarah Chen, CTO at FutureAI",
                description: "Exploring how AI is transforming enterprise operations and decision-making processes.",
                tags: ["AI", "Enterprise", "Innovation"],
              },
              {
                title: "Leadership in Tech Transformation",
                time: "June 17, 2:00 PM",
                location: "Breakout Room 3",
                speaker: "Michael Rodriguez, CEO at TechTrans",
                description:
                  "Strategies for leading organizations through technological transformation and disruption.",
                tags: ["Leadership", "Digital Transformation", "Strategy"],
              },
              {
                title: "Venture Capital Trends 2025",
                time: "June 18, 11:00 AM",
                location: "Panel Stage",
                speaker: "Jennifer Wu, Partner at Sequoia",
                description: "Analysis of current investment trends and predictions for the coming year in tech.",
                tags: ["VC", "Investment", "Trends"],
              },
              {
                title: "AI Ethics and Governance",
                time: "June 18, 3:30 PM",
                location: "Discussion Hall B",
                speaker: "Dr. Robert Kim, AI Ethics Institute",
                description: "Exploring the ethical considerations and governance frameworks for AI implementation.",
                tags: ["Ethics", "Governance", "Regulation"],
              },
            ].map((session, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{session.title}</CardTitle>
                      <CardDescription>{session.speaker}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{session.time}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm">{session.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{session.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {session.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="mr-1 h-3.5 w-3.5" />
                    Prepare Questions
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="attended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Previous Conference: InnovateX Summit</CardTitle>
              <CardDescription>May 5-7, 2025 • New York</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Transformation Strategy",
                    speaker: "Lisa Johnson, CDO at Enterprise Corp",
                    insights: 4,
                    notes: 2,
                    rating: "High value",
                  },
                  {
                    title: "AI Implementation Case Studies",
                    speaker: "Dr. James Wong, AI Research Lead",
                    insights: 6,
                    notes: 3,
                    rating: "High value",
                  },
                  {
                    title: "Future of Work Panel",
                    speaker: "Multiple speakers",
                    insights: 3,
                    notes: 1,
                    rating: "Medium value",
                  },
                ].map((session, index) => (
                  <div key={index} className="flex items-start justify-between rounded-lg border p-3">
                    <div className="space-y-1">
                      <div className="font-medium">{session.title}</div>
                      <div className="text-sm text-muted-foreground">{session.speaker}</div>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                          {session.insights} insights
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                          {session.notes} notes
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={session.rating.includes("High") ? "default" : "outline"}
                      className="flex items-center gap-1"
                    >
                      {session.rating.includes("High") && <ThumbsUp className="mr-1 h-3 w-3" />}
                      {session.rating}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Past Sessions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="transcripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Session Transcripts</CardTitle>
              <CardDescription>AI-generated transcripts from your attended sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Transformation Strategy",
                    date: "May 5, 2025",
                    conference: "InnovateX Summit",
                    length: "45 minutes",
                    highlights: 8,
                  },
                  {
                    title: "AI Implementation Case Studies",
                    date: "May 6, 2025",
                    conference: "InnovateX Summit",
                    length: "60 minutes",
                    highlights: 12,
                  },
                  {
                    title: "Future of Work Panel",
                    date: "May 7, 2025",
                    conference: "InnovateX Summit",
                    length: "75 minutes",
                    highlights: 6,
                  },
                ].map((transcript, index) => (
                  <div key={index} className="flex items-start justify-between rounded-lg border p-3">
                    <div className="space-y-1">
                      <div className="font-medium">{transcript.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {transcript.date} • {transcript.conference}
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Mic className="h-3.5 w-3.5 text-muted-foreground" />
                          {transcript.length}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                          {transcript.highlights} highlights
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Transcripts
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Session Notes</CardTitle>
              <CardDescription>Your personal notes and insights from sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Transformation Strategy",
                    date: "May 5, 2025",
                    preview: "Key takeaway: Start with small, high-impact projects to demonstrate value...",
                    tags: ["Strategy", "Digital"],
                  },
                  {
                    title: "AI Implementation Case Studies",
                    date: "May 6, 2025",
                    preview: "Healthcare use case particularly relevant to our Q3 initiative...",
                    tags: ["AI", "Case Study", "Healthcare"],
                  },
                  {
                    title: "Future of Work Panel",
                    date: "May 7, 2025",
                    preview: "Remote-first policies showing 23% productivity increase in tech sector...",
                    tags: ["Future of Work", "Remote"],
                  },
                ].map((note, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{note.title}</div>
                      <div className="text-xs text-muted-foreground">{note.date}</div>
                    </div>
                    <div className="mt-2 text-sm">{note.preview}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {note.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Notes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Smart Question Generator</CardTitle>
          <CardDescription>AI-generated questions based on session content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              For upcoming session: "Future of AI in Enterprise" with Sarah Chen
            </p>
            <div className="space-y-2">
              {[
                "How do you measure ROI for enterprise AI implementations?",
                "What governance structures have you found most effective for AI initiatives?",
                "How are you addressing potential bias in your AI systems?",
                "What skills gap have you identified when implementing AI at scale?",
                "How do you balance innovation speed with necessary guardrails?",
              ].map((question, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="text-sm">{question}</div>
                  <Button variant="ghost" size="sm">
                    Save
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Generate More Questions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
