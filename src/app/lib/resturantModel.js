const { default: mongoose } = require("mongoose");


const resturantSchema = new mongoose.Schema({
    name: String
})

export const resturantModel = mongoose.models.resturants
    || mongoose.model("Resturant", resturantSchema);