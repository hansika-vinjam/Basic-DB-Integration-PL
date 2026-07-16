const express = require('express');
const router = express.Router();
const { getStudents, updateAttendance } = require('../controllers/studentController');

// Route to get all students
router.get('/', getStudents);

// Route to update a student's attendance
router.put('/:id/attendance', updateAttendance);

module.exports = router;
