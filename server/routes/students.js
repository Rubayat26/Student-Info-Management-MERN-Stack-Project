import express from "express";
import { getStudents, createStudent, deleteStudent } from "../controllers/studentInfo.js";
import Student from '../models/studentSchema.js';


const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent)
export default router;