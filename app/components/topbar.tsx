import { Bell, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div className="relative w-96">
        <Search className="absolute left-4 top-3 text-zinc-500" />

        <input
          className="w-full bg-zinc-900 border border-white/5 rounded-2xl h-12 pl-12 pr-4 outline-none"
          placeholder="Search..."
        />
      </div>

      <button className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
        <Bell />
      </button>
    </div>
  )
}