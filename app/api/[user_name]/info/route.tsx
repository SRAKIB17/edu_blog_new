import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: Request, { params }: { params: { user_name: string } }) {
    return NextResponse.json({ name: params })
}

// export async function GET(request: Request) {
//     const x = fs.readFileSync('/')
//     console.log(x)
//     return new Response(x, {
//         status: 200,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         },
//     });
// }