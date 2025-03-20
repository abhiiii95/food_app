import { connectionURL } from "@/app/lib/db";
import { Food } from "@/app/lib/foodsModel";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request, content) {

    await mongoose.connect(connectionURL);

    const id = content.params.id;
    const details = await resturantModel.findOne({ _id: id });
    const foodItems = await Food.find({ resto_id: id });
    return NextResponse.json({ status: true, details ,foodItems})
}