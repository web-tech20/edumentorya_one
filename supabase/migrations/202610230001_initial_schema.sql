create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '',
  university text,
  program text,
  study_level text,
  subscription_tier text not null default 'free'
    check (subscription_tier in ('free', 'premium')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.study_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_code text not null,
  course_name text not null,
  mastery_pct integer not null default 0 check (mastery_pct between 0 and 100),
  updated_at timestamptz not null default now(),
  unique (user_id, course_code)
);

create table if not exists public.student_activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  activity_type text not null check (activity_type in ('mentor', 'correction', 'exam')),
  title text not null,
  detail text not null default '',
  score numeric(4, 1) check (score between 0 and 20),
  created_at timestamptz not null default now()
);

create index if not exists study_progress_user_id_idx
  on public.study_progress (user_id);

create index if not exists student_activities_user_created_idx
  on public.student_activities (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.study_progress enable row level security;
alter table public.student_activities enable row level security;

grant select on public.profiles to authenticated;
grant update (display_name, university, program, study_level) on public.profiles to authenticated;
grant select, insert, update on public.study_progress to authenticated;
grant select, insert on public.student_activities to authenticated;

create policy "Users can read their own profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

create policy "Users can update their own academic profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "Users can read their own progress"
  on public.study_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can add their own progress"
  on public.study_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own progress"
  on public.study_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can read their own activities"
  on public.student_activities for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can add their own activities"
  on public.student_activities for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(coalesce(new.email, ''), '@', 1))
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();