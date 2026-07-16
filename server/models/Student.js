const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: String,
        required: true,
    },
    department: { // The prompt mentions department or branch, let's use department for schema
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    attendance: {
        type: Boolean,
        default: false,
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
