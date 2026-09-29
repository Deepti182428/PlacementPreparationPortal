# PrepPath – Placement Preparation Portal

A web-based Placement Preparation Portal developed using Node.js, Express.js, MySQL, EJS, Bootstrap, and MVC Architecture. The application helps students prepare for aptitude tests through secure authentication, random MCQ tests, score calculation, and performance analysis.

# Problem Statement

Students preparing for campus placements require a platform to practice aptitude questions and monitor their performance. This project provides a secure and user-friendly web application where students can register, log in, attempt aptitude tests, view scores, and analyze their progress using graphical reports.

# Features

- Student Registration
- Student Login & Logout
- Secure Password Encryption (bcrypt)
- Session Authentication
- Random Aptitude MCQ Test
- Automatic Score Calculation
- Result Storage in MySQL
- Performance Analysis
- Progress Graph using Chart.js

# Output Screenshots

## 1. Home Page
[Home Page](home.png)

## 2. Student Registration
[Student Registration](Register.png)

## 3. Student Login
[Student Login](Login.png)

## 4. Student Dashboard
[Dashboard](Dashboard.png)

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- bcrypt
- express-session

## Charts

- Chart.js

## Architecture

- MVC (Model-View-Controller)

---

# AI Tools Used

- ChatGPT (OpenAI)
- GitHub Copilot (VS Code)

---

# Important AI Prompts / Usage

The following AI prompts were used during project development:

- Generate a complete Placement Preparation Portal using Node.js, Express.js, MySQL, Bootstrap 5, and EJS with MVC architecture.
- Create all project folders and files automatically.
- Connect frontend, backend, and MySQL database.
- Implement secure authentication using bcrypt and express-session.
- Generate SQL database with sample data.
- Create random aptitude question generation.
- Calculate scores and save results in MySQL.
- Generate performance analysis using Chart.js.
- Debug MySQL connection and Express.js errors.
- Improve UI using Bootstrap 5.

---

# Project Structure

```text
PlacementPreparationPortal
│
├── app.js
├── package.json
├── .env
├── README.md
│
├── controllers
├── database
├── middleware
├── models
├── public
│   ├── css
│   ├── js
│   └── images
├── routes
├── screenshots
│   ├── home.png
│   ├── register.png
│   ├── login.png
│   └── dashboard.png
├── sql
└── views
```

---

# Instructions to Run the Project

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/PlacementPreparationPortal.git
```

---

## Step 2: Open the Project Folder

```bash
cd PlacementPreparationPortal
```

---

## Step 3: Install Required Packages

```bash
npm install
```

---

## Step 4: Create MySQL Database

```sql
CREATE DATABASE placement_portal;
```

Import the SQL file:

```
sql/placement_portal.sql
```

---

## Step 5: Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=

DB_NAME=placement_portal

SESSION_SECRET=your_secret_key

## Step 6: Start the Application

```bash
npm start
```
or
```bash
node app.js

## Step 7: Open in Browser
http://localhost:3000

Academic Mini Project

PrepPath – Placement Preparation Portal
