import Sidebar from "@/app/components/sidebar";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
    

      <main className="flex-1  p-10">
        <h1 className="text-xl font-black mb-8">
          Account
        </h1>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-3xl">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-black text-4xl font-black">
              A
            </div>

            <div>
              <h2 className="text-md font-bold">
                Admin User
              </h2>

              <p className="text-zinc-500 text-[12px]">
                admin@sharpsharp.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-500 mb-2">
                Role
              </p>

              <h3 className="text-md font-semibold ">
                Super Administrator
              </h3>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-500 mb-2">
                Status
              </p>

              <h3 className="text-emerald-500 font-semibold text-md">
                Active
              </h3>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-500 mb-2 text-[12px]">
                Last Login
              </p>

              <h3 className="font-semibold text-md">
                Today at 09:42 AM
              </h3>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-500 mb-2 text-[12px]">
                Account Created
              </p>

              <h3 className="font-semibold text-md">
                Jan 12, 2025
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}