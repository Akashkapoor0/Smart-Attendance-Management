import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: (value) => value.replace(/\s+/g, " ").trim()
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
  },
  password: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    trim: true
  },
  class: {
    type: String,
    required: true,
    trim: true
  },
  section: {
    type: String,
    trim: true
  }
}, { timestamps: true });

export default mongoose.model("Teacher", teacherSchema);