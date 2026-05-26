"use client";

import { useState } from "react";
import {
  Moon,
  Bell,
  Shield,
  Lock,
  Globe,
  Database,
  Mail,
  Smartphone,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] =
    useState(true);

  const [twoFactor, setTwoFactor] =
    useState(false);

  const [emailAlerts, setEmailAlerts] =
    useState(true);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black">
            Settings
          </h1>

          <p className="text-zinc-500 mt-2 text-[12px]">
            Manage platform preferences and security
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-400 transition px-4 py-2 rounded-md text-black font-bold flex items-center gap-2 text-sm">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* SETTINGS GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

          {/* APPEARANCE */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Moon className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  Appearance
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Customize dashboard theme
                </p>
              </div>
            </div>

            <SettingToggle
              title="Dark Mode"
              description="Enable dark dashboard interface"
              enabled={darkMode}
              setEnabled={setDarkMode}
            />

          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Bell className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  Notifications
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Platform alerts and updates
                </p>
              </div>
            </div>

            <div className="space-y-6">

              <SettingToggle
                title="Push Notifications"
                description="Receive real-time system alerts"
                enabled={notifications}
                setEnabled={setNotifications}
              />

              <SettingToggle
                title="Email Alerts"
                description="Receive analytics and reports by email"
                enabled={emailAlerts}
                setEnabled={setEmailAlerts}
              />

            </div>

          </div>

          {/* LANGUAGE */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Globe className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  Regional Settings
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Language and timezone
                </p>
              </div>
            </div>

            <div className="space-y-5">

              <div>
                <label className="text-zinc-400 text-sm">
                  Platform Language
                </label>

                <select className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 outline-none">
                  <option className="text-[12px]">English</option>
                  <option className="text-[12px]">French</option>
                </select>
              </div>

              <div>
                <label className="text-zinc-400 text-sm">
                  Timezone
                </label>

                <select className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 outline-none text-sm">
                  <option className="text-[12px]">Africa/Lagos</option>
                  <option className="text-[12px]">Africa/Douala</option>
                  <option className="text-[12px]">Africa/Nairobi</option>
                </select>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">

          {/* SECURITY */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Shield className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  Security
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Authentication and protection
                </p>
              </div>
            </div>

            <div className="space-y-6">

              <SettingToggle
                title="Two-Factor Authentication"
                description="Secure your admin account"
                enabled={twoFactor}
                setEnabled={setTwoFactor}
              />

              <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition p-5 rounded-2xl text-left flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Lock className="text-orange-500" />

                  <div>
                    <h3 className="font-semibold text-sm">
                      Change Password
                    </h3>

                    <p className="text-zinc-500 text-[12px]">
                      Update admin credentials
                    </p>
                  </div>
                </div>
              </button>

            </div>

          </div>

          {/* SYSTEM */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Database className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  System
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Platform infrastructure
                </p>
              </div>
            </div>

            <div className="space-y-5">

              <SystemCard
                title="Database Status"
                value="Operational"
                color="green"
              />

              <SystemCard
                title="API Services"
                value="99.98% uptime"
                color="orange"
              />

              <SystemCard
                title="Last Backup"
                value="2 hours ago"
                color="blue"
              />

            </div>

          </div>

          {/* CONTACT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Mail className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-md font-bold">
                  Support
                </h2>

                <p className="text-zinc-500 text-[12px]">
                  Contact system support
                </p>
              </div>
            </div>

            <div className="space-y-4">

              <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-5 flex items-center gap-4">
                <Mail className="text-orange-500 text-[12px]" />
                support@sharp-sharp.com
              </button>

              <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-5 flex items-center gap-4">
                <Smartphone className="text-orange-500 text-[12px]" />
                +234 800 000 0000
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* TOGGLE */
function SettingToggle({
  title,
  description,
  enabled,
  setEnabled,
}: any) {
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5">

      <div>
        <h3 className="font-semibold text-sm">
          {title}
        </h3>

        <p className="text-zinc-500 text-[12px]">
          {description}
        </p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-6 rounded-full transition-all duration-300  ${
          enabled
            ? "bg-orange-500"
            : "bg-zinc-700"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full mt-1 transition-all duration-300  ${
            enabled
              ? "translate-x-4.5 "
              : "translate-x-1"
          }`}
        />
      </button>

    </div>
  );
}

/* SYSTEM STATUS CARD */
function SystemCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-5 flex items-center justify-between">

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-zinc-500 text-[12px] mt-1">
          {value}
        </p>
      </div>

      <div
        className={`w-3 h-3 rounded-full ${
          color === "green"
            ? "bg-green-500"
            : color === "orange"
            ? "bg-orange-500"
            : "bg-blue-500"
        }`}
      />

    </div>
  );
}