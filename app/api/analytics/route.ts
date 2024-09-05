import { NextResponse } from "next/server";

export async function GET() {
    //Replace with your API call
    return NextResponse.json({
        data: {
            totalBalance: 287612,
            fiat: 204917,
            sales: 95,
            totalProfit: 16842,
            newCustomers: 872,
            income: 49114,
            expenses: 26816
        }
    });
}