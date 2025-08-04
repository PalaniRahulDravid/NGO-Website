import React from "react";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImg})`,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl text-white">
          Empowering Communities, Changing Lives
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-300">
          Join us in making the world a better place through education, healthcare, and support.
        </p>
        <a
          href="#mission"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition"
        >
          Get Involved
        </a>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-24 animate-bounce">
          <a
            href="#mission"
            className="text-gray-300 text-sm opacity-70 hover:opacity-100"
          >
            ↓ Scroll Down
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            We are committed to serving underprivileged communities by providing access to education,
            healthcare, women empowerment, and essential resources for a sustainable future.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-400 mb-2">🎓 Education</h3>
              <p className="text-gray-300">
                We provide school kits, scholarships, and tuition classes to underprivileged children.
              </p>
            </div>
            <div className="bg-gray-950 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-400 mb-2">🏥 Healthcare</h3>
              <p className="text-gray-300">
                Regular health checkups, blood donation camps, and health awareness programs.
              </p>
            </div>
            <div className="bg-gray-950 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-400 mb-2">👩‍🦰 Women Empowerment</h3>
              <p className="text-gray-300">
                Skill training, self-help groups, and financial support for rural women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-green-500 bg-gray-950 rounded">
              <h3 className="text-4xl font-bold text-green-400">10K+</h3>
              <p className="mt-2 text-gray-300">Children Educated</p>
            </div>
            <div className="p-6 border-l-4 border-green-500 bg-gray-950 rounded">
              <h3 className="text-4xl font-bold text-green-400">500+</h3>
              <p className="mt-2 text-gray-300">Health Camps Conducted</p>
            </div>
            <div className="p-6 border-l-4 border-green-500 bg-gray-950 rounded">
              <h3 className="text-4xl font-bold text-green-400">1,000+</h3>
              <p className="mt-2 text-gray-300">Women Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section*/}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Make a Difference?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Become a volunteer and be part of real change on the ground.
          </p>
          <a
            href="/volunteer"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition"
          >
            Join Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;