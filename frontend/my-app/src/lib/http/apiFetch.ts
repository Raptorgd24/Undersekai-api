import cookie from "cookie"

export async function apiFetch (url: string, method: string, body?: string) {
    
    const headers: {[x: string]: string} = {}

    if (body) {
        headers["Content-Type"] = "application/json"
    }

    const parsedCookies = cookie.parse(document.cookie)

    if (parsedCookies.token) {
        headers["Authorization"] = `Bearer ${parsedCookies.token}`
    }
    
    const request = await fetch(url, {
        method,
        headers,
        body
    })

    return await request.json()
}