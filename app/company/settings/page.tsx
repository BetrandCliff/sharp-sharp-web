"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
      
      <h1 className="text-xl md:text-xl font-black mb-10">
        Settings
      </h1>

      <div className="space-y-8">

        {/* Appearance */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-md md:text-md font-bold mb-6">
            Appearance
          </h2>

          <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">
            <div>
              <h3 className="font-semibold text-sm">
                Dark Mode
              </h3>
              <p className="text-zinc-500 text-[12px]">
                Enable dark interface
              </p>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-6 rounded-full transition-all duration-300 ${
                darkMode ? "bg-orange-500" : "bg-zinc-700"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full mt-1 transition-all duration-300 ${
                  darkMode ? "translate-x-4.5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-md md:text-md font-bold mb-6">
            Notifications
          </h2>

          <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">
            <div>
              <h3 className="font-semibold text-sm">
                Push Notifications
              </h3>
              <p className="text-zinc-500 text-[12px]">
                Receive delivery and trip alerts
              </p>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-10 h-6 rounded-full transition-all duration-300 ${
                notifications ? "bg-orange-500" : "bg-zinc-700"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full mt-1 transition-all duration-300 ${
                  notifications ? "translate-x-4.5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Security
          </h2>

          <div className="space-y-4">
            <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl text-left">
              Change Password
            </button>

            <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl text-left">
              Two-Factor Authentication
            </button>

            <button className="w-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all p-5 rounded-2xl text-left">
              Delete Account
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}