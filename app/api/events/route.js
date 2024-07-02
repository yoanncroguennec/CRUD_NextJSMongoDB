import { NextResponse } from "next/server";
// BDD
import connectMongoDB from "../../utils/db/mongoDB";
// MODELS
import Events from "../../utils/db/models/eventModel";

export async function GET() {
  await connectMongoDB();
  const events = await Events.find();
  return NextResponse.json({ events }, { status: 200 });
}

export async function POST(request) {
  const { title, desc, completed, dateOfEvent } = await request.json();
  await connectMongoDB();
  await Events.create({ title, desc, completed, dateOfEvent });
  return NextResponse.json(
    { message: "Event created successfully" },
    { status: 200 }
  );
}
