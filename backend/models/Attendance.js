import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AttendanceSession",
    required: true,
  }
}, { timestamps: true });

attendanceSchema.index({ student: 1, session: 1 }, { unique: true });

export default mongoose.model("Attendance", attendanceSchema);