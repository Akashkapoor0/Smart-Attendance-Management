import express from "express";
import Student from "../models/student.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

// 🔐 Admin Only - Add Student
router.post("/add", adminAuth, async (req, res) => {
  try {
    const { name, rollNumber, email, class: studentClass, section } = req.body;

    const existingStudent = await Student.findOne({
      $or: [{ rollNumber }, { email }]
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const student = new Student({
      name,
      rollNumber,
      email,
      class: studentClass,
      section
    });

    await student.save();

    res.status(201).json({
      message: "Student added successfully ✅",
      student
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;