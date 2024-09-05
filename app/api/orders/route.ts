import { NextResponse } from "next/server";

const data = [
    {
        "id": "1",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "2",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "3",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "4",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "5",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "6",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
    {
        "id": "7",
        "idNumber": "INV-793185",
        "date": "01 Jun 2020 17:56 AM",
        "customer": "hamza shahzad",
        "status": "cancelled",
        "total": "$10,000"
    },
]

export async function GET() {
    //Replace with your API call
    return NextResponse.json({ data });
}
