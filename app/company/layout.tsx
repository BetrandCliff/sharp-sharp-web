// app/(company)/layout.tsx

import Sidebar from "@/app/components/sidebar";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar role="company" />

      <main className="flex-1 ml-72 p-10">
        {children}
      </main>
    </div>
  );
}