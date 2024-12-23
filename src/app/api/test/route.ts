
export async function POST(req: Request) {
    console.log(req);

    return new Response("Success", {
        status: 200
    });
}