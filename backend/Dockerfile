# Use official Python image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source
COPY . .

# Expose port
EXPOSE 5000

# Run with Gunicorn (production server)
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
