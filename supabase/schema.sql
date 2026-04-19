create table if not exists public.contact_requests (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  language text not null,
  source text not null default 'portfolio-contact-form',
  submitted_at timestamptz not null default now()
);
