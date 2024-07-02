import { NextResponse } from "next/server";
// BDD
import connectMongoDB from "../../utils/db/models/mongoDB";
// MODELS
import Products from "../../utils/db/models/products";

export async function GET() {
  await connectMongoDB();
  const products = await Products.find();
  return NextResponse.json({ products }, { status: 200 });
}

export async function POST(request) {
  const { title, description, price, date, text } = await request.json();
  await connectMongoDB();
  await Products.create({ title, description, price, date, text });
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 200 }
  );
}
