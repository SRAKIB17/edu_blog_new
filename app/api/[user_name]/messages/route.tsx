import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: Request, { params }: { params: { user_name: string } }) {
    return NextResponse.json({ name: params })
}
import fs from 'fs'
export async function POST(req: Request, { params }: { params: { user_name: string } }) {
    var file = fs.createWriteStream("SiteObject.webm");
    req.formData().then(r => {
        return r
    }).then(r => {

        file.write(r.values().next().value)

        r.forEach(x => {
            console.log(x)
        })
    })
    // file.write((await req.arrayBuffer()))
    return NextResponse.json({ name: "await req.json()" })
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