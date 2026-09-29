const db=require('../database/db');
exports.questions=async()=>{const [r]=await db.query('SELECT id,question,option_a,option_b,option_c,option_d,correct_answer FROM aptitude_questions ORDER BY RAND() LIMIT 10');return r};
exports.saveResult=async (studentId,total,attempted,correct,wrong,score,percentage)=>{const [r]=await db.execute('INSERT INTO test_results (student_id,total_questions,attempted_questions,correct_answers,wrong_answers,final_score,percentage) VALUES (?,?,?,?,?,?,?)',[studentId,total,attempted,correct,wrong,score,percentage]);return r.insertId};
exports.history=async id=>{const [r]=await db.execute('SELECT * FROM test_results WHERE student_id=? ORDER BY completed_at DESC',[id]);return r};
