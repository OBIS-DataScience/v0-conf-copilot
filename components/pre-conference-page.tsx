"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, MapPin, Users, Star, Building, Target, Clock, CheckCircle, Search, Filter } from "lucide-react"

export function PreConferencePage() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals((prev) => (prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]))
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-obis-orange">Pre-Conference Intelligence</h1>
        <p className="text-muted-foreground">Prepare for success with AI-powered insights and planning tools.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="speakers">Speakers</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-obis-light-orange/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-obis-orange" />
                  TechSummit 2025
                </CardTitle>
                <CardDescription>June 17-19, 2025 • San Francisco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Days Until Start</div>
                    <div className="text-2xl font-bold text-obis-orange">3</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Expected Attendees</div>
                    <div className="text-2xl font-bold text-obis-medium-blue">5,000+</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Moscone Center, 747 Howard St</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Enterprise Technology Focus</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-obis-orange hover:bg-obis-orange/90">View Conference Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preparation Progress</CardTitle>
                <CardDescription>Complete your pre-conference checklist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { task: "Set conference goals", completed: true },
                    { task: "Review speaker profiles", completed: true },
                    { task: "Plan session schedule", completed: false },
                    { task: "Research target companies", completed: false },
                    { task: "Prepare networking materials", completed: false },
                    { task: "Download venue app", completed: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox checked={item.completed} />
                      <span className={item.completed ? "text-muted-foreground line-through" : ""}>{item.task}</span>
                      {item.completed && <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">33% Complete</span>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full">
                    <div className="h-full w-1/3 bg-obis-orange rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized suggestions based on your profile and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-obis-yellow/30 bg-obis-cream/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-obis-orange" />
                    <span className="font-medium">Priority Sessions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    8 sessions match your interests in AI and enterprise solutions
                  </p>
                </div>
                <div className="rounded-lg border border-obis-lightest-blue/50 bg-obis-lightest-blue/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-obis-medium-blue" />
                    <span className="font-medium">Key Contacts</span>
                  </div>
                  <p className="text-sm text-muted-foreground">15 high-value networking opportunities identified</p>
                </div>
                <div className="rounded-lg border border-obis-light-orange/30 bg-obis-light-orange/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-obis-orange" />
                    <span className="font-medium">Company Intel</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Recent updates on 12 companies in your target list</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Future of AI in Enterprise",
                time: "June 17, 9:00 AM - 10:00 AM",
                location: "Main Hall A",
                speaker: "Sarah Chen",
                company: "FutureAI",
                description: "Exploring how AI is transforming enterprise operations and decision-making processes.",
                tags: ["AI", "Enterprise", "Innovation"],
                priority: "high",
                attendees: 500,
              },
              {
                title: "Leadership in Tech Transformation",
                time: "June 17, 2:00 PM - 3:00 PM",
                location: "Breakout Room 3",
                speaker: "Michael Rodriguez",
                company: "TechTrans",
                description: "Strategies for leading organizations through technological transformation.",
                tags: ["Leadership", "Digital Transformation"],
                priority: "medium",
                attendees: 200,
              },
              {
                title: "Venture Capital Trends 2025",
                time: "June 18, 11:00 AM - 12:00 PM",
                location: "Panel Stage",
                speaker: "Jennifer Wu",
                company: "Sequoia Capital",
                description: "Analysis of current investment trends and predictions for the coming year.",
                tags: ["VC", "Investment", "Trends"],
                priority: "high",
                attendees: 300,
              },
              {
                title: "AI Ethics and Governance",
                time: "June 18, 3:30 PM - 4:30 PM",
                location: "Discussion Hall B",
                speaker: "Dr. Robert Kim",
                company: "AI Ethics Institute",
                description: "Exploring ethical considerations and governance frameworks for AI.",
                tags: ["Ethics", "Governance", "AI"],
                priority: "medium",
                attendees: 150,
              },
            ].map((session, index) => (
              <Card key={index} className={session.priority === "high" ? "border-obis-orange/30" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{session.title}</CardTitle>
                      <CardDescription>
                        {session.speaker} • {session.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={session.priority === "high" ? "default" : "outline"}
                      className={session.priority === "high" ? "bg-obis-orange" : ""}
                    >
                      {session.priority === "high" ? <Star className="mr-1 h-3 w-3" /> : null}
                      {session.priority === "high" ? "Priority" : "Recommended"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{session.attendees} expected attendees</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{session.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {session.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Add to Schedule
                  </Button>
                  <Button size="sm" className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="speakers" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Chen",
                role: "CTO",
                company: "FutureAI",
                image: "/placeholder.svg?height=80&width=80",
                initials: "SC",
                bio: "Leading AI researcher with 15+ years in enterprise technology. Former Google Research scientist.",
                recentNews: "Recently announced $50M AI initiative for healthcare applications",
                sessions: ["Future of AI in Enterprise"],
                socialMedia: "@sarahchen_ai",
                expertise: ["AI", "Machine Learning", "Enterprise Software"],
              },
              {
                name: "Michael Rodriguez",
                role: "CEO",
                company: "TechTrans",
                image: "/placeholder.svg?height=80&width=80",
                initials: "MR",
                bio: "Serial entrepreneur and transformation expert. Featured in Forbes 40 Under 40.",
                recentNews: "TechTrans acquired by Microsoft for $2.3B",
                sessions: ["Leadership in Tech Transformation"],
                socialMedia: "@mrodriguez_tech",
                expertise: ["Leadership", "Digital Transformation", "Strategy"],
              },
              {
                name: "Jennifer Wu",
                role: "Partner",
                company: "Sequoia Capital",
                image: "/placeholder.svg?height=80&width=80",
                initials: "JW",
                bio: "Venture capitalist focused on AI/ML startups. Led investments in 5 unicorns.",
                recentNews: "Announced new $1B fund for AI startups",
                sessions: ["Venture Capital Trends 2025"],
                socialMedia: "@jenniferwu_vc",
                expertise: ["Venture Capital", "AI Investments", "Startups"],
              },
              {
                name: "Dr. Robert Kim",
                role: "Director",
                company: "AI Ethics Institute",
                image: "/placeholder.svg?height=80&width=80",
                initials: "RK",
                bio: "Leading expert in AI ethics and governance. PhD in Computer Science from MIT.",
                recentNews: "Published influential paper on AI bias in healthcare",
                sessions: ["AI Ethics and Governance"],
                socialMedia: "@drrobertkim",
                expertise: ["AI Ethics", "Governance", "Policy"],
              },
            ].map((speaker, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                      <AvatarFallback className="bg-obis-lightest-blue text-obis-dark-blue">
                        {speaker.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{speaker.name}</CardTitle>
                      <CardDescription>
                        {speaker.role} at {speaker.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{speaker.bio}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Recent News:</div>
                    <div className="text-sm text-muted-foreground bg-obis-cream/30 p-2 rounded">
                      {speaker.recentNews}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Speaking at:</div>
                    {speaker.sessions.map((session, sessionIndex) => (
                      <Badge key={sessionIndex} variant="outline" className="text-xs">
                        {session}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Expertise:</div>
                    <div className="flex flex-wrap gap-1">
                      {speaker.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-obis-medium-blue hover:bg-obis-medium-blue/90">View Full Profile</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="companies" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "FutureAI",
                industry: "Artificial Intelligence",
                size: "500-1000 employees",
                recentUpdate: "Announced Series C funding of $120M led by Andreessen Horowitz",
                updateDate: "2 days ago",
                relevance: "Potential partnership for AI integration",
                keyPeople: ["Sarah Chen (CTO)", "David Park (VP Product)"],
                stock: "+15% this quarter",
              },
              {
                name: "TechTrans",
                industry: "Digital Transformation",
                size: "200-500 employees",
                recentUpdate: "Launched new enterprise platform for AI integration",
                updateDate: "1 week ago",
                relevance: "Competitor analysis and market positioning",
                keyPeople: ["Michael Rodriguez (CEO)", "Lisa Wang (CTO)"],
                stock: "+8% this month",
              },
              {
                name: "DataFlow Systems",
                industry: "Data Analytics",
                size: "1000+ employees",
                recentUpdate: "Acquired startup CloudMetrics for $45M",
                updateDate: "3 weeks ago",
                relevance: "Potential client for enterprise solutions",
                keyPeople: ["Elena Rodriguez (VP Product)", "James Liu (Head of Sales)"],
                stock: "+22% this quarter",
              },
              {
                name: "HealthTech Solutions",
                industry: "Healthcare Technology",
                size: "100-200 employees",
                recentUpdate: "FDA approval for AI-powered diagnostic tool",
                updateDate: "1 month ago",
                relevance: "Healthcare vertical expansion opportunity",
                keyPeople: ["Michelle Lee (CEO)", "Dr. Amanda Foster (Chief Medical Officer)"],
                stock: "+35% since announcement",
              },
            ].map((company, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <CardDescription>
                        {company.industry} • {company.size}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{company.stock}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Recent Update:</div>
                    <div className="text-sm bg-obis-cream/30 p-3 rounded">{company.recentUpdate}</div>
                    <div className="text-xs text-muted-foreground">{company.updateDate}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Why it matters:</div>
                    <div className="text-sm text-muted-foreground">{company.relevance}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Key People at Conference:</div>
                    <div className="space-y-1">
                      {company.keyPeople.map((person, personIndex) => (
                        <Badge key={personIndex} variant="outline" className="text-xs mr-1">
                          {person}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Company Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Set Your Conference Goals</CardTitle>
              <CardDescription>Define what you want to achieve to get personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="primary-goal">Primary Conference Objective</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your main goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnerships">Form Strategic Partnerships</SelectItem>
                    <SelectItem value="clients">Acquire New Clients</SelectItem>
                    <SelectItem value="funding">Secure Funding/Investment</SelectItem>
                    <SelectItem value="learning">Learn Industry Trends</SelectItem>
                    <SelectItem value="hiring">Recruit Talent</SelectItem>
                    <SelectItem value="speaking">Establish Thought Leadership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Secondary Goals (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Network with industry leaders",
                    "Learn about new technologies",
                    "Find potential investors",
                    "Identify partnership opportunities",
                    "Recruit top talent",
                    "Understand market trends",
                    "Build brand awareness",
                    "Generate leads",
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={selectedGoals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <Label htmlFor={goal} className="text-sm">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="target-companies">Target Companies/Industries</Label>
                <Textarea
                  id="target-companies"
                  placeholder="List specific companies or industries you're interested in..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="success-metrics">How will you measure success?</Label>
                <Textarea
                  id="success-metrics"
                  placeholder="e.g., 5 qualified leads, 3 partnership discussions, 2 investor meetings..."
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-obis-orange hover:bg-obis-orange/90">
                <Target className="mr-2 h-4 w-4" />
                Save Goals & Generate Recommendations
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Action Plan</CardTitle>
              <CardDescription>Based on your goals, here's your personalized conference strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    day: "Day 1 (June 17)",
                    focus: "Foundation & Learning",
                    actions: [
                      "Attend 'Future of AI in Enterprise' keynote",
                      "Network at opening reception",
                      "Meet with Sarah Chen (FutureAI CTO)",
                    ],
                  },
                  {
                    day: "Day 2 (June 18)",
                    focus: "Strategic Connections",
                    actions: [
                      "Attend VC panel with Jennifer Wu",
                      "Schedule 1:1 with potential partners",
                      "Participate in AI Ethics discussion",
                    ],
                  },
                  {
                    day: "Day 3 (June 19)",
                    focus: "Follow-up & Closing",
                    actions: [
                      "Attend closing keynote",
                      "Exchange contacts with key prospects",
                      "Schedule post-conference calls",
                    ],
                  },
                ].map((day, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-obis-orange rounded-full" />
                      <div className="font-medium">{day.day}</div>
                      <Badge variant="outline">{day.focus}</Badge>
                    </div>
                    <ul className="space-y-1 ml-4">
                      {day.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-sm text-muted-foreground">
                          • {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
