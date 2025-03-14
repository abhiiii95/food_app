const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img_path: String,
    description: String,
    resto_id: { type: mongoose.Schema.Types.ObjectId, ref: "resturantModel" } // Added ref for better relation
});

// Export or create model if not exists
const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

module.exports = Food;
