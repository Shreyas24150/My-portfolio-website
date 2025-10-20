from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
TO_EMAIL = os.getenv("TO_EMAIL")

app = Flask(__name__)

# ✅ Correct CORS configuration for Netlify + local dev
CORS(app, resources={r"/api/*": {"origins": [
    "https://sparkling-jelly-b85487.netlify.app",
    "http://localhost:5173"
]}})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'https://sparkling-jelly-b85487.netlify.app')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response


# -------------------------------
# Send Email Function
# -------------------------------
def send_email(name, email, message):
    msg = MIMEMultipart()
    msg["From"] = EMAIL_USER
    msg["To"] = TO_EMAIL
    msg["Subject"] = f"New Portfolio Message from {name}"
    body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.send_message(msg)
        print("✅ Email sent successfully!")
        return True
    except Exception as e:
        print("❌ Failed to send email:", e)
        return False


# -------------------------------
# Routes
# -------------------------------
@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = [{
        "title": "CloudTraffix",
        "description": "A cloud-based traffic management system",
        "link": "https://github.com/Shreyas24150/cloudtraffix-secure-cloud"
    }]
    return jsonify(projects)


@app.route("/api/contact", methods=["POST", "OPTIONS"])
def contact():
    if request.method == "OPTIONS":
        # Handle preflight request
        response = jsonify({"status": "ok"})
        response.headers.add("Access-Control-Allow-Origin", "https://sparkling-jelly-b85487.netlify.app")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
        response.headers.add("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        return response

    try:
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        print(f"📩 New message from {name} ({email}): {message}")

        sent = send_email(name, email, message)
        if not sent:
            return jsonify({"status": "error", "message": "Failed to send email"}), 500

        return jsonify({"status": "success", "message": "Message received!"}), 200

    except Exception as e:
        print("🔥 Error in /api/contact:", e)
        return jsonify({"status": "error", "message": "Internal Server Error"}), 500


# -------------------------------
# Entry Point
# -------------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
