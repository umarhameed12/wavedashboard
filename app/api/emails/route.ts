import { NextResponse } from "next/server";

const data = [
    {
        "id": "1",
        "from": "UptechSol",
        "message": "Dummy Message",
        "date": "01 Jun 2020 17:56 AM"
    },
    {
        "id": "2",
        "from": "UptechSol",
        "message": "Dummy Message",
        "date": "01 Jun 2020 17:56 AM"
    },
    {
        "id": "3",
        "from": "UptechSol",
        "message": "Dummy Message",
        "date": "01 Jun 2020 17:56 AM"
    },
]

export async function GET() {
    //Replace with your API call
    return NextResponse.json({ data });
}
