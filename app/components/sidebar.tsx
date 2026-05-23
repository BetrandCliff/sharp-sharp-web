import Link from 'next/link'
import {
  LayoutDashboard,
  Truck,
  Users,
  Car,
  BarChart3,
} from 'lucide-react'

const links = [
  {
    label: 'Dashboard',
    href: '/company/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Drivers',
    href: '/company/drivers',
    icon: Users,
  },
  {
    label: 'Vehicles',
    href: '/company/vehicles',
    icon: Car,
  },
  {
    label: 'Trips',
    href: '#',
    icon: Truck,
  },
  {
    label: 'Analytics',
    href: '#',
    icon: BarChart3,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen glass border-r border-white/5 p-6 fixed left-0 top-0">
      <h1 className="text-3xl font-bold text-blue-500 mb-12">
        FleetX
      </h1>

      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
          >
            <link.icon size={22} />
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  )
}