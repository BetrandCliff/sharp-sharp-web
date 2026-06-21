import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const { company_id } = await req.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("companies")
    .update({ status: "approved" })
    .eq("id", company_id);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ data });
}