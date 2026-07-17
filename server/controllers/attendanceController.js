const mysqlPool = require('../config/mysql');

// Add or Update Attendance
exports.markAttendance = async (req, res) => {
    const { student_id, date, status } = req.body;

    try {
        // We use an INSERT ... ON DUPLICATE KEY UPDATE query
        // This will insert a new record or update the status if the student
        // already has an attendance record for that specific date.
        const query = `
            INSERT INTO attendance (student_id, date, status) 
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE status = VALUES(status)
        `;
        
        const [result] = await mysqlPool.execute(query, [student_id, date, status]);
        
        res.status(200).json({
            message: 'Attendance recorded successfully',
            insertedId: result.insertId,
            affectedRows: result.affectedRows
        });
    } catch (error) {
        console.error('Error updating attendance in MySQL:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get Attendance for a specific date
exports.getAttendanceByDate = async (req, res) => {
    const { date } = req.params;

    try {
        const query = 'SELECT * FROM attendance WHERE date = ?';
        const [rows] = await mysqlPool.execute(query, [date]);
        
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching attendance:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};