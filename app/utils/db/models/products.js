import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    text: String,
    date: String
  },
  { timestamps: true }
);

const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default Products;
