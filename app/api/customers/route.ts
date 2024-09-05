import { NextResponse } from "next/server";

const data = [
    {
        "id": "1",
        "date": "01 Jun 2020 17:56 AM",
        "name": "Hamza Shahzad",
        "email": "hamza42@gmail.com",
        "location": "Islamabad",
        "phone": "03332134567"
    },
    {
        "id": "2",
        "date": "01 Jun 2020 17:56 AM",
        "name": "Jessica",
        "email": "jessica@gmail.com",
        "location": "Islamabad",
        "phone": "03332134567"
    },
    {
        "id": "3",
        "date": "01 Jun 2020 17:56 AM",
        "name": "Ishaq Khalil",
        "email": "khalilishaq894@gmail.com",
        "location": "Islamabad",
        "phone": "03332134567"
    },
]

export async function GET() {
    //Replace with your API call
    return NextResponse.json({ data });
}
