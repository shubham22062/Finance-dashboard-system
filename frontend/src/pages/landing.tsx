import React from "react";

export default function Landing() {
  const Navbar = () => (
    <nav className="flex justify-between items-center px-4 md:px-10 h-20 bg-gray-50 border-b border-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="font-bold">Capital Dash</div>
      <div className="flex gap-2 md:gap-4">
        <button className="rounded-3xl border-2 border-gray-300 hover:bg-gray-400 px-3 py-1 md:px-4 md:py-2">
          Sign In
        </button>
        <button className="rounded-3xl border-2 p-2 md:p-3 bg-green-400 border-green-400 text-white font-bold hover:bg-green-500">
          Get Started
        </button>
      </div>
    </nav>
  );

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <div className="pt-28 text-center px-4">
        <p className="rounded-full bg-gray-950 inline-block px-6 py-2 text-white border border-gray-900">
          Finance Management Reimagined
        </p>

        <h1 className="font-bold mt-6 text-3xl md:text-5xl lg:text-6xl">
          Powerful Finance Dashboard for
        </h1>
        <h2 className="text-green-400 font-bold text-3xl md:text-5xl lg:text-6xl">
          Modern Teams
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          Streamline your financial operations with advanced analytics,
          role-based access control, and real-time insights.
        </p>

        <button className="font-bold rounded-3xl text-white text-lg bg-green-400 border-green-400 mt-8 hover:bg-green-500 px-6 py-3">
          Start Free Trial
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-6 md:px-16">
        {[
          { title: "100+", subtitle: "Active Users" },
          { title: "50K+", subtitle: "Transactions" },
          { title: "$10M+", subtitle: "Managed" },
          { title: "99.9%", subtitle: "Uptime" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl py-8 px-6 border-2 border-gray-300 hover:bg-gray-200 transition-transform duration-300 hover:scale-105 text-center"
          >
            <p className="font-bold text-3xl text-green-300">
              {item.title}
            </p>
            <p className="text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="bg-gray-100 mt-20 py-12 px-6 md:px-16">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Everything You Need</h1>
          <p className="text-lg text-gray-400">
            Comprehensive features to manage your finances effectively
          </p>
        </div>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Advanced Analytics",
            "Role-Based Access",
            "Real-time Dashboard",
            "User Management",
            "Secure & Compliant",
            "Lightning Fast",
          ].map((feature, i) => (
            <div
              key={i}
              className="border-2 rounded-xl border-gray-300 bg-white p-6 transition-transform duration-300 hover:scale-105"
            >
              <p className="font-semibold py-2">{feature}</p>
              <p className="text-gray-500">
                High-quality feature description goes here.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ROLES */}
      <div className="text-center mt-20 px-4">
        <h1 className="font-bold text-3xl md:text-4xl">
          Choose Your Role
        </h1>
        <p className="text-gray-500 mt-3">
          Flexible access levels for every team member
        </p>
      </div>

      <div className="grid gap-6 mt-10 px-6 md:px-16 sm:grid-cols-2 lg:grid-cols-3">
        {["Viewer", "Analyst", "Admin"].map((role, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 ${
              role === "Analyst"
                ? "border-green-400"
                : "border-gray-300"
            } transition-transform duration-300 hover:scale-105 p-6`}
          >
            <span className="font-bold">{role}</span>
            <p className="text-gray-500 py-4">
              Role description goes here
            </p>
            <p className="before:content-['✔️'] before:mr-1">
              Feature 1
            </p>
            <p className="before:content-['✔️'] before:mr-1">
              Feature 2
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 bg-emerald-50 rounded-xl mx-6 md:mx-16 py-10 text-center">
        <h1 className="font-bold text-2xl md:text-3xl">
          Ready to Get Started?
        </h1>
        <p className="text-gray-500 mt-2">
          Join hundreds of teams managing finances
        </p>

        <button className="rounded-2xl text-white bg-emerald-400 py-3 px-6 mt-6 transition-transform duration-300 hover:scale-105 hover:bg-emerald-700">
          Start Your Free Trial
        </button>

        <p className="text-sm text-gray-500 mt-2">
          No credit card required
        </p>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 px-6 md:px-16">
        <h1 className="font-bold">Capital Dash</h1>
        <p className="text-sm text-gray-500">
          Professional finance management platform
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h1 className="font-bold">Product</h1>
            <span className="block text-gray-500">Features</span>
            <span className="block text-gray-500">Pricing</span>
          </div>

          <div>
            <h1 className="font-bold">Company</h1>
            <span className="block text-gray-500">About</span>
            <span className="block text-gray-500">Careers</span>
          </div>

          <div>
            <h1 className="font-bold">Resources</h1>
            <span className="block text-gray-500">Docs</span>
            <span className="block text-gray-500">Support</span>
          </div>
        </div>

        <hr className="mt-10" />

        <p className="text-center text-gray-500 mt-6 mb-10">
          © 2026 FinanceDash. All rights reserved.
        </p>
      </footer>
    </div>
  );
}