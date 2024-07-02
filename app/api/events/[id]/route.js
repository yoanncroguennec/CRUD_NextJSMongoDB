import { NextResponse } from "next/server";
// BDD
import connectMongoDB from "../../../utils/db/mongoDB";
// MODELS
import Events from "../../../utils/db/models/eventModel";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const event = await Events.findOne({ _id: id });
  return NextResponse.json({ event }, { status: 200 });
}

export async function POST(request, { params }) {
  const { id } = params;
  const { title, description, price } = await request.json();
  await connectMongoDB();
  await Events.findByIdAndUpdate(id, { title, description, price });
  return NextResponse.json(
    { message: "Event updated successfully" },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log("DELETE", id);
  await connectMongoDB();
  await Events.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Event deleted successfully" },
    { status: 200 }
  );
}
