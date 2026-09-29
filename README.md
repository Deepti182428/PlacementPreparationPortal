# Placement Preparation Portal

An Express, EJS, Bootstrap, MySQL and bcrypt portal for student aptitude practice. It includes registration/login, randomized MCQ tests, saved results, history, summary statistics and a Chart.js progress graph.

## Run locally

1. Install Node.js and MySQL.
2. Run `npm install`.
3. Create the database by importing `sql/placement_portal.sql` in MySQL Workbench, or run `mysql -u root -p < sql/placement_portal.sql`.
4. Copy the supplied `.env` values and set your MySQL password if needed.
5. Run `npm start`.
6. Open `http://localhost:3000`.

Register a student, log in, start a test, submit it, and open Performance to verify history and the graph. The app uses MySQL for students, questions, and test results.
