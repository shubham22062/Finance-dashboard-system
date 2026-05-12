import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Landing() {
  const { dark, setDark } = useTheme();

  const Navbar: React.FC = () => (
    <nav className="flex justify-between items-center px-4 md:px-10 h-20 
      bg-gray-50 dark:bg-black 
      border-b border-gray-200 dark:border-gray-900
      fixed top-0 left-0 w-full z-50">

      <div className="font-bold text-black dark:text-white">
        Capital Dash
      </div>

      <div className="flex items-center gap-3 md:gap-4">

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full transition-all duration-300
          hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm7.5-3.75a.75.75 0 0 1 .75.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75-.75ZM4.5 12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1 0-1.5H3.75A.75.75 0 0 1 4.5 12Zm12.03-6.03a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM5.41 17.53a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm12.12 1.06a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM6.47 5.41a.75.75 0 0 1 0 1.06L5.41 7.53A.75.75 0 0 1 4.35 6.47l1.06-1.06a.75.75 0 0 1 1.06 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button>

        <Link to="/signin" className="rounded-3xl border-2 border-gray-300 dark:border-gray-600 
          hover:bg-gray-200 dark:hover:bg-gray-700 
          px-3 py-1 md:px-4 md:py-2 
          text-black dark:text-white">
          Sign In
        </Link>

        <Link to="/signup" className="rounded-3xl border-2 p-2 md:p-3 
          bg-green-400 border-green-400 text-white font-bold 
          hover:bg-green-500">
          Get Started
        </Link>
      </div>
    </nav>
  );

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white">

      <Navbar />

      {/* HERO */}
      <div className="pt-28 text-center px-4">
        <p className="rounded-full bg-gray-900 dark:bg-gray-800 inline-block px-6 py-2 text-white border border-gray-700">
          Finance Management Reimagined
        </p>

        <h1 className="font-bold mt-6 text-3xl md:text-5xl lg:text-6xl">
          Powerful Finance Dashboard for
        </h1>

        <h2 className="text-green-400 font-bold text-3xl md:text-5xl lg:text-6xl">
          Modern Teams
        </h2>

        <p className="mt-6 mb-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A unified financial control center that helps teams track expenses, monitor growth, and make data-driven decisions in real time.
        </p>

        <Link to="/signup" className="font-bold rounded-3xl text-white text-lg bg-green-400 
          hover:bg-green-500 px-6 py-3">
          Start Free Trial
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-6 md:px-16">
        {[
          { title: "500+", subtitle: "Companies Trust Us" },
          { title: "120K+", subtitle: "Monthly Transactions" },
          { title: "$25M+", subtitle: "Assets Tracked" },
          { title: "99.95%", subtitle: "System Reliability" },
        ].map((item, i) => (
          <div key={i} className="rounded-3xl py-8 px-6 border-2 
            border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 
            hover:bg-gray-100 dark:hover:bg-gray-700 
            transition-transform duration-300 hover:scale-105 text-center">
            <p className="font-bold text-3xl text-green-400">{item.title}</p>
            <p className="text-gray-600 dark:text-gray-300">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="bg-gray-100 dark:bg-gray-800 mt-20 py-12 px-6 md:px-16">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Everything You Need</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            A complete toolkit designed to simplify financial operations for teams of all sizes
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
            <div key={i} className="border-2 rounded-xl 
              border-gray-200 dark:border-gray-700 
              bg-white dark:bg-gray-900 
              p-6 transition-transform duration-300 hover:scale-105">
              
              <p className="font-semibold py-2">{feature}</p>

              <p className="text-gray-500 dark:text-gray-300">
                {feature === "Advanced Analytics" && "Deep insights with predictive financial modeling and interactive visual dashboards."}
                {feature === "Role-Based Access" && "Granular permission control ensuring each team member sees only what they need."}
                {feature === "Real-time Dashboard" && "Live updates on transactions, cash flow, and financial performance metrics."}
                {feature === "User Management" && "Easily manage teams, assign roles, and track user activity across the platform."}
                {feature === "Secure & Compliant" && "Enterprise-grade security with encrypted data and compliance-ready architecture."}
                {feature === "Lightning Fast" && "Optimized performance ensuring instant loading and seamless user experience."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ROLES */}
      <div className="text-center mt-20 px-4">
        <h1 className="font-bold text-3xl md:text-4xl">Choose Your Role</h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3">
          Flexible access levels tailored to different responsibilities in your organization
        </p>
      </div>

      <div className="grid gap-6 mt-10 px-6 md:px-16 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            role: "Viewer",
            desc: "Can view dashboards and reports without making changes.",
          },
          {
            role: "Analyst",
            desc: "Can analyze data, generate insights, and export reports.",
          },
          {
            role: "Admin",
            desc: "Full control over users, settings, and financial data.",
          },
        ].map((item, i) => (
          <div key={i} className={`rounded-xl border-2 p-6 transition-transform duration-300 hover:scale-105 
            bg-white dark:bg-gray-800
            ${item.role === "Analyst" ? "border-green-400" : "border-gray-200 dark:border-gray-700"}`}>
            
            <span className="font-bold">{item.role}</span>

            <p className="text-gray-500 dark:text-gray-300 py-4">
              {item.desc}
            </p>

            <p className="before:content-['✔️'] before:mr-1 text-gray-700 dark:text-gray-300">
              {item.role === "Viewer" && "View reports & dashboards"}
              {item.role === "Analyst" && "Export insights & analytics"}
              {item.role === "Admin" && "Manage users & permissions"}
            </p>

            <p className="before:content-['✔️'] before:mr-1 text-gray-700 dark:text-gray-300">
              {item.role === "Viewer" && "Basic access controls"}
              {item.role === "Analyst" && "Advanced data tools"}
              {item.role === "Admin" && "Full system configuration"}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 bg-emerald-50 dark:bg-gray-800 rounded-xl mx-6 md:mx-16 py-10 text-center">
        <h1 className="font-bold text-2xl md:text-3xl">
          Ready to Get Started?
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
          Join modern teams already improving financial efficiency with Capital Dash
        </p>

        <Link to="/signup" className="rounded-2xl text-white bg-emerald-400 py-3 px-6 
          hover:bg-emerald-600 transition">
          Start Your Free Trial
        </Link>

        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
          No credit card required
        </p>
      </div>

      {/* FOOTER */}
      <hr className="mt-10 border-gray-200 dark:border-gray-700" />

      <footer className="mt-20 px-6 md:px-16 bg-white dark:bg-gray-900">
        <h1 className="font-bold">Capital Dash</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Professional finance management platform built for modern organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h1 className="font-bold">Product</h1>
            <span className="block text-gray-500 dark:text-gray-400">Features</span>
            <span className="block text-gray-500 dark:text-gray-400">Pricing</span>
          </div>

          <div>
            <h1 className="font-bold">Company</h1>
            <span className="block text-gray-500 dark:text-gray-400">About</span>
            <span className="block text-gray-500 dark:text-gray-400">Careers</span>
          </div>

          <div>
            <h1 className="font-bold">Resources</h1>
            <span className="block text-gray-500 dark:text-gray-400">Docs</span>
            <span className="block text-gray-500 dark:text-gray-400">Support</span>
          </div>
        </div>

        <hr className="mt-10 border-gray-200 dark:border-gray-700" />

        <p className="text-center text-gray-500 dark:text-gray-400 mt-6 mb-10">
          © 2026 Capital Dash. All rights reserved.
        </p>
      </footer>

    </div>
  );
}