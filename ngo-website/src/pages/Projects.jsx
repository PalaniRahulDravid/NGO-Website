import React from "react";

const projects = [
  {
    title: "School Kit Distribution",
    status: "Ongoing",
    description:
      "Providing school kits and scholarships to underprivileged children in rural areas.",
  },
  {
    title: "Health Awareness Camps",
    status: "Completed",
    description:
      "Organized free health checkups and blood donation camps for local communities.",
  },
  {
    title: "Women Empowerment Program",
    status: "Ongoing",
    description:
      "Skill training and self-help group formation for rural women to promote financial independence.",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Our Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 shadow-md hover:shadow-green-500/60 transition"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {project.title}
              </h3>
              <span
                className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === "Ongoing"
                    ? "bg-green-700 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {project.status}
              </span>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;