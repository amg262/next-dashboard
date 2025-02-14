"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGoogle, FaMicrosoft, FaFacebook } from "react-icons/fa"

export default function LoginPage() {
  const handleOAuthLogin = (provider: string) => {
    // Implement OAuth login logic here
    console.log(`Logging in with ${provider}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Choose your login method</CardDescription>
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
  )
}

