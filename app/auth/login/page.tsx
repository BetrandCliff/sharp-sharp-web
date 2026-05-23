// app/auth/login/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Truck, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Demo logic
    if (email.toLowerCase().includes("admin")) {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/company/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <Link href='/'>
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <Truck className="w-9 h-9 text-black" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-zinc-400 mt-2">Sign in to your logistics dashboard</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="space-y-6">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label>Password</Label>
              <div className="relative mt-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-zinc-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button onClick={handleLogin} className="w-full bg-orange-500 hover:bg-orange-600 text-black py-6 text-lg font-semibold">
              Sign In
            </Button>

            <div className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-orange-500 hover:underline">
                Register Company
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-zinc-600 mt-8">
          Demo: Use <span className="text-orange-400">admin</span> for Admin • Any other email for Company
        </p>
      </div>
    </div>
  );
}