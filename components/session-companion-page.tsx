"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, FileText, MessageSquare, Lightbulb, Clock, Tag, Save, Share, Download } from "lucide-react"

export function SessionCompanionPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [currentSession, setCurrentSession] = useState("Future of AI in Enterprise")
  const [notes, setNotes] = useState("")
  const [questions, setQuestions] = useState<string[]>([])
  const [newQuestion, setNewQuestion] = useState("")

  const handleStartRecording = () => {
    setIsRecording(true)
    setIsTranscribing(true)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    setIsTranscribing(false)
  }

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()])
      setNewQuestion("")
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-obis-orange">Session Companion</h1>
        <p className="text-muted-foreground">
          Real-time transcription, smart notes, and AI-powered insights during sessions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-obis-light-orange/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-obis-orange">{currentSession}</CardTitle>
                  <CardDescription>Sarah Chen, CTO at FutureAI • Main Hall A</CardDescription>
                </div>
                <Badge className="bg-red-100 text-red-800">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                  LIVE
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 py-8">
                <Button
                  size="lg"
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  className={`h-16 w-16 rounded-full ${
                    isRecording ? "bg-red-500 hover:bg-red-600" : "bg-obis-orange hover:bg-obis-orange/90"
                  }`}
                >
                  {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                </Button>
                <div className="text-center">
                  <div className="text-sm font-medium">{isRecording ? "Recording Active" : "Ready to Record"}</div>
                  <div className="text-xs text-muted-foreground">
                    {isRecording ? "Click to stop" : "Click to start"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="transcript" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="transcript">Live Transcript</TabsTrigger>
              <TabsTrigger value="notes">Smart Notes</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="transcript" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Live Transcription
                  </CardTitle>
                  <CardDescription>
                    {isTranscribing ? "Transcribing in real-time..." : "Start recording to see live transcription"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] p-4 bg-muted/30 rounded-lg">
                    {isTranscribing ? (
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="text-xs">
                            09:15
                          </Badge>
                          <p className="text-sm">
                            "Good morning everyone. Today we're going to explore how artificial intelligence is
                            fundamentally transforming enterprise operations..."
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="text-xs">
                            09:17
                          </Badge>
                          <p className="text-sm">
                            "The key challenge we see across organizations is not the technology itself, but the
                            integration with existing systems and processes..."
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="text-xs">
                            09:19
                          </Badge>
                          <p className="text-sm">
                            "Let me share three case studies from our recent implementations. First, in healthcare, we
                            reduced diagnostic time by 40%..."
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-obis-orange">
                          <div className="w-2 h-2 bg-obis-orange rounded-full animate-pulse" />
                          <span className="text-sm">Transcribing...</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <Mic className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>Start recording to see live transcription</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Smart Notes
                  </CardTitle>
                  <CardDescription>AI-organized notes with automatic formatting and tagging</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Type or dictate your notes here. AI will automatically format and organize them..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[300px]"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-medium">AI-Generated Key Points:</div>
                    <div className="space-y-2">
                      {[
                        "AI reduces diagnostic time by 40% in healthcare applications",
                        "Integration challenges are more significant than technology adoption",
                        "Three successful case studies: healthcare, finance, and manufacturing",
                        "ROI typically seen within 6-12 months of implementation",
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-obis-cream/30 rounded">
                          <div className="w-2 h-2 bg-obis-orange rounded-full mt-2" />
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" className="bg-obis-medium-blue hover:bg-obis-medium-blue/90">
                    <Save className="mr-2 h-4 w-4" />
                    Save Notes
                  </Button>
                  <Button variant="outline" size="sm">
                    <Tag className="mr-2 h-4 w-4" />
                    Add Tags
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="questions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Questions Queue
                  </CardTitle>
                  <CardDescription>Prepare and manage your questions for Q&A sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your question..."
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addQuestion()}
                    />
                    <Button onClick={addQuestion} className="bg-obis-orange hover:bg-obis-orange/90">
                      Add
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Your Questions:</div>
                    {questions.length > 0 ? (
                      <div className="space-y-2">
                        {questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 border rounded-lg">
                            <div className="text-sm flex-1">{question}</div>
                            <Button variant="ghost" size="sm">
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No questions added yet</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">AI-Suggested Questions:</div>
                    <div className="space-y-2">
                      {[
                        "How do you measure ROI for enterprise AI implementations?",
                        "What governance structures have you found most effective?",
                        "How are you addressing potential bias in AI systems?",
                        "What skills gap have you identified when implementing AI at scale?",
                      ].map((question, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 bg-obis-lightest-blue/20 rounded-lg">
                          <div className="text-sm flex-1">{question}</div>
                          <Button variant="outline" size="sm" onClick={() => setQuestions([...questions, question])}>
                            Add
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    AI Insights
                  </CardTitle>
                  <CardDescription>Real-time analysis and connections across sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border border-obis-yellow/30 bg-obis-cream/20 rounded-lg">
                      <div className="font-medium mb-2">Key Themes Detected</div>
                      <div className="space-y-1">
                        {[
                          "AI Implementation",
                          "ROI Measurement",
                          "Integration Challenges",
                          "Healthcare Applications",
                        ].map((theme, index) => (
                          <Badge key={index} variant="outline" className="mr-1 mb-1">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-obis-lightest-blue/50 bg-obis-lightest-blue/10 rounded-lg">
                      <div className="font-medium mb-2">Connection to Your Goals</div>
                      <p className="text-sm text-muted-foreground">
                        This session aligns with your partnership goals. Sarah Chen's healthcare focus matches your Q3
                        initiative.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="font-medium">Cross-Session Insights:</div>
                    <div className="space-y-2">
                      {[
                        {
                          insight: "Healthcare AI theme recurring across 3 sessions",
                          sessions: ["Future of AI", "Ethics Panel", "VC Trends"],
                          relevance: "High - matches your target market",
                        },
                        {
                          insight: "ROI measurement mentioned by 4 different speakers",
                          sessions: ["AI in Enterprise", "Leadership Panel"],
                          relevance: "Medium - important for your pitch deck",
                        },
                      ].map((item, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="font-medium text-sm">{item.insight}</div>
                          <div className="text-xs text-muted-foreground mt-1">Sessions: {item.sessions.join(", ")}</div>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {item.relevance}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Started: 9:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Duration: 45 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Recording: Active</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Add Quick Note
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Tag className="mr-2 h-4 w-4" />
                Tag Important Moment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share className="mr-2 h-4 w-4" />
                Share with Team
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Words transcribed</span>
                <span className="text-sm font-medium">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Key points identified</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Questions prepared</span>
                <span className="text-sm font-medium">{questions.length}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
