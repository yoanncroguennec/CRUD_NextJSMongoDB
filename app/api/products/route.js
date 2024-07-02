import connectMongoDB from "@/app/utils/db/mongoDB";
import Products from "@/app/utils/db/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Products.find();
  return NextResponse.json({ products }, { status: 200 });
}

export async function POST(request) {
  const { title, description, price, text } = await request.json();
  await connectMongoDB();
  await Products.create({ title, description, price, text });
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 200 }
  );
}
