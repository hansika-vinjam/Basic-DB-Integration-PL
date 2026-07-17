// Routes for attendance-related operations (MySQL)

const express = require('express');
const router = express.Router();
const { markAttendance, getAttendanceByDate } = require('../controllers/attendanceController');

router.post('/mark', markAttendance);
router.get('/date/:date', getAttendanceByDate);

module.exports = router;