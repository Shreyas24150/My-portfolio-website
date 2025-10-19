import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <div className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name}
          onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <input type="email" name="email" placeholder="Email" value={formData.email}
          onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <textarea name="message" placeholder="Message" value={formData.message}
          onChange={handleChange} rows="5" className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <button type="submit" className="bg-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-500">Send</button>
      </form>
    </div>
  );
}
