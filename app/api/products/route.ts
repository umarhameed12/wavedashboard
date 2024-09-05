import { NextResponse } from "next/server";

const data = [
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",

    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
    {
        "id": "1",
        "idNumber": "INV-793185",
        "category": "Wears",
        "productname": "Nike Shoes",
        "quantity": "132",
        "price": "$10,000",
        "inventory":"500",
    },
]

export async function GET() {
    //Replace with your API call
    return NextResponse.json({ data });
}
