"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Shield, Bell, Database, Download, Trash2, Key, Globe, Smartphone, Lock, Eye, EyeOff } from "lucide-react"

export function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    followups: true,
    sessions: true,
    networking: false,
  })

  const [privacy, setPrivacy] = useState({
    shareProfile: false,
    allowContact: true,
    showActivity: false,
    dataCollection: true,
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-obis-orange">Settings</h1>
        <p className="text-muted-foreground">Manage your account, privacy, and Conference Copilot preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="data">Data & Export</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-obis-orange" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal and professional information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback className="bg-obis-lightest-blue text-obis-dark-blue text-lg">AJ</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">Change Photo</Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    Remove Photo
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex.johnson@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" defaultValue="Chief Technology Officer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="TechCorp Inc." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Brief professional summary..."
                  defaultValue="Experienced technology executive with 15+ years in enterprise software and AI implementation. Passionate about driving digital transformation and building high-performing teams."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Areas of Interest</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Enterprise Software",
                    "Digital Transformation",
                    "Healthcare Technology",
                    "Data Analytics",
                    "Cloud Computing",
                    "Cybersecurity",
                    "Leadership",
                    "Innovation",
                  ].map((interest, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-obis-cream/30">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  Add Custom Interest
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conference Preferences</CardTitle>
              <CardDescription>Set your default conference goals and networking preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Conference Goals</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnerships">Form Strategic Partnerships</SelectItem>
                    <SelectItem value="clients">Acquire New Clients</SelectItem>
                    <SelectItem value="funding">Secure Funding/Investment</SelectItem>
                    <SelectItem value="learning">Learn Industry Trends</SelectItem>
                    <SelectItem value="hiring">Recruit Talent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Networking Style</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select networking approach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aggressive">Aggressive - Maximum connections</SelectItem>
                    <SelectItem value="strategic">Strategic - Quality over quantity</SelectItem>
                    <SelectItem value="passive">Passive - Organic connections only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Target Industries</Label>
                <Textarea
                  placeholder="List industries you're most interested in..."
                  defaultValue="Enterprise Software, Healthcare Technology, Artificial Intelligence, Data Analytics"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-obis-orange" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how and when you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notification Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Receive updates via email</div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-muted-foreground">Mobile and desktop notifications</div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">SMS Notifications</div>
                      <div className="text-sm text-muted-foreground">Text message alerts for urgent items</div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Notification Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Follow-up Reminders</div>
                      <div className="text-sm text-muted-foreground">Reminders for pending follow-ups</div>
                    </div>
                    <Switch
                      checked={notifications.followups}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, followups: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Session Alerts</div>
                      <div className="text-sm text-muted-foreground">Reminders for scheduled sessions</div>
                    </div>
                    <Switch
                      checked={notifications.sessions}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sessions: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Networking Opportunities</div>
                      <div className="text-sm text-muted-foreground">Alerts for nearby contacts or events</div>
                    </div>
                    <Switch
                      checked={notifications.networking}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, networking: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Quiet Hours</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="9:00 PM" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem key={i} value={`${i}:00`}>
                            {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>End Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="7:00 AM" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem key={i} value={`${i}:00`}>
                            {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-obis-orange" />
                Privacy & Data Control
              </CardTitle>
              <CardDescription>Control how your information is shared and used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Profile Visibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Share Profile with Other Attendees</div>
                      <div className="text-sm text-muted-foreground">
                        Allow other conference attendees to see your profile
                      </div>
                    </div>
                    <Switch
                      checked={privacy.shareProfile}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, shareProfile: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Allow Contact Requests</div>
                      <div className="text-sm text-muted-foreground">Let others send you connection requests</div>
                    </div>
                    <Switch
                      checked={privacy.allowContact}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, allowContact: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Show Activity Status</div>
                      <div className="text-sm text-muted-foreground">Display when you're active or at sessions</div>
                    </div>
                    <Switch
                      checked={privacy.showActivity}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showActivity: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Data Collection</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Analytics & Insights</div>
                      <div className="text-sm text-muted-foreground">
                        Allow data collection for personalized insights
                      </div>
                    </div>
                    <Switch
                      checked={privacy.dataCollection}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, dataCollection: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Data Retention</h3>
                <div className="space-y-2">
                  <Label>Automatic Data Deletion</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select retention period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never delete</SelectItem>
                      <SelectItem value="1year">Delete after 1 year</SelectItem>
                      <SelectItem value="2years">Delete after 2 years</SelectItem>
                      <SelectItem value="5years">Delete after 5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">Save Privacy Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Rights</CardTitle>
              <CardDescription>Exercise your data protection rights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Request Data Export</div>
                  <div className="text-sm text-muted-foreground mt-1">Download all your data</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Request Data Deletion</div>
                  <div className="text-sm text-muted-foreground mt-1">Permanently delete your account</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-obis-orange" />
                Connected Services
              </CardTitle>
              <CardDescription>Manage your integrations with external services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Google Calendar",
                  description: "Sync conference sessions and follow-up meetings",
                  connected: true,
                  icon: "📅",
                },
                {
                  name: "LinkedIn",
                  description: "Import contact information and mutual connections",
                  connected: true,
                  icon: "💼",
                },
                {
                  name: "Salesforce CRM",
                  description: "Automatically add contacts and notes to your CRM",
                  connected: false,
                  icon: "🏢",
                },
                {
                  name: "Slack",
                  description: "Send follow-up reminders and summaries to your team",
                  connected: false,
                  icon: "💬",
                },
                {
                  name: "Zoom",
                  description: "Schedule and join video calls with contacts",
                  connected: true,
                  icon: "📹",
                },
                {
                  name: "Microsoft Outlook",
                  description: "Sync emails and calendar events",
                  connected: false,
                  icon: "📧",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{service.icon}</div>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground">{service.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {service.connected && <Badge className="bg-green-100 text-green-800">Connected</Badge>}
                    <Button
                      variant={service.connected ? "outline" : "default"}
                      size="sm"
                      className={!service.connected ? "bg-obis-orange hover:bg-obis-orange/90" : ""}
                    >
                      {service.connected ? "Disconnect" : "Connect"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage API keys for custom integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
                <div className="flex gap-2">
                  <Input type={showApiKey ? "text" : "password"} value="cc_live_1234567890abcdef" readOnly />
                  <Button variant="outline" size="icon" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Key className="mr-2 h-4 w-4" />
                  Regenerate Key
                </Button>
                <Button variant="outline">View Documentation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-obis-orange" />
                Data Management
              </CardTitle>
              <CardDescription>Export, backup, and manage your Conference Copilot data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Conference Data</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    All your conference sessions, notes, and insights
                  </div>
                  <div className="text-2xl font-bold text-obis-orange mb-2">15.2 MB</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Contact Database</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    All your networking contacts and meeting notes
                  </div>
                  <div className="text-2xl font-bold text-obis-medium-blue mb-2">8.7 MB</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Contacts
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Session Transcripts</div>
                  <div className="text-sm text-muted-foreground mb-3">AI-generated transcripts and summaries</div>
                  <div className="text-2xl font-bold text-obis-yellow mb-2">42.1 MB</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Transcripts
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Analytics Data</div>
                  <div className="text-sm text-muted-foreground mb-3">Usage statistics and performance metrics</div>
                  <div className="text-2xl font-bold text-obis-dark-blue mb-2">3.4 MB</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Analytics
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Bulk Actions</h3>
                <div className="flex gap-2">
                  <Button className="bg-obis-orange hover:bg-obis-orange/90">
                    <Download className="mr-2 h-4 w-4" />
                    Export All Data
                  </Button>
                  <Button variant="outline">Create Backup</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium text-destructive">Danger Zone</h3>
                <div className="p-4 border border-destructive/20 rounded-lg">
                  <div className="font-medium mb-2">Delete All Data</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Permanently delete all your Conference Copilot data. This action cannot be undone.
                  </div>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete All Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-obis-orange" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Password & Authentication</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Active Sessions</h3>
                <div className="space-y-3">
                  {[
                    {
                      device: "MacBook Pro",
                      location: "San Francisco, CA",
                      lastActive: "Current session",
                      current: true,
                    },
                    {
                      device: "iPhone 15 Pro",
                      location: "San Francisco, CA",
                      lastActive: "2 hours ago",
                      current: false,
                    },
                    {
                      device: "Chrome on Windows",
                      location: "New York, NY",
                      lastActive: "3 days ago",
                      current: false,
                    },
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{session.device}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.location} • {session.lastActive}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {session.current && <Badge className="bg-green-100 text-green-800">Current</Badge>}
                        {!session.current && (
                          <Button variant="outline" size="sm">
                            Revoke
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Sign Out All Other Sessions
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Data Encryption</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">End-to-End Encryption</div>
                      <div className="text-sm text-muted-foreground">All data encrypted in transit and at rest</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Zero-Knowledge Architecture</div>
                      <div className="text-sm text-muted-foreground">We cannot access your encrypted data</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-obis-orange hover:bg-obis-orange/90">Save Security Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Audit Log</CardTitle>
              <CardDescription>Recent security events for your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    event: "Password changed",
                    time: "2 hours ago",
                    location: "San Francisco, CA",
                    status: "success",
                  },
                  {
                    event: "Login from new device",
                    time: "1 day ago",
                    location: "San Francisco, CA",
                    status: "success",
                  },
                  {
                    event: "Two-factor authentication enabled",
                    time: "3 days ago",
                    location: "San Francisco, CA",
                    status: "success",
                  },
                  {
                    event: "Failed login attempt",
                    time: "1 week ago",
                    location: "Unknown location",
                    status: "warning",
                  },
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          log.status === "success" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{log.event}</div>
                        <div className="text-sm text-muted-foreground">{log.location}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{log.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Audit Log
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
