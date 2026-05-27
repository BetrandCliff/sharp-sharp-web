"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);

  const { theme, setTheme } = useTheme();
  const darkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(darkMode ? "light" : "dark");
  };

  return (
    <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full bg-background text-foreground">

      <h1 className="text-xl font-black mb-10">
        Settings
      </h1>

      {/* Appearance */}
      <div className="bg-card border border-border rounded-3xl p-6 md:p-8 transition-colors">
        <h2 className="font-bold mb-6">
          Appearance
        </h2>

        <div className="flex items-center justify-between bg-background border border-border rounded-2xl p-5 transition-colors">

          <div>
            <h3 className="font-semibold text-sm">
              Dark Mode
            </h3>
            <p className="text-muted-foreground text-[12px]">
              Enable dark interface
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className={`w-10 h-6 rounded-full transition-all ${
              darkMode ? "bg-orange-500" : "bg-zinc-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full mt-1 transition-all ${
                darkMode ? "translate-x-4" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-8 bg-card border border-border rounded-3xl p-6 md:p-8 transition-colors">

        <h2 className="font-bold mb-6">
          Notifications
        </h2>

        <div className="flex items-center justify-between bg-background border border-border rounded-2xl p-5 transition-colors">

          <div>
            <h3 className="font-semibold text-sm">
              Push Notifications
            </h3>
            <p className="text-muted-foreground text-[12px]">
              Receive delivery alerts
            </p>
          </div>

          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-6 rounded-full transition-all ${
              notifications ? "bg-orange-500" : "bg-zinc-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full mt-1 transition-all ${
                notifications ? "translate-x-4" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

    </main>
  );
}