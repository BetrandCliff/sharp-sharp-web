import Sidebar from "@/app/components/sidebar";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex bg-background text-foreground transition-colors duration-300">

      

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-xl font-black tracking-tight">
            Account
          </h1>

          <p className="text-muted-foreground mt-2 text-[12px]">
            Manage your administrator profile and account details
          </p>
        </div>

        {/* ACCOUNT CARD */}
        <div className="max-w-4xl rounded-3xl border border-border bg-background shadow-sm overflow-hidden">

          {/* TOP */}
          <div className="relative p-8 border-b border-border">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

            <div className="relative flex flex-col md:flex-row md:items-center gap-6">

              {/* AVATAR */}
              <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-black text-4xl font-black shadow-lg shadow-orange-500/20">
                A
              </div>

              {/* INFO */}
              <div className="flex-1">
                <h2 className="text-md font-bold">
                  Admin User
                </h2>

                <p className="text-muted-foreground mt-1 text-[12px]">
                  admin@sharpsharp.com
                </p>

                <div className="flex flex-wrap gap-3 mt-5">

                  <div className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold border border-orange-500/20">
                    Company Admin
                  </div>

                  <div className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold border border-emerald-500/20">
                    Active Account
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* DETAILS */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            <InfoCard
              title="Role"
              value="Super Administrator"
            />

            <InfoCard
              title="Status"
              value="Active"
              valueClass="text-emerald-500"
            />

            <InfoCard
              title="Last Login"
              value="Today at 09:42 AM"
            />

            <InfoCard
              title="Account Created"
              value="Jan 12, 2025"
            />

          </div>

        </div>

      </main>
    </div>
  );
}

/* INFO CARD */
function InfoCard({
  title,
  value,
  valueClass = "",
}: {
  title: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-6 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">

      <p className="text-muted-foreground mb-3 text-xs font-medium">
        {title}
      </p>

      <h3 className={`text-base font-bold ${valueClass} text-sm`}>
        {value}
      </h3>

    </div>
  );
}