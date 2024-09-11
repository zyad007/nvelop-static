export const dynamic = 'force-static'

export async function POST(request: Request) {

    const content = await request.json()
    
    return Response.json({ content })
}


export async function GET(request: Request) {

    return Response.json({ content: 'a7a' })
}