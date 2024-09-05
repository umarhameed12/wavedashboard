import { NextResponse } from "next/server";

export async function GET() {
    //Replace with your API call
    return NextResponse.json({
        categories: [
            { name: "Fashion", percent: 40 },
            { name: "Shoes", percent: 24 },
            { name: "Apparel", percent: 16 },
            {name: "Hoodies", percent:20}
        ]
    });
}