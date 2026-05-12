import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Cards from "../components/Cards";
import { useState } from "react";
import Overview from "../components/Overview";
import Trends from "../components/Trends";
import Breakdown from "../components/Breakdown";

export default function Analytics() {

    const [activeTab, setActiveTab] = useState("overview");

    const activeStyle =
        "bg-white dark:bg-gray-800 rounded-xl border border-gray-50 dark:border-gray-50 p-2 text-black dark:text-white";

    const normalStyle =
        "text-gray-500 dark:text-gray-400";

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">

            <Navbar />

            <div className="flex">

                <SideBar />

                <div className="flex-1 p-6">

                    <div className="flex justify-between items-center flex-wrap gap-4">

                        <div>
                            <h1 className="text-3xl font-bold text-black dark:text-white">
                                Advance Analytics
                            </h1>

                            <p className="text-gray-500 dark:text-gray-400 pt-2">
                                Deep insights and comprehensive financial analysis
                            </p>
                        </div>

                        {/* RIGHT CONTROLS */}

                        <div className="flex items-center gap-3">

                            <select className="border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md text-sm w-40 p-2">
                                <option>All time</option>
                                <option>Last 30 days</option>
                                <option>Last 7 days</option>
                            </select>

                            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white transition-transform duration-300 hover:scale-105 p-2 font-bold text-sm w-40">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>

                                Export
                            </button>

                        </div>
                    </div>

                    {/* CARDS */}

                    <div>
                        <Cards />
                    </div>

                    {/* TABS */}

                    <div className="bg-gray-200 dark:bg-gray-900 border rounded-xl border-gray-300 dark:border-gray-900 w-full mt-5">

                        <div className="grid grid-cols-3 gap-5 p-1 text-center">

                            <button
                                onClick={() => setActiveTab("overview")}
                                className={activeTab === "overview" ? activeStyle : normalStyle}
                            >
                                Overview
                            </button>

                            <button
                                onClick={() => setActiveTab("trends")}
                                className={activeTab === "trends" ? activeStyle : normalStyle}
                            >
                                Trends
                            </button>

                            <button
                                onClick={() => setActiveTab("breakdown")}
                                className={activeTab === "breakdown" ? activeStyle : normalStyle}
                            >
                                Breakdown
                            </button>

                        </div>
                    </div>

                    {/* CONTENT */}

                    <div className="mt-6">

                        {activeTab === "overview" && <Overview />}

                        {activeTab === "trends" && (
                            <div>
                                <Trends />
                            </div>
                        )}

                        {activeTab === "breakdown" && (
                            <div>
                                <Breakdown />
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}