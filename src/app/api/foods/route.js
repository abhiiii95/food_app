import { connectionURL } from "@/app/lib/db";
import {Food} from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionURL);
    const food = new Food(payload);
    const result = await food.save();
    return NextResponse.json({result,success:true})
}