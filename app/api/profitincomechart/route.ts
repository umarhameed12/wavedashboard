import { NextResponse } from "next/server";

export async function GET() {
    //Replace with your API call
    return NextResponse.json({
        data: [100, 85, 101, 98, 87, 105, 91, 114, 94],
    });
}