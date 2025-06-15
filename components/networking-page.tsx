"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MessageSquare, Building, LinkIcon, Users, Scan, Mic, Coffee, Plus, Search } from "lucide-react"

export function NetworkingPage() {
  const [selectedContact, setSelectedContact] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [newNote, setNewNote] = useState("")

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-obis-orange">Networking Assistant</h1>
        <p className="text-muted-foreground">AI-powered networking with smart icebreakers and contact management.</p>
      </div>

      <Tabs defaultValue="contacts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="contacts">Priority Contacts</TabsTrigger>
          <TabsTrigger value="scanner">Contact Scanner</TabsTrigger>
          <TabsTrigger value="icebreakers">Icebreakers</TabsTrigger>
          <TabsTrigger value="meetings">Meeting Notes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Contacts</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-obis-orange hover:bg-obis-orange/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "David Chang",
                role: "CTO at InnovateTech",
                image: "/placeholder.svg?height=40&width=40",
                initials: "DC",
                priority: "high",
                reason: "Potential partnership opportunity for AI integration",
                commonConnections: 3,
                industry: "Enterprise Software",
                icebreaker: "Both attended Stanford, mutual connection with Sarah Kim",
                status: "not-contacted",
                lastInteraction: null,
              },
              {
                name: "Elena Rodriguez",
                role: "VP Product at DataFlow",
                image: "/placeholder.svg?height=40&width=40",
                initials: "ER",
                priority: "high",
                reason: "Looking for enterprise solutions in your space",
                commonConnections: 2,
                industry: "Data Analytics",
                icebreaker: "Recently quoted in TechCrunch about data privacy",
                status: "contacted",
                lastInteraction: "Exchanged business cards at opening reception",
              },
              {
                name: "James Wilson",
                role: "Partner at Accel Ventures",
                image: "/placeholder.svg?height=40&width=40",
                initials: "JW",
                priority: "high",
                reason: "Actively investing in your industry",
                commonConnections: 1,
                industry: "Venture Capital",
                icebreaker: "Both interested in AI for healthcare applications",
                status: "meeting-scheduled",
                lastInteraction: "Coffee meeting scheduled for tomorrow 2 PM",
              },
              {
                name: "Michelle Lee",
                role: "CEO at HealthTech Solutions",
                image: "/placeholder.svg?height=40&width=40",
                initials: "ML",
                priority: "medium",
                reason: "Potential client for your enterprise solution",
                commonConnections: 4,
                industry: "Healthcare",
                icebreaker: "Recently expanded operations to your region",
                status: "not-contacted",
                lastInteraction: null,
              },
            ].map((person, index) => (
              <Card key={index} className={person.priority === "high" ? "border-obis-orange/30" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                        <AvatarFallback className="bg-obis-lightest-blue text-obis-dark-blue">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{person.name}</CardTitle>
                        <CardDescription>{person.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge
                        variant={person.priority === "high" ? "default" : "outline"}
                        className={person.priority === "high" ? "bg-obis-orange" : ""}
                      >
                        {person.priority === "high" ? <Star className="mr-1 h-3 w-3" /> : null}
                        {person.priority === "high" ? "Priority" : "Medium"}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          person.status === "meeting-scheduled"
                            ? "bg-green-100 text-green-800"
                            : person.status === "contacted"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {person.status === "meeting-scheduled"
                          ? "Meeting Set"
                          : person.status === "contacted"
                            ? "Contacted"
                            : "New"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pb-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Why connect:</div>
                    <div className="text-sm text-muted-foreground">{person.reason}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Building className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{person.industry}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{person.commonConnections} mutual</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Suggested icebreaker:</div>
                    <div className="rounded-md bg-obis-cream/30 p-2 text-sm">"{person.icebreaker}"</div>
                  </div>
                  {person.lastInteraction && (
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Last interaction:</div>
                      <div className="text-sm text-muted-foreground">{person.lastInteraction}</div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="mr-1 h-3.5 w-3.5" />
                    Add Note
                  </Button>
                  <Button size="sm" className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scanner" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scan className="h-5 w-5 text-obis-orange" />
                Contact Scanner
              </CardTitle>
              <CardDescription>
                Scan business cards or badges to instantly capture and enrich contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center py-12 border-2 border-dashed border-obis-light-orange/50 rounded-lg">
                <div className="text-center">
                  <Scan className="h-16 w-16 mx-auto mb-4 text-obis-orange opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Ready to Scan</h3>
                  <p className="text-muted-foreground mb-4">Position business card or badge in camera view</p>
                  <Button className="bg-obis-orange hover:bg-obis-orange/90">
                    <Scan className="mr-2 h-4 w-4" />
                    Start Camera
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Scans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Alex Thompson", company: "TechCorp", time: "2 minutes ago" },
                        { name: "Sarah Kim", company: "DataSystems", time: "15 minutes ago" },
                        { name: "Mike Chen", company: "CloudScale", time: "1 hour ago" },
                      ].map((scan, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div>
                            <div className="font-medium text-sm">{scan.name}</div>
                            <div className="text-xs text-muted-foreground">{scan.company}</div>
                          </div>
                          <div className="text-xs text-muted-foreground">{scan.time}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Voice Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center py-8 border border-dashed rounded-lg">
                        <div className="text-center">
                          <Mic className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Tap to record voice notes</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Mic className="mr-2 h-4 w-4" />
                        Start Voice Recording
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="icebreakers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-obis-orange" />
                AI Icebreaker Engine
              </CardTitle>
              <CardDescription>
                Get personalized conversation starters based on mutual connections and interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Select Contact</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose a contact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="david">David Chang - InnovateTech</SelectItem>
                      <SelectItem value="elena">Elena Rodriguez - DataFlow</SelectItem>
                      <SelectItem value="james">James Wilson - Accel Ventures</SelectItem>
                      <SelectItem value="michelle">Michelle Lee - HealthTech</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Conversation Context</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select context" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="networking">Networking Event</SelectItem>
                      <SelectItem value="session">After Session</SelectItem>
                      <SelectItem value="coffee">Coffee Break</SelectItem>
                      <SelectItem value="lunch">Lunch Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Card className="border-obis-yellow/30 bg-obis-cream/20">
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Icebreakers</CardTitle>
                  <CardDescription>For David Chang at networking event</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      opener:
                        "I noticed we both went to Stanford - did you know Professor Martinez in the CS department?",
                      reason: "Shared alma mater connection",
                      confidence: "High",
                    },
                    {
                      opener:
                        "Sarah Kim mentioned you're working on some interesting AI integration projects. I'd love to hear about your approach.",
                      reason: "Mutual connection introduction",
                      confidence: "High",
                    },
                    {
                      opener:
                        "I saw InnovateTech's recent announcement about the enterprise platform. How are you finding the market response?",
                      reason: "Recent company news",
                      confidence: "Medium",
                    },
                    {
                      opener:
                        "What did you think of Sarah Chen's talk on AI implementation? I'm curious about your perspective as a CTO.",
                      reason: "Shared session attendance",
                      confidence: "Medium",
                    },
                  ].map((icebreaker, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant="outline"
                          className={
                            icebreaker.confidence === "High"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {icebreaker.confidence} Confidence
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">"{icebreaker.opener}"</p>
                      <p className="text-xs text-muted-foreground">{icebreaker.reason}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Meeting Notes</h2>
            <Button className="bg-obis-orange hover:bg-obis-orange/90">
              <Plus className="mr-2 h-4 w-4" />
              New Meeting Note
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                contact: "Elena Rodriguez",
                company: "DataFlow",
                date: "June 17, 2025",
                time: "2:30 PM",
                location: "Coffee Bar, Level 2",
                duration: "30 minutes",
                type: "coffee",
                notes:
                  "Discussed their data processing challenges. They're looking for a solution that can handle 10TB+ daily. Interested in our enterprise package. Next step: demo scheduled for next week.",
                actionItems: [
                  "Send enterprise package pricing",
                  "Schedule demo for June 25",
                  "Introduce to technical team",
                ],
                outcome: "Demo scheduled",
              },
              {
                contact: "James Wilson",
                company: "Accel Ventures",
                date: "June 17, 2025",
                time: "4:00 PM",
                location: "Quiet Zone, Main Hall",
                duration: "45 minutes",
                type: "formal",
                notes:
                  "Great conversation about our growth trajectory. He's impressed with our healthcare traction. Wants to see Q2 numbers and customer retention metrics. Potential Series B discussion.",
                actionItems: [
                  "Send Q2 metrics deck",
                  "Prepare customer case studies",
                  "Schedule follow-up call with team",
                ],
                outcome: "Follow-up call scheduled",
              },
            ].map((meeting, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{meeting.contact}</CardTitle>
                      <CardDescription>
                        {meeting.company} • {meeting.date}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {meeting.type === "coffee" ? (
                        <Coffee className="h-3 w-3" />
                      ) : meeting.type === "formal" ? (
                        <Users className="h-3 w-3" />
                      ) : null}
                      {meeting.type === "coffee" ? "Coffee" : "Formal Meeting"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Time:</span> {meeting.time}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {meeting.duration}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Location:</span> {meeting.location}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Meeting Notes:</div>
                    <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded">{meeting.notes}</p>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Action Items:</div>
                    <ul className="space-y-1">
                      {meeting.actionItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-obis-orange rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">{meeting.outcome}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit Notes
                  </Button>
                  <Button size="sm" className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                    Add Follow-up
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-obis-orange">23</div>
                <p className="text-xs text-muted-foreground">+5 since yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Meetings Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-obis-medium-blue">8</div>
                <p className="text-xs text-muted-foreground">3 confirmed for today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Follow-ups Pending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-obis-yellow">5</div>
                <p className="text-xs text-muted-foreground">2 due today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">78%</div>
                <p className="text-xs text-muted-foreground">Positive responses</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Networking Activity</CardTitle>
                <CardDescription>Your networking progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: "Day 1", contacts: 8, meetings: 3 },
                    { day: "Day 2", contacts: 12, meetings: 5 },
                    { day: "Day 3", contacts: 3, meetings: 2 },
                  ].map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{day.day}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">{day.contacts} contacts</span>
                        <span className="text-sm">{day.meetings} meetings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Sources</CardTitle>
                <CardDescription>How you're meeting people</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { source: "Session networking", count: 12, percentage: 52 },
                    { source: "Coffee breaks", count: 6, percentage: 26 },
                    { source: "Lunch meetings", count: 3, percentage: 13 },
                    { source: "Exhibition hall", count: 2, percentage: 9 },
                  ].map((source, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{source.source}</span>
                          <span className="text-sm text-muted-foreground">{source.count}</span>
                        </div>
                        <div className="mt-1 h-2 bg-muted rounded-full">
                          <div
                            className="h-full bg-obis-orange rounded-full"
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
