from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
load_dotenv()
import os
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
TO_EMAIL = os.getenv("TO_EMAIL")

app = Flask(__name__)
CORS(app)

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
    except Exception as e:
        print("❌ Failed to send email:", e)

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print(f"📩 New message from {name} ({email}): {message}")

    # Send Email
    send_email(name, email, message)

    return jsonify({"status": "success", "message": "Message received!"}), 200

@app.route("/api/projects", methods=["GET"]) 
def get_projects(): 
    projects = [ { "title": "CloudTraffix", "description": "A cloud-based traffic management system", "link": "https://github.com/Shreyas24150/cloudtraffix-secure-cloud" } ] 
    return jsonify(projects)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
