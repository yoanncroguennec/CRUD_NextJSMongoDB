import { NextResponse } from "next/server";
// BDD
import connectMongoDB from "../../../utils/db/models/mongoDB";
// MODELS
import Products from "../../../utils/db/models/products";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Products.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}

export async function POST(request, { params }) {
  const { id } = params;
  const { title, description, price } = await request.json();
  await connectMongoDB();
  await Products.findByIdAndUpdate(id, { title, description, price });
  return NextResponse.json(
    { message: "Product updated successfully" },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log("DELETE", id);
  await connectMongoDB();
  await Products.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Product deleted successfully" },
    { status: 200 }
  );
}
