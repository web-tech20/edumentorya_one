revoke insert, update on public.study_progress from authenticated;
revoke insert on public.student_activities from authenticated;

drop policy if exists "Users can add their own progress" on public.study_progress;
drop policy if exists "Users can update their own progress" on public.study_progress;
drop policy if exists "Users can add their own activities" on public.student_activities;