"use server"

import https from 'https';
import {cookies} from "next/headers";

const baseUrl = process.env.API_URL;

// Create HTTPS agent for development environment
const agent = process.env.NODE_ENV === 'development'
    ? new https.Agent({rejectUnauthorized: false})
    : undefined;

export async function get(url: string) {
    const requestOptions = {
        ...await getBaseRequestOptions('GET'),
        ...(agent && {agent})
    };
    const response = await fetch(baseUrl + url, requestOptions);
    // console.log(response.json());
    return await handleResponse(response);
}

export async function post(url: string, body: {}) {
    const requestOptions = {
        ...await getBaseRequestOptions('POST'),
        body: JSON.stringify(body),
        ...(agent && {agent})
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

export async function put(url: string, body: {}) {
    const requestOptions = {
        ...await getBaseRequestOptions('PUT'),
        body: JSON.stringify(body),
        ...(agent && {agent})
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

export async function del(url: string) {
    const requestOptions = {
        ...await getBaseRequestOptions('DELETE'),
        ...(agent && {agent})
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

export async function getBaseRequestOptions(method: string, headers: HeadersInit = {}): Promise<RequestInit> {
    return Promise.resolve({
        method,
        credentials: 'include', // Important: This enables sending/receiving cookies
        headers: {
            'Authorization': `Bearer ${await getCookie('whateverToken')}`,
            'Content-Type': 'application/json',
            ...headers
        }
    });
}

export async function getCookie(name: string): Promise<string | null> {
    return (await cookies()).get(name)?.value ?? null
}

export async function handleResponse(response: Response) {
    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch {
        data = text;
    }

    if (response.ok) {
        return data || response.statusText;
    } else {
        // Enhanced error handling
        const error = {
            status: response.status,
            message: typeof data === 'string' ? data :
                data.detail || data.message || response.statusText,
            details: typeof data === 'object' ? data : undefined
        };
        return {error};
    }
}