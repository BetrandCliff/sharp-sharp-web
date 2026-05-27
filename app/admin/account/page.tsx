"use client";

import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Shield,
  Key,
  Bell,
  Save,
} from "lucide-react";

export default function AccountPage() {
  return (
    <div className="space-y-8 text-foreground bg-background">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Account
          </h1>

          <p className="text-muted-foreground mt-2 text-[12px]">
            Manage your profile and account settings
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-400 transition px-3 py-2 rounded-md text-black font-semibold text-sm flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* PROFILE SECTION */}
      <div className="bg-card border border-border rounded-3xl p-6">

        <div className="flex flex-col md:flex-row md:items-center gap-6">

          {/* AVATAR */}
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-orange-500 flex items-center justify-center text-4xl font-bold text-black">
              A
            </div>

            <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-muted transition">
              <Camera size={18} />
            </button>
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h2 className="text-md font-semibold">
              Admin User
            </h2>

            <p className="text-muted-foreground mt-1 text-[12px]">
              Super Administrator
            </p>

            <div className="flex flex-wrap gap-3 mt-4">

              <div className="px-4 py-2 rounded-md bg-emerald-500/10 text-emerald-500 text-[12px]">
                Active Account
              </div>

              <div className="px-4 py-2 rounded-md bg-orange-500/10 text-orange-500 text-[12px]">
                Full Access
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* PERSONAL INFO */}
        <div className="bg-card border border-border rounded-3xl p-6">

          <h2 className="text-md font-semibold mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">

            <InputField label="Full Name" value="Admin User" />

            <InputField
              label="Email Address"
              value="admin@sharp-sharp.com"
              icon={<Mail size={18} />}
            />

            <InputField
              label="Phone Number"
              value="+234 800 000 0000"
              icon={<Phone size={18} />}
            />

            <InputField
              label="Location"
              value="Lagos, Nigeria"
              icon={<MapPin size={18} />}
            />

          </div>

        </div>

        {/* SECURITY */}
        <div className="space-y-8">

          {/* SECURITY SETTINGS */}
          <div className="bg-card border border-border rounded-3xl p-6">

            <h2 className="text-md font-semibold mb-6">
              Security
            </h2>

            <div className="space-y-4">

              <ActionCard
                icon={<Shield className="text-orange-500" />}
                title="Two-Factor Authentication"
                description="Add extra protection to your account"
              />

              <ActionCard
                icon={<Key className="text-orange-500" />}
                title="Change Password"
                description="Update your account password"
              />

              <ActionCard
                icon={<Bell className="text-orange-500" />}
                title="Login Alerts"
                description="Get notified of new logins"
              />

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-card border border-border rounded-3xl p-6">

            <h2 className="text-md font-semibold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <ActivityItem
                action="Logged into dashboard"
                time="2 minutes ago"
              />

              <ActivityItem
                action="Approved SwiftHaul Logistics"
                time="1 hour ago"
              />

              <ActivityItem
                action="Updated platform settings"
                time="Yesterday"
              />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

/* INPUT */
function InputField({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">
        {label}
      </label>

      <div className="mt-2 bg-background border border-border rounded-2xl px-4 py-4 flex items-center gap-3">

        {icon && (
          <div className="text-muted-foreground">
            {icon}
          </div>
        )}

        <input
          type="text"
          defaultValue={value}
          className="bg-transparent outline-none w-full text-sm text-foreground"
        />
      </div>
    </div>
  );
}

/* ACTION CARD */
function ActionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button className="w-full bg-background border border-border hover:bg-muted transition rounded-2xl p-5 flex items-center gap-4 text-left">

      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-sm">
          {title}
        </h3>

        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      </div>

    </button>
  );
}

/* ACTIVITY ITEM */
function ActivityItem({
  action,
  time,
}: {
  action: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-4 bg-background border border-border rounded-2xl p-4">

      <div className="w-3 h-3 rounded-full bg-orange-500 mt-2" />

      <div>
        <h3 className="font-medium text-sm">
          {action}
        </h3>

        <p className="text-xs text-muted-foreground mt-1">
          {time}
        </p>
      </div>

    </div>
  );
}