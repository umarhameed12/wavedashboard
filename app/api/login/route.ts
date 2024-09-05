import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body
    const token = "secrettokenfromresponse"
    if (email == "admin@gmail.com" && password == "12345678") {
        return NextResponse.json({ token: token });
    }
    // Place your API call here
    return NextResponse.json({ token: null });
}