"use server"

import { getBaseRequestOptions, handleResponse } from './fetchWrapperHelper';
import https from 'https';

const baseUrl = process.env.API_URL;

// Create HTTPS agent for development environment
const agent = process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: true })
    : undefined;

export async function get(url: string) {
    const requestOptions = {
        ...getBaseRequestOptions('GET'),
        ...(agent && { agent })
    };
    const response = await fetch(baseUrl + url, requestOptions);
    // console.log(response.json());
    return await handleResponse(response);
}

export async function post(url: string, body: {}) {
    const requestOptions = {
        ...getBaseRequestOptions('POST'),
        body: JSON.stringify(body),
        ...(agent && { agent })
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

export async function put(url: string, body: {}) {
    const requestOptions = {
        ...getBaseRequestOptions('PUT'),
        body: JSON.stringify(body),
        ...(agent && { agent })
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}

export async function del(url: string) {
    const requestOptions = {
        ...getBaseRequestOptions('DELETE'),
        ...(agent && { agent })
    };
    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}