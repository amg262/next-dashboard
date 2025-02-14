import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Settings className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Settings</h1>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input id="site-name" placeholder="My Awesome Site" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-description">Site Description</Label>
            <Input id="site-description" placeholder="A brief description of your site" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="maintenance-mode" />
            <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="smtp-host">SMTP Host</Label>
            <Input id="smtp-host" placeholder="smtp.example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-port">SMTP Port</Label>
            <Input id="smtp-port" placeholder="587" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-username">SMTP Username</Label>
            <Input id="smtp-username" placeholder="your-username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-password">SMTP Password</Label>
            <Input id="smtp-password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

