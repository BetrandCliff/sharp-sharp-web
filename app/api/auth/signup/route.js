import { createClient } from "@supabase/supabase-js"

export async function POST(req) {
  const body = await req.json()
  const { email, password, companyName, companyUrl, ceoUrl } = body

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // 1. create auth user
  const { data: authData, error: authError } =
    await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

  if (authError) {
    return Response.json({ error: authError.message }, { status: 400 })
  }

  const userId = authData.user.id

  // 2. insert company
  const { error: dbError } = await supabase.from("companies").insert({
    user_id: userId,
    company_name: companyName,
    company_doc_url: companyUrl,
    ceo_doc_url: ceoUrl,
  })

  if (dbError) {
    return Response.json({ error: dbError.message }, { status: 400 })
  }

  return Response.json({ success: true })
}