import { NextResponse } from "next/server";

const data = [
    {
        "id": "1",
        "description": "Description",
        "status": "Active",
        "total": "230"
    },
    {
        "id": "2",
        "description": "Description",
        "status": "Active",
        "total": "230"
    },
    {
        "id": "3",
        "description": "Description",
        "status": "Active",
        "total": "230"
    },
]

export async function GET() {
    //Replace with your API call
    return NextResponse.json({ data });
}
