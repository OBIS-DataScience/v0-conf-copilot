import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MessageSquare, Building, LinkIcon } from "lucide-react"

export function PeopleToMeet() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">People to Meet</h2>
        <Button variant="outline" size="sm">
          Add Custom Contact
        </Button>
      </div>

      <Tabs defaultValue="priority" className="space-y-4">
        <TabsList>
          <TabsTrigger value="priority">Priority</TabsTrigger>
          <TabsTrigger value="industry">By Industry</TabsTrigger>
          <TabsTrigger value="role">By Role</TabsTrigger>
          <TabsTrigger value="all">All Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="priority" className="space-y-4">
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
              },
              {
                name: "Michelle Lee",
                role: "CEO at HealthTech Solutions",
                image: "/placeholder.svg?height=40&width=40",
                initials: "ML",
                priority: "high",
                reason: "Potential client for your enterprise solution",
                commonConnections: 4,
                industry: "Healthcare",
                icebreaker: "Recently expanded operations to your region",
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
                    <Badge>
                      <Star className="mr-1 h-3 w-3" />
                      Priority
                    </Badge>
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
                    <div className="rounded-md bg-muted p-2 text-sm">"{person.icebreaker}"</div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="mr-1 h-3.5 w-3.5" />
                    Prepare Notes
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="industry" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { industry: "Enterprise Software", count: 5 },
              { industry: "Venture Capital", count: 3 },
              { industry: "Healthcare", count: 4 },
              { industry: "Data Analytics", count: 3 },
              { industry: "AI/ML", count: 6 },
              { industry: "Fintech", count: 2 },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-lg">{item.industry}</CardTitle>
                  <CardDescription>{item.count} people to meet</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Contacts
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="role" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "C-Level Executives", count: 7 },
              { role: "VPs & Directors", count: 5 },
              { role: "Investors", count: 4 },
              { role: "Product Leaders", count: 3 },
              { role: "Technical Leaders", count: 6 },
              { role: "Founders", count: 5 },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <CardDescription>{item.count} people to meet</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Contacts
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Recommended Contacts</CardTitle>
              <CardDescription>15 people matched to your interests and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>{["JD", "AR", "TK", "ML", "BW"][index]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {["John Doe", "Alice Ramos", "Tom Kim", "Maria Lopez", "Ben Wong"][index]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {
                            [
                              "CEO at TechCorp",
                              "CTO at DataSystems",
                              "Partner at Sequoia",
                              "VP Product at HealthAI",
                              "Founder at CloudScale",
                            ][index]
                          }
                        </div>
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
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
