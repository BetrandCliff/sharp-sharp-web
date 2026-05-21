"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    // fake API call
    console.log(form);
    alert("Request sent. Await admin approval.");
    router.push("/auth/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Company Signup</h2>

        <input
          placeholder="Company Name"
          className="w-full p-2 border mb-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}