// fetchWrapperHelpers.ts
const baseUrl = process.env.API_URL;

// Helper function to get common request options including credentials
// export function getBaseRequestOptions(method: string, headers: HeadersInit = {}): RequestInit {
//     return {
//         method,
//         credentials: 'include', // Important: This enables sending/receiving cookies
//         headers: {
//             'Content-Type': 'application/json',
//             ...headers
//         }
//     };
// }
//
// // We can simplify getHeaders since cookies are handled automatically
// export function getHeaders() {
//     return {
//         'Content-Type': 'application/json'
//     };
// }
//
// export async function handleResponse(response: Response) {
//     const text = await response.text();
//     let data;
//     try {
//         data = JSON.parse(text);
//     } catch {
//         data = text;
//     }
//
//     if (response.ok) {
//         return data || response.statusText;
//     } else {
//         // Enhanced error handling
//         const error = {
//             status: response.status,
//             message: typeof data === 'string' ? data :
//                 data.detail || data.message || response.statusText,
//             details: typeof data === 'object' ? data : undefined
//         };
//         return { error };
//     }
// }