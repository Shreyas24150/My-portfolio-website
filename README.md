# 🌐 Personal Portfolio Website (Full-Stack DevOps Project)

A **modern, responsive personal portfolio website** built with **React (Vite)** for the frontend and **Flask (Python)** for the backend — fully **containerized with Docker**, **deployed via Render & Netlify**, and integrated with a **contact form email delivery system**.

---

## 🚀 Project Overview

This project showcases:
- **frontend skills** with React, Tailwind CSS, and responsive design.
- **backend knowledge** with Flask REST API and email integration.
- **DevOps expertise** with Docker, Render, and Netlify deployment.

> 🧠 Designed as a real-world DevOps project — combining code, CI/CD, infrastructure, and cloud hosting.

---

## 🧩 Tech Stack
```
| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite), Axios, Tailwind CSS |
| **Backend** | Python Flask, Flask-CORS, Gunicorn |
| **Email Service** | Gmail SMTP (via Flask) |
| **Infrastructure** | Docker, Docker Compose |
| **Hosting** | Netlify (frontend), Render (backend) |
| **Version Control** | Git & GitHub |
| **Optional** | Terraform, AWS EC2, Nginx |
```
---

## ⚙️ Features

✅ Responsive personal portfolio UI  
✅ Projects displayed dynamically via API  
✅ Contact form that sends messages to email  
✅ Flask backend with RESTful APIs  
✅ Dockerized frontend & backend  
✅ Deployed using free-tier cloud services  
✅ Secure CORS configuration  
✅ Environment variable management for secrets  

---

## 📂 Folder Structure
```
My-portfolio-website/
│
├── frontend/ # React + Vite app
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── About.jsx
│ │ │ ├── Skills.jsx
│ │ │ ├── Projects.jsx
│ │ │ └── Contact.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── Dockerfile
│
├── backend/ # Flask backend API
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
│
├──.github/workflows/ # Optional CI/CD pipeline
|  ├──docker-build-push.yml
|
├── docker-compose.yml # Optional for local development
├── .env # Environment variables (not committed)
└── README.md
```

---

## 🐳 Docker Setup (Local Development)

### Build and run containers
```
docker compose build
docker compose up
```

**App will be available at:**
```
Frontend → http://localhost:5173
Backend → http://localhost:5000
```

### 🧠 Environment Variables
Create a .env file in your backend folder:
```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
TO_EMAIL=yourgmail@gmail.com
```
**Note**
Use a Gmail App Password (not your real Gmail password).
Go to Google Account → Security → App Passwords to generate one.

---

## 🚀 Deployment

### 🖥 Frontend – Netlify

1. Go to Netlify

2. Import your GitHub frontend repo

3. Set build command:
```
npm run duild
```

4. Publish directory:
```
dist
```

5. Add Environment Variable in Netlify:
```
VITE_API_URL = https://your-backend.onrender.com
```

### ⚙️ Backend – Render

1. Go to Render

2. Create New Web Service

3. Connect your backend repo

4. Set:
```
Build Command: pip install -r requirements.txt
Start Command: gunicorn app:app
```

5. Add Environment Variables:
```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
TO_EMAIL=yourgmail@gmail.com
```

6. Deploy 🚀

---

## 🔐 CORS Configuration (Flask)
In your app.py:
```
CORS(app, resources={r"/api/*": {"origins": [
    "https://sparkling-jelly-b85487.netlify.app",
    "http://localhost:5173"
]}})
```

---

## 🧰 CI/CD with GitHub Actions → EC2
I have also included pipeline to deploy this on ec2. This pipeline automates deployment from GitHub to an AWS EC2 instance every time you push to main

### 🧾 Required Secrets in GitHub
Add these under
GitHub → Repo → Settings → Secrets → Actions
```
| Secret Name     | Description                  |
| --------------- | ---------------------------- |
| `EC2_PUBLIC_IP` | Your EC2 instance public IP  |
| `EC2_SSH_KEY`   | Your EC2 private key content |
| `EC2_USER`      | (optional) Default: `ubuntu` |
```

---
## 📬 Contact Form Flow

```
User fills the contact form on the frontend.
React sends a POST request to /api/contact.
Flask receives the message and sends an email to your inbox.
A success alert is shown to the user.
```

---

## 🧠 Learning Outcomes

```
React component architecture
Flask API creation and deployment
Docker image creation and container orchestration
CORS configuration and cross-origin communication
Secure environment variable handling
Full-stack CI/CD deployment to free cloud services
GitHub Actions CI/CD automation
Cloud DevOps workflow
```

---

## 📸 Demo

🌐 Live Frontend: https://sparkling-jelly-b85487.netlify.app/

---

## 🧰 Tools Used
```
VS Code
Git & GitHub
Netlify CLI (optional)
Render Dashboard
Docker Desktop
Git actions
AWS
```

---

## ⭐ Show Your Support

If you found this project useful, please give it a ⭐ on GitHub - it helps a lot!

---