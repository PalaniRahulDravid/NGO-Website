import React, { useState } from "react";

function Donate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your generous donation!");
    setForm({ name: "", email: "", amount: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">
          Support Our Mission
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Your donation helps us provide education, healthcare, and empowerment to those in need.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-950 p-6 shadow-lg rounded-lg border border-gray-800"
        >
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Donation Amount (INR)
            </label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              min="1"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Donate Now
          </button>
        </form>
        <div className="mt-10 text-center text-gray-400">
          <h3 className="text-lg font-bold text-green-400 mb-2">Other Ways to Donate</h3>
          <p>
            Bank Transfer: <br />
            <span className="text-green-300">Account Name:</span> NGO Website<br />
            <span className="text-green-300">Account Number:</span> 1234567890<br />
            <span className="text-green-300">IFSC:</span> ABCD0123456<br />
            <span className="text-green-300">Bank Name:</span> State Bank of India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donate;