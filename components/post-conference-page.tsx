"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Users, Calendar, TrendingUp, Download, Share, Mail, Clock, Target } from "lucide-react"

export function PostConferencePage() {
  const [selectedTone, setSelectedTone] = useState("professional")

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-obis-orange">Post-Conference Intelligence</h1>
        <p className="text-muted-foreground">
          Transform your conference experience into actionable insights and strategic follow-ups.
        </p>
      </div>

      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="summary">Executive Summary</TabsTrigger>
          <TabsTrigger value="followups">Follow-up Queue</TabsTrigger>
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="planning">Next Steps</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <Card className="border-obis-light-orange/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-obis-orange">TechSummit 2025 - Executive Summary</CardTitle>
                  <CardDescription>June 17-19, 2025 • San Francisco</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-obis-cream/20 rounded-lg">
                  <div className="text-2xl font-bold text-obis-orange">8</div>
                  <div className="text-sm text-muted-foreground">Sessions Attended</div>
                </div>
                <div className="text-center p-4 bg-obis-lightest-blue/20 rounded-lg">
                  <div className="text-2xl font-bold text-obis-medium-blue">23</div>
                  <div className="text-sm text-muted-foreground">New Contacts</div>
                </div>
                <div className="text-center p-4 bg-obis-yellow/20 rounded-lg">
                  <div className="text-2xl font-bold text-obis-dark-blue">12</div>
                  <div className="text-sm text-muted-foreground">Follow-ups Scheduled</div>
                </div>
                <div className="text-center p-4 bg-green-100 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-muted-foreground">Partnership Opportunities</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Conference Highlights</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium">Top Sessions</h4>
                    {[
                      {
                        title: "Future of AI in Enterprise",
                        rating: 5,
                        key_takeaway: "Healthcare AI showing 40% efficiency gains",
                      },
                      { title: "VC Trends 2025", rating: 5, key_takeaway: "$1B+ funds focusing on AI startups" },
                      {
                        title: "Leadership in Tech Transformation",
                        rating: 4,
                        key_takeaway: "Change management critical for AI adoption",
                      },
                    ].map((session, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium text-sm">{session.title}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 ${i < session.rating ? "text-obis-orange" : "text-gray-300"}`}
                              >
                                ★
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{session.key_takeaway}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Key Connections</h4>
                    {[
                      { name: "Sarah Chen", company: "FutureAI", potential: "Partnership", priority: "High" },
                      { name: "James Wilson", company: "Accel Ventures", potential: "Investment", priority: "High" },
                      { name: "Elena Rodriguez", company: "DataFlow", potential: "Client", priority: "Medium" },
                    ].map((contact, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium text-sm">{contact.name}</div>
                          <Badge
                            variant={contact.priority === "High" ? "default" : "outline"}
                            className={contact.priority === "High" ? "bg-obis-orange" : ""}
                          >
                            {contact.priority}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {contact.company} • {contact.potential}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Strategic Insights</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-4 bg-obis-cream/30 rounded-lg">
                    <div className="font-medium mb-2">Market Trends</div>
                    <ul className="text-sm space-y-1">
                      <li>• AI adoption accelerating in healthcare sector</li>
                      <li>• Enterprise focus shifting to AI governance</li>
                      <li>• VC funding concentrated in AI/ML startups</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-obis-lightest-blue/20 rounded-lg">
                    <div className="font-medium mb-2">Competitive Intelligence</div>
                    <ul className="text-sm space-y-1">
                      <li>• FutureAI expanding into healthcare vertical</li>
                      <li>• TechTrans acquired by Microsoft for $2.3B</li>
                      <li>• New players entering enterprise AI space</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Goal Achievement Analysis</CardTitle>
              <CardDescription>How well did you meet your conference objectives?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { goal: "Form Strategic Partnerships", target: 3, achieved: 5, status: "exceeded" },
                  { goal: "Acquire New Clients", target: 5, achieved: 3, status: "partial" },
                  { goal: "Secure Funding/Investment", target: 2, achieved: 1, status: "partial" },
                  { goal: "Learn Industry Trends", target: "Qualitative", achieved: "8 sessions", status: "achieved" },
                ].map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{goal.goal}</div>
                      <div className="text-sm text-muted-foreground">
                        Target: {goal.target} | Achieved: {goal.achieved}
                      </div>
                    </div>
                    <Badge
                      className={
                        goal.status === "exceeded"
                          ? "bg-green-100 text-green-800"
                          : goal.status === "achieved"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {goal.status === "exceeded" ? "Exceeded" : goal.status === "achieved" ? "Achieved" : "Partial"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="followups" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Smart Follow-up Queue</h2>
            <Button className="bg-obis-orange hover:bg-obis-orange/90">Generate All Follow-ups</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Sarah Chen",
                company: "FutureAI",
                priority: "High",
                reason: "Partnership discussion - healthcare AI integration",
                suggestedAction: "Send partnership proposal",
                timeline: "Within 2 days",
                draftReady: true,
              },
              {
                name: "James Wilson",
                company: "Accel Ventures",
                priority: "High",
                reason: "Investment interest - wants Q2 metrics",
                suggestedAction: "Send investor deck with metrics",
                timeline: "Within 1 day",
                draftReady: true,
              },
              {
                name: "Elena Rodriguez",
                company: "DataFlow",
                priority: "Medium",
                reason: "Product demo interest - enterprise solution",
                suggestedAction: "Schedule product demo",
                timeline: "Within 3 days",
                draftReady: false,
              },
              {
                name: "Michelle Lee",
                company: "HealthTech Solutions",
                priority: "Medium",
                reason: "Healthcare vertical expansion opportunity",
                suggestedAction: "Share healthcare case studies",
                timeline: "Within 5 days",
                draftReady: false,
              },
            ].map((followup, index) => (
              <Card key={index} className={followup.priority === "High" ? "border-obis-orange/30" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{followup.name}</CardTitle>
                      <CardDescription>{followup.company}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge
                        variant={followup.priority === "High" ? "default" : "outline"}
                        className={followup.priority === "High" ? "bg-obis-orange" : ""}
                      >
                        {followup.priority} Priority
                      </Badge>
                      {followup.draftReady && <Badge className="bg-green-100 text-green-800">Draft Ready</Badge>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">Context:</div>
                    <div className="text-sm text-muted-foreground">{followup.reason}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Suggested Action:</div>
                    <div className="text-sm text-muted-foreground">{followup.suggestedAction}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{followup.timeline}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {followup.draftReady ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit Draft
                      </Button>
                      <Button size="sm" className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                        Send Email
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        Create Draft
                      </Button>
                      <Button size="sm" className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                        Schedule
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Email Draft Generator</CardTitle>
              <CardDescription>AI-powered follow-up emails with customizable tone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Select Contact</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose contact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah Chen - FutureAI</SelectItem>
                      <SelectItem value="james">James Wilson - Accel Ventures</SelectItem>
                      <SelectItem value="elena">Elena Rodriguez - DataFlow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Email Tone</label>
                  <Select value={selectedTone} onValueChange={setSelectedTone}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Generated Email Preview</label>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="space-y-2">
                    <div className="text-sm">
                      <strong>Subject:</strong> Following up on our TechSummit conversation
                    </div>
                    <div className="text-sm">
                      <strong>To:</strong> Sarah Chen &lt;sarah.chen@futureai.com&gt;
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="text-sm space-y-2">
                        <p>Hi Sarah,</p>
                        <p>
                          It was great connecting with you at TechSummit yesterday. I was particularly interested in
                          your insights about AI implementation in healthcare during your keynote.
                        </p>
                        <p>
                          Based on our conversation about potential partnerships, I'd love to explore how our enterprise
                          AI platform could complement FutureAI's healthcare initiatives. Our recent case study with
                          MedTech Corp showed a 40% reduction in diagnostic processing time.
                        </p>
                        <p>
                          Would you be available for a brief call next week to discuss this further? I'm happy to work
                          around your schedule.
                        </p>
                        <p>
                          Best regards,
                          <br />
                          Alex
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline">Edit Draft</Button>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-obis-orange" />
                  Market Intelligence
                </CardTitle>
                <CardDescription>Key trends and insights from the conference</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    trend: "AI Governance & Ethics",
                    mentions: 12,
                    sessions: ["AI Ethics Panel", "Enterprise AI", "Future of Work"],
                    insight: "Growing focus on responsible AI implementation and regulatory compliance",
                  },
                  {
                    trend: "Healthcare AI Applications",
                    mentions: 8,
                    sessions: ["AI in Enterprise", "VC Trends", "Digital Health"],
                    insight: "Healthcare emerging as primary vertical for AI investment and innovation",
                  },
                  {
                    trend: "Enterprise Integration Challenges",
                    mentions: 15,
                    sessions: ["Tech Transformation", "AI Implementation", "Leadership Panel"],
                    insight: "Technical integration less challenging than organizational change management",
                  },
                ].map((trend, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{trend.trend}</div>
                      <Badge variant="outline">{trend.mentions} mentions</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{trend.insight}</div>
                    <div className="text-xs text-muted-foreground">Sessions: {trend.sessions.join(", ")}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-obis-medium-blue" />
                  Network Analysis
                </CardTitle>
                <CardDescription>Insights about your new connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-obis-cream/20 rounded">
                    <div className="text-xl font-bold text-obis-orange">78%</div>
                    <div className="text-xs text-muted-foreground">C-Level Contacts</div>
                  </div>
                  <div className="text-center p-3 bg-obis-lightest-blue/20 rounded">
                    <div className="text-xl font-bold text-obis-medium-blue">65%</div>
                    <div className="text-xs text-muted-foreground">Target Industry</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-medium">Industry Breakdown</div>
                  {[
                    { industry: "Enterprise Software", count: 8, percentage: 35 },
                    { industry: "Healthcare Tech", count: 5, percentage: 22 },
                    { industry: "Venture Capital", count: 4, percentage: 17 },
                    { industry: "Data Analytics", count: 6, percentage: 26 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{item.industry}</span>
                          <span className="text-sm font-medium">{item.count}</span>
                        </div>
                        <div className="mt-1 h-2 bg-muted rounded-full">
                          <div
                            className="h-full bg-obis-orange rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-obis-orange" />
                Opportunity Analysis
              </CardTitle>
              <CardDescription>Potential business opportunities identified</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    type: "Partnership",
                    count: 5,
                    value: "High",
                    companies: ["FutureAI", "HealthTech Solutions", "DataFlow"],
                    description: "Strategic partnerships for market expansion",
                  },
                  {
                    type: "Investment",
                    count: 2,
                    value: "Very High",
                    companies: ["Accel Ventures", "Sequoia Capital"],
                    description: "Series B funding opportunities",
                  },
                  {
                    type: "Client Acquisition",
                    count: 8,
                    value: "Medium",
                    companies: ["Enterprise Corp", "MedTech Systems", "DataFlow"],
                    description: "Enterprise solution prospects",
                  },
                ].map((opportunity, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{opportunity.type}</div>
                      <Badge
                        className={
                          opportunity.value === "Very High"
                            ? "bg-green-100 text-green-800"
                            : opportunity.value === "High"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {opportunity.value}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-obis-orange mb-2">{opportunity.count}</div>
                    <div className="text-sm text-muted-foreground mb-2">{opportunity.description}</div>
                    <div className="text-xs text-muted-foreground">
                      Key companies: {opportunity.companies.slice(0, 2).join(", ")}
                      {opportunity.companies.length > 2 && ` +${opportunity.companies.length - 2} more`}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Conference Reports</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export All
              </Button>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">Generate Custom Report</Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Executive Summary Report",
                description: "High-level overview for leadership team",
                pages: 3,
                sections: ["Key Metrics", "Strategic Insights", "Recommendations"],
                format: "PDF",
                status: "Ready",
              },
              {
                title: "Detailed Contact Report",
                description: "Complete contact database with notes",
                pages: 12,
                sections: ["Contact Profiles", "Meeting Notes", "Follow-up Actions"],
                format: "Excel + PDF",
                status: "Ready",
              },
              {
                title: "Session Insights Report",
                description: "Comprehensive session analysis and transcripts",
                pages: 25,
                sections: ["Session Summaries", "Key Quotes", "Action Items"],
                format: "PDF",
                status: "Ready",
              },
              {
                title: "ROI Analysis Report",
                description: "Conference investment return analysis",
                pages: 8,
                sections: ["Cost Analysis", "Opportunity Value", "ROI Projections"],
                format: "PDF + Excel",
                status: "Generating",
              },
            ].map((report, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                    <Badge
                      className={
                        report.status === "Ready" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span>{report.pages} pages</span>
                    <span>•</span>
                    <span>{report.format}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Sections:</div>
                    <div className="flex flex-wrap gap-1">
                      {report.sections.map((section, sectionIndex) => (
                        <Badge key={sectionIndex} variant="outline" className="text-xs">
                          {section}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" disabled={report.status !== "Ready"}>
                    <FileText className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-obis-medium-blue hover:bg-obis-medium-blue/90"
                    disabled={report.status !== "Ready"}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-obis-orange" />
                Next Steps Timeline
              </CardTitle>
              <CardDescription>AI-generated action plan based on your conference outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    timeframe: "This Week (June 20-26)",
                    priority: "Critical",
                    actions: [
                      { task: "Send follow-up emails to high-priority contacts", deadline: "June 22", type: "email" },
                      { task: "Schedule demo with DataFlow (Elena Rodriguez)", deadline: "June 24", type: "meeting" },
                      { task: "Prepare investor deck for Accel Ventures", deadline: "June 25", type: "document" },
                    ],
                  },
                  {
                    timeframe: "Next Week (June 27 - July 3)",
                    priority: "High",
                    actions: [
                      { task: "Conduct product demo for DataFlow", deadline: "June 30", type: "meeting" },
                      { task: "Partnership proposal call with FutureAI", deadline: "July 1", type: "call" },
                      { task: "Team debrief and strategy session", deadline: "July 2", type: "internal" },
                    ],
                  },
                  {
                    timeframe: "Month 1 (July)",
                    priority: "Medium",
                    actions: [
                      { task: "Follow up on partnership discussions", deadline: "July 15", type: "follow-up" },
                      { task: "Implement feedback from conference sessions", deadline: "July 20", type: "internal" },
                      { task: "Plan next conference strategy", deadline: "July 30", type: "planning" },
                    ],
                  },
                ].map((period, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{period.timeframe}</div>
                      <Badge
                        variant={
                          period.priority === "Critical"
                            ? "destructive"
                            : period.priority === "High"
                              ? "default"
                              : "outline"
                        }
                      >
                        {period.priority} Priority
                      </Badge>
                    </div>
                    <div className="space-y-2 ml-4">
                      {period.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              action.type === "email"
                                ? "bg-blue-500"
                                : action.type === "meeting"
                                  ? "bg-green-500"
                                  : action.type === "call"
                                    ? "bg-purple-500"
                                    : action.type === "document"
                                      ? "bg-orange-500"
                                      : "bg-gray-500"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{action.task}</div>
                            <div className="text-xs text-muted-foreground">Due: {action.deadline}</div>
                          </div>
                          <Button variant="outline" size="sm">
                            Add to Calendar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-obis-orange hover:bg-obis-orange/90">
                <Calendar className="mr-2 h-4 w-4" />
                Add All to Calendar
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Success Metrics Tracking</CardTitle>
                <CardDescription>Monitor progress on conference outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { metric: "Follow-up Response Rate", current: 85, target: 80, unit: "%" },
                    { metric: "Meetings Scheduled", current: 12, target: 10, unit: "" },
                    { metric: "Partnership Discussions", current: 3, target: 5, unit: "" },
                    { metric: "Qualified Leads", current: 8, target: 12, unit: "" },
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.metric}</span>
                        <span className="text-sm">
                          {metric.current}
                          {metric.unit} / {metric.target}
                          {metric.unit}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div
                          className={`h-full rounded-full ${
                            metric.current >= metric.target ? "bg-green-500" : "bg-obis-orange"
                          }`}
                          style={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Conference Planning</CardTitle>
                <CardDescription>Recommendations for upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-obis-cream/20 rounded-lg">
                    <div className="font-medium mb-1">Recommended Events</div>
                    <ul className="text-sm space-y-1">
                      <li>• AI Healthcare Summit (Sept 2025)</li>
                      <li>• Enterprise Tech Conference (Oct 2025)</li>
                      <li>• VC Innovation Forum (Nov 2025)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-obis-lightest-blue/20 rounded-lg">
                    <div className="font-medium mb-1">Strategy Improvements</div>
                    <ul className="text-sm space-y-1">
                      <li>• Focus more on healthcare vertical</li>
                      <li>• Prepare investor materials in advance</li>
                      <li>• Schedule more 1:1 meetings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Plan Next Conference
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
