import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const companyName = formData.get("companyName") as string;
    const address = formData.get("address") as string;
    const phone = formData.get("phone") as string;

    const companyFile = formData.get("companyFile") as File | null;
    const ceoFile = formData.get("ceoFile") as File | null;

    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (!companyName || !address || !phone) {
      return Response.json(
        { error: "Missing company information" },
        { status: 400 }
      );
    }

    if (!companyFile || !ceoFile) {
      return Response.json(
        { error: "Missing required documents" },
        { status: 400 }
      );
    }

    // ✅ ANON CLIENT (not service role)
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    console.log("Signing up user...");

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
        options: {
    emailRedirectTo:  "http://192.168.1.236:3000/auth/callback",
  },
    });

    if (authError || !authData.user) {
      console.error(authError);

      return Response.json(
        { error: authError?.message || "Signup failed" },
        { status: 400 }
      );
    }

    const userId = authData.user.id;

    console.log("User created:", userId);

    // ======================
    // Upload Company Document
    // ======================
    const companyPath = `${userId}/company-${Date.now()}-${companyFile.name}`;

    const { error: companyUploadError } = await supabase.storage
      .from("companies")
      .upload(companyPath, companyFile, {
        upsert: true,
      });

    if (companyUploadError) {
      console.error(companyUploadError);

      return Response.json(
        { error: companyUploadError.message },
        { status: 500 }
      );
    }

    const companyUrl = supabase.storage
      .from("companies")
      .getPublicUrl(companyPath).data.publicUrl;

    // ======================
    // Upload CEO Document
    // ======================
    const ceoPath = `${userId}/ceo-${Date.now()}-${ceoFile.name}`;

    const { error: ceoUploadError } = await supabase.storage
      .from("ceo-doc")
      .upload(ceoPath, ceoFile, {
        upsert: true,
      });

    if (ceoUploadError) {
      console.error(ceoUploadError);

      return Response.json(
        { error: ceoUploadError.message },
        { status: 500 }
      );
    }

    const ceoUrl = supabase.storage
      .from("ceo-doc")
      .getPublicUrl(ceoPath).data.publicUrl;

    // ======================
    // Save Company Record
    // ======================
    const { error: dbError } = await supabase.from("companies").insert({
      user_id: userId,
      company_name: companyName,
      address,
      phone,
      company_doc_url: companyUrl,
      ceo_doc_url: ceoUrl,
    });

    if (dbError) {
      console.error(dbError);

      return Response.json(
        { error: dbError.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      userId,
      companyUrl,
      ceoUrl,
    });
  } catch (error: any) {
    console.error("SIGNUP ERROR:", error);

    return Response.json(
      {
        error: error?.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}