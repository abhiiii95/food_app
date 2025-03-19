import { connectionURL } from "@/app/lib/db";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionURL);
    let result = await resturantModel.find();
    result = result.map((item)=>item.address.toUpperCase());
    result = [...new Set(result)]
    return NextResponse.json({success:true,result:result})
}