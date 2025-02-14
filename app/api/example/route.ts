import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // Simulate API logic
    const data = { message: "Hello from the API!" }

    return NextResponse.json(data)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Simulate API logic
    const data = { message: "Data received", receivedData: body }

    return NextResponse.json(data)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

