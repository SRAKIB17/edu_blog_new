import { NextResponse, NextRequest } from 'next/server';
import { ImageResponse } from 'next/server';
export const runtime = 'edge';

export async function GET(req: Request, { params }: { params: { user_name: string } }) {
    const user_name = (params.user_name)?.[1].toUpperCase()

    function getRandomColor() {

        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    color: 'white',
                    background: getRandomColor(),
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100000000000000px'
                }}
            >
                {user_name}
            </div>
        ),
        {
            width: 250,
            height: 250,
        },
    );
}
// export async function GET(req: Request, { params }: { params: { user_name: string } }) {
//     return NextResponse.json({ name: params })
// }

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