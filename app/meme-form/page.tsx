"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function MemeFormPage() {
  const [content, setContent] = useState("")
  const [laughScore, setLaughScore] = useState(5)
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { content, laughScore, tags })
  }

  const addTag = () => {
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Meme Submission Form</h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Submit a New Meme</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="content">Meme Content</Label>
              <Textarea
                id="content"
                placeholder="Enter your meme content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="laugh-score">Laugh Score</Label>
              <Slider
                id="laugh-score"
                min={1}
                max={10}
                step={1}
                value={[laughScore]}
                onValueChange={(value) => setLaughScore(value[0])}
              />
              <div className="text-center font-medium">{laughScore}</div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex space-x-2">
                <Input
                  id="tags"
                  placeholder="Add a tag..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                />
                <Button type="button" onClick={addTag}>
                  Add Tag
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 text-xs text-gray-500 hover:text-gray-700"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit Meme
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

