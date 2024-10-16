import { connectionURL } from "@/app/lib/db";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        await mongoose.connect(connectionURL)


        const data = await resturantModel.find()
        return NextResponse.json({
            name: "Himani",
            data
        })
    }
    catch (error) {

        console.log("Error: ", error)
        return NextResponse.json({
            status: false,
            error: "Error in fetching Data",
            errorMessage: error.message
        }, 500)
    }
}

export async function POST(req) {

    try {
        const payload = await req.json();
        console.log("payload:", payload);

        await mongoose.connect(connectionURL)

        const result = await resturantModel.create(payload);
        return NextResponse.json({
            status: true,
            name: "Himani",
            result,
        });

    } catch (error) {
        console.error("Error adding data:", error);
        return NextResponse.json({
            status: false,
            message: "Error adding data",
            error: error.message,
        }).status(500); // Set status using the method
    }

}