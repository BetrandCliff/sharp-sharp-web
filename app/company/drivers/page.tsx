// app/company/drivers/page.tsx
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DriversPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Drivers</h1>
          <p className="text-zinc-400">Manage your driver team</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-black">
          <Plus className="mr-2" /> Add New Driver
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <p className="text-center text-zinc-500 py-12">Driver list will appear here (Table coming soon)</p>
      </div>
    </div>
  );
}