"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

type ErrorBoundaryProps = {
  error: Error
  reset: () => void
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Oops, something went wrong!</h2>
      <p className="text-muted-foreground mb-4">We apologize for the inconvenience.</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}

