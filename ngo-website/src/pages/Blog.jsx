import React from "react";

const blogPosts = [
  {
    title: "NGO Launches New Education Initiative",
    date: "July 25, 2025",
    summary:
      "Our NGO has started a new program to provide free school kits to children in rural areas. Volunteers are welcome to join the initiative.",
  },
  {
    title: "Health Camp Success Story",
    date: "June 10, 2025",
    summary:
      "Over 500 villagers benefited from our recent health camp. Free checkups and medicines were provided, thanks to our generous donors.",
  },
  {
    title: "Women Empowerment Workshop",
    date: "May 18, 2025",
    summary:
      "A skill training workshop for rural women was conducted, helping them start small businesses and become financially independent.",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Blog & News
        </h2>
        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 shadow-md hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300">{post.summary}</p>
            </div>
          ))}
        </div>
        {/* Events Link */}
        <div className="mt-12 text-center">
          <a
            href="/events"
            className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition"
          >
            View Upcoming Events
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;