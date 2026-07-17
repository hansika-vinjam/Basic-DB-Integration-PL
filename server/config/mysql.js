const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool to handle multiple connections efficiently
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'attendance_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;