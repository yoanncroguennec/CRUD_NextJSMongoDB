import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    desc: {
      type: String,
      required: [true, "Desc is required."],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dateOfEvent: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Events = mongoose.models.Events || mongoose.model("Events", eventSchema);

export default Events;
