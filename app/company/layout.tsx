// app/(company)/layout.tsx

import Sidebar from "@/app/components/sidebar";

import Providers from "../context/themeprovider";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white flex">
      <Sidebar role="company" />

      <main className="flex-1 ml-72 p-10">
  <Providers>{children}</Providers>
      </main>
    </div>
  );
}