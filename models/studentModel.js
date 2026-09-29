const db=require('../database/db');
exports.findByEmail=async email=>{const [rows]=await db.execute('SELECT * FROM students WHERE email=?',[email]);return rows[0]};
exports.create=async data=>{const [r]=await db.execute('INSERT INTO students (full_name,roll_number,department,email,mobile,password_hash) VALUES (?,?,?,?,?,?)',data);return r.insertId};
exports.getById=async id=>{const [r]=await db.execute('SELECT id,full_name,roll_number,department,email,mobile FROM students WHERE id=?',[id]);return r[0]};
