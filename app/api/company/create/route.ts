import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const body = await req.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase.from("companies").insert({
    user_id: body.user_id,
    company_name: body.company_name,
    address: body.address,
    phone: body.phone,
    email: body.email,
    company_doc_url: body.company_doc_url,
    ceo_doc_url: body.ceo_doc_url,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ data });
}