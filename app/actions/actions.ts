"use server"

import {get, getCookie} from "@/app/fetchWrapper";
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


// Usage example:
