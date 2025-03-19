// import { connectionURL } from "@/app/lib/db";
// import { resturantModel } from "@/app/lib/resturantModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(request){
// // let queryParams = request.nextUrl.searchParams;

// // let filter ={};
// // if(queryParams.get("location")){
// //     let address = queryParams.get("location");
// //     filter = {address:{$regex:new RegExp(address,'i')}}
// // }
// // else if(queryParams.get("resturant")){
// //     let name = queryParams.get("resturant");
// //     filter = {name:{$regex:new RegExp(name,'i')}}
// // }
// await mongoose.connect(connectionURL);
// let result= await resturantModel.find({})
// return NextResponse.json({success:true,result})
// }

import { connectionURL } from "@/app/lib/db";
import { resturantModel } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // Check if MongoDB is already connected
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Already connected to MongoDB");
        } else {
            await mongoose.connect(connectionURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("✅ Connected to MongoDB successfully");
        }

        // Fetch data from the database
        let result = await resturantModel.find({});
        
        return NextResponse.json({ success: true, result });

    } catch (error) {
        console.error("❌ Database connection error:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
