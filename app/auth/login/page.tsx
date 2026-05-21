"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const login = () => {
    if (email === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/company/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          placeholder="Email"
          className="w-full p-2 border mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}