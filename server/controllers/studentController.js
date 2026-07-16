const Student = require('../models/Student');

// GET /students
// Fetch all students from the database
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error fetching students' });
    }
};

// PUT /students/:id/attendance
// Update attendance for a specific student
const updateAttendance = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Toggle attendance, or use the value passed in request body
        // For simplicity, we just look for 'attendance' in the request body
        if (req.body.attendance !== undefined) {
            student.attendance = req.body.attendance;
        } else {
            // If nothing in body, just toggle it
            student.attendance = !student.attendance;
        }

        const updatedStudent = await student.save();
        res.json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error updating attendance' });
    }
};

module.exports = {
    getStudents,
    updateAttendance
};
