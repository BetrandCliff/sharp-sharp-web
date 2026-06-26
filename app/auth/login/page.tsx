"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Truck, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<CompanyUser | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

        setUser(data);

        // Save to localStorage
        localStorage.setItem("company", JSON.stringify(data))

      if (!res.ok) {
        throw new Error(data.error);
      } 

      const user = data.user;
      if (user?.email?.includes("admin")) {
        router.push("/admin/dashboard");
      } else {
        router.push("/company/dashboard");
      }

    } catch (err: any) {

    toast.error(err.message);
      
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <Truck className="w-9 h-9 text-black" />
            </div>
          </Link>

          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-muted-foreground mt-2 text-sm text-center">
            Sign in to your logistics dashboard
          </p>
        </div>

        {/* FORM 👇 THIS IS THE FIX */}
        <form
          onSubmit={handleLogin}
          className="border border-border rounded-3xl p-8 space-y-6"
        >

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-black py-6 text-lg"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          {/* FOOTER */}
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-orange-500">
              Register Company
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}