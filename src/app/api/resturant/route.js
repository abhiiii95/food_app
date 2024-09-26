import { connectionURL } from "@/app/lib/db";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
    await mongoose.connect(connectionURL)


    const data = await resturantModel.find()
    return NextResponse.json({
        name: "Himani",
        data
    })
}

