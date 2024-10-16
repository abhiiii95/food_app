const { default: mongoose } = require("mongoose");


const resturantSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        address: String,
        fullAddress: String,
        phone: String,
    },
    { timestamps: true }
)

const resturantModel = mongoose.models.resturants
    || mongoose.model("resturants", resturantSchema);

// module.exports = resturantModel;
export { resturantModel };