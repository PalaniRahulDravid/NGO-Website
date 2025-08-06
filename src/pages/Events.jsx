import React from "react";

const events = [
  {
    title: "Blood Donation Camp",
    date: "August 20, 2025",
    location: "Community Hall, Sector 12",
    description:
      "Join us for our annual blood donation camp. Free health checkups and refreshments for all donors.",
  },
  {
    title: "Women Empowerment Workshop",
    date: "September 5, 2025",
    location: "Village Center, Rampur",
    description:
      "Skill training and self-help group formation for rural women. Volunteers needed for coordination.",
  },
  {
    title: "School Kit Distribution",
    date: "October 10, 2025",
    location: "Govt. Primary School, Lakshmi Nagar",
    description:
      "Distribution of free school kits to underprivileged children. Support us by donating supplies.",
  },
];

function Events() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Upcoming Events
        </h2>
        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 shadow-md hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                <span className="font-semibold text-green-300">Date:</span> {event.date}
              </p>
              <p className="text-gray-400 text-sm mb-2">
                <span className="font-semibold text-green-300">Location:</span> {event.location}
              </p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;