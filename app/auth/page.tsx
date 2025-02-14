"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaMicrosoft, FaFacebook } from "react-icons/fa"

export default function AuthPage() {
  const handleOAuthLogin = (provider: string) => {
    // Implement OAuth login logic here
    console.log(`Logging in with ${provider}`)
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/auth-background.jpg')" }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-xl">Login to access your dashboard</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            <CardDescription>Choose your preferred login method</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" onClick={() => handleOAuthLogin("Google")} className="w-full">
              <FaGoogle className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            <Button variant="outline" onClick={() => handleOAuthLogin("Microsoft")} className="w-full">
              <FaMicrosoft className="mr-2 h-4 w-4" />
              Continue with Microsoft
            </Button>
            <Button variant="outline" onClick={() => handleOAuthLogin("Facebook")} className="w-full">
              <FaFacebook className="mr-2 h-4 w-4" />
              Continue with Facebook
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

