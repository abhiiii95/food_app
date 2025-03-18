import { connectionURL } from "@/app/lib/db";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request){
let queryParams = request.nextUrl.searchParams;
console.log(queryParams,"test")
console.log(queryParams.get('restaurant'));
let filter ={};
if(queryParams.get("location")){
    let city = queryParams.get("location");
    filter = {address:{$regex:new RegExp(city,'i')}}
}
else if(queryParams.get("resturant")){
    let city = queryParams.get("resturant");
    filter = {name:{$regex:new RegExp(city,'i')}}
}
await mongoose.connect(connectionURL);
let result= await resturantModel.find(filter)
return NextResponse.json({success:true,result})
}