"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handle = async () => {
      const code = searchParams.get("code");

      if (code) {
        await supabase.auth.exchangeCodeForSession(code);
      }

      router.push("/auth/login");
    };

    handle();
  }, []);

  return <p>Verifying email...</p>;
}