from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # allow requests from React frontend

# -----------------------
# API ROUTES
# -----------------------

# Example: GET /api/projects
@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = [
        {
            "title": "CloudTraffix",
            "description": "A cloud-based traffic management system",
            "link": "https://github.com/yourusername/cloudtraffix"
        }
    ]
    return jsonify(projects)


# Example: POST /api/contact
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    # For now, just print to console (later you can store in DB or send email)
    print(f"📩 New message from {name} ({email}): {message}")

    return jsonify({"status": "success", "message": "Message received!"}), 200


# -----------------------
# ENTRY POINT
# -----------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
