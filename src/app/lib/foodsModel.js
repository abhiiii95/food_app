
const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img_path: String,
    description: String,
    resto_id: { type: mongoose.Schema.Types.ObjectId, ref: "resturantModel" }
});

// Check if model exists, otherwise create it
const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

  // ✅ Default export
export { Food };

