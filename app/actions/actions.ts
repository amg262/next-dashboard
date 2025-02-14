"use server"

import {get} from "@/app/fetchWrapper";
import {cookies} from "next/headers";

export async function getJokes() {
    return await get('jokes');
}

export async function getCookie(name: string): Promise<string | null> {
    const cookieStore = cookies()
    return cookieStore.get(name)?.value ?? null
}

// Usage example:
