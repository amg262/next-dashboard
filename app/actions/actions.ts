"use server"

import {get} from "@/app/fetchWrapper";
import {cookies} from "next/headers";

export async function getJokes() {
    const b = await get('jokes');
    const c = await get('auth/status');

    console.log("c", c);
    // console.log("b", b);
    const cookie = await getCookie('whateverToken');
    console.log("cookie", cookie);
    return b;
}

export async function getCookie(name: string): Promise<string | null> {
    const cookieStore = cookies()
    return cookieStore.get(name)?.value ?? null
}

// Usage example:
