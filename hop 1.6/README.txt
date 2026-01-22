Bible90 (Vercel-ready) — One Admin (Email/Password) + Logo Theme

What changed:
- Site theme updated to match your logo (black + gold + deep blue accents)
- Logo added to header (assets/logo.png)
- Admin is now REAL email/password via Supabase (one allowed admin email)
- Pages + Gallery are stored in Supabase so edits show on any device
- Tracker progress + notes remain local-per-user (offline friendly)

Deploy on Vercel (STATIC):
- Framework Preset: Other / Static
- Build Command: (empty)
- Output Directory: .
- Install Command: (empty)

Quick start:
1) Edit config.js (recommended) and set:
   - supabaseUrl
   - supabaseAnonKey
   - adminEmail (ONLY allowed admin)

2) Create Supabase tables + policies (SQL):

create table if not exists public.site_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

create policy "public read site_content"
on public.site_content for select
to anon, authenticated
using (true);

create policy "auth write site_content"
on public.site_content for insert
to authenticated
with check (true);

create policy "auth update site_content"
on public.site_content for update
to authenticated
using (true)
with check (true);

3) In Supabase Auth:
- Enable Email/Password
- Create ONE user with the same email as config.js adminEmail

4) Open the site → #admin → login
- Edit pages / add gallery items
- Changes save to Supabase and appear for everyone

Notes:
- Supabase ANON key is public by design. Security is via RLS.
- If you want “only that one email can write” at DB level, tell me and I’ll tighten the RLS policy.
