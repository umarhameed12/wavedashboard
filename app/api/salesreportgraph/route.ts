import { NextResponse } from "next/server";

export async function GET() {
    //Replace with your API call
    return NextResponse.json({
        data: {
            profit: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            revenue: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }
    });
}