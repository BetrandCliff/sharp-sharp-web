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
    if (email.toLowerCase().includes("admin")) {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/company/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 transition-colors duration-300">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="flex flex-col items-center mb-10">

          <Link href="/">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
              <Truck className="w-9 h-9 text-black" />
            </div>
          </Link>

          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="text-muted-foreground mt-2 text-sm text-center">
            Sign in to your logistics dashboard
          </p>

        </div>

        {/* CARD */}
        <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">

          <div className="space-y-6">

            {/* EMAIL */}
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

            {/* PASSWORD */}
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
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* BUTTON */}
            <Button
              onClick={handleLogin}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-orange-500/20"
            >
              Sign In
            </Button>

            {/* FOOTER */}
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-orange-500 hover:underline font-medium"
              >
                Register Company
              </Link>
            </div>

          </div>

        </div>

        {/* NOTE */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Demo: Use <span className="text-orange-500">admin</span> for Admin • Any other email for Company
        </p>

      </div>

    </div>
  );
}