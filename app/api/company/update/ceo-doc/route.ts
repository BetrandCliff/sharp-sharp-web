import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

const filePath = `ceo-doc/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from("ceo-doc")
    .upload(filePath, file);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  const { data: url } = supabase.storage
    .from("ceo-doc")
    .getPublicUrl(data.path);

  return Response.json({ url: url.publicUrl });
}