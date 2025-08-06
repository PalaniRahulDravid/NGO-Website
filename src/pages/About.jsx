import React from "react";

function About() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Who We Are */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed">
          We are a grassroots non-profit organization committed to transforming lives
          through education, healthcare, and community empowerment. Our goal is to bridge
          the gap between privilege and need, and build an inclusive, compassionate society.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-950 py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-black p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-green-400/30 transition">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              A world where every individual has equal access to opportunities,
              healthcare, education, and dignity — regardless of their background.
            </p>
          </div>
          <div className="bg-black p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-green-400/30 transition">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To serve vulnerable communities with sustainable solutions that uplift lives
              and promote long-term social equity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Integrity", desc: "Transparency and honesty in everything we do." },
            { title: "Compassion", desc: "We care deeply for the people and causes we serve." },
            { title: "Empowerment", desc: "Helping communities help themselves." },
            { title: "Sustainability", desc: "Solutions that create long-lasting change." },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:shadow-md hover:shadow-green-500/20 transition"
            >
              <h4 className="text-xl text-green-300 font-semibold mb-2">{val.title}</h4>
              <p className="text-gray-400 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Message */}
      <section className="bg-gray-950 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-6">From Our Founder</h2>
        <div className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg italic">
          "When we started this journey, we had nothing but a deep desire to serve.
          Today, every child educated and every woman empowered reaffirms that together,
          we can build a more just and loving world."
          <br />
          <span className="block mt-4 text-green-400 not-italic font-semibold">
            – Founder, Rahul Dravid
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center border-t border-gray-800">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Join Our Journey</h2>
        <p className="mb-6 text-gray-400">
          Partner with us in building better lives and stronger communities.
        </p>
        <a
          href="/volunteer"
          className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          Become a Volunteer
        </a>
      </section>
    </div>
  );
}

export default About;