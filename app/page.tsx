import Image from "next/image";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold">Logistics Platform</h1>
      <p className="mt-3 text-gray-600">
        Manage drivers, vehicles and deliveries easily
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/auth/register" className="px-4 py-2 bg-blue-600 text-white rounded">
          Company Signup
        </a>

        <a href="/auth/login" className="px-4 py-2 border rounded">
          Login
        </a>
      </div>
    </div>
  );
}