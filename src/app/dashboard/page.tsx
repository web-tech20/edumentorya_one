import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Library,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

const activityIcons = {
  mentor: Brain,
  correction: CheckCircle2,
  exam: FileText,
};

export default async function DashboardPage() {
  await cookies();

  if (!isSupabaseConfigured()) {
    redirect('/auth/login?error=configuration');
  }

  const supabase = await createClient();
  const { data: claims, error: claimsError } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;

  if (claimsError || typeof userId !== 'string') {
    redirect('/auth/login');
  }

  const [profileResult, progressResult, activityResult] = await Promise.all([
    supabase
      .from('profiles')
      .select('display_name, university, program, study_level, subscription_tier')
      .eq('id', userId)
      .maybeSingle(),
    supabase
      .from('study_progress')
      .select('course_code, course_name, mastery_pct')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })
      .limit(5),
    supabase
      .from('student_activities')
      .select('id, activity_type, title, detail, score, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5),
  ]);

  const profile = profileResult.data;
  const progress = progressResult.data ?? [];
  const activities = activityResult.data ?? [];
  const hasLoadError = Boolean(profileResult.error || progressResult.error || activityResult.error);
  const displayName = profile?.display_name.trim() || 'Étudiant';
  const academicDetails = [profile?.study_level, profile?.program, profile?.university]
    .filter((value): value is string => Boolean(value?.trim()))
    .join(' · ');
  const isPremium = profile?.subscription_tier === 'premium';

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl space-y-8 pb-8">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-secondary">Votre espace d’étude</p>
            <h1 className="text-3xl font-bold leading-tight text-petrol md:text-4xl">Bonjour, {displayName}</h1>
            <p className="mt-2 text-sm text-petrol/65">{academicDetails || 'Complétez votre profil académique dans les paramètres.'}</p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-xl border border-border-subtle bg-surface-base px-4 py-3 shadow-level-1 sm:self-auto">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary"><Sparkles className="h-4 w-4" /></span>
            <div>
              <p className="text-xs font-semibold text-petrol">Formule {isPremium ? 'Premium' : 'Gratuite'}</p>
              <p className="mt-0.5 text-xs text-petrol/55">{isPremium ? 'Votre abonnement est actif' : 'Passez à Premium à tout moment'}</p>
            </div>
            {isPremium && <span aria-label="Abonnement actif" className="ml-2 h-2 w-2 rounded-full bg-primary" />}
          </div>
        </header>

        {hasLoadError && (
          <p role="status" className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-petrol">
            Certaines données n’ont pas pu être chargées. Réessayez dans quelques instants.
          </p>
        )}

        <section className="relative overflow-hidden rounded-2xl bg-[#064E55] p-6 text-white md:p-9">
          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-[#B8E5D8]"><span className="h-2 w-2 rounded-full bg-[#A5D8C2]" /> Votre prochaine étape</div>
              <h2 className="max-w-xl text-2xl font-bold leading-tight md:text-3xl">Transformez vos révisions en progrès mesurables.</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">Posez une question au mentor, reprenez un exercice ou faites corriger votre devoir.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/mentor" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 text-sm font-bold text-primary-dark transition-colors hover:bg-surface-canvas">
                  <Brain className="h-4 w-4" /> Ouvrir le mentor <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/corrections" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  <ClipboardCheck className="h-4 w-4" /> Corriger un devoir
                </Link>
              </div>
            </div>
            <div className="hidden min-w-44 border-l border-white/20 pl-8 md:block">
              <p className="text-xs font-semibold uppercase text-white/65">Votre suivi</p>
              <p className="mt-2 text-4xl font-bold">{progress.length}<span className="ml-2 text-lg font-medium text-white/65">matières</span></p>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#B8E5D8]"><TrendingUp className="h-3.5 w-3.5" /> Suivi actualisé</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10" />
        </section>

        <section aria-label="Actions rapides" className="grid gap-3 sm:grid-cols-3">
          {[
            { title: 'Poser une question', subtitle: 'Explication pas à pas', href: '/mentor', icon: Brain, tone: 'text-secondary bg-secondary/10' },
            { title: 'Corriger un devoir', subtitle: 'Photo ou document PDF', href: '/corrections', icon: ClipboardCheck, tone: 'text-primary bg-primary/10' },
            { title: 'Consulter les annales', subtitle: 'UAC, EPAC, ENEAM…', href: '/archives', icon: Library, tone: 'text-tertiary bg-tertiary/10' },
          ].map(({ title, subtitle, href, icon: Icon, tone }) => (
            <Link key={title} href={href} className="group flex items-center gap-4 rounded-xl border border-border-subtle bg-surface-base p-4 shadow-level-1 transition hover:-translate-y-0.5 hover:shadow-level-2">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${tone}`}><Icon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-petrol">{title}</span><span className="mt-1 block text-xs text-petrol/55">{subtitle}</span></span>
              <ArrowRight className="h-4 w-4 shrink-0 text-petrol/35 transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-xl border border-border-subtle bg-surface-base p-5 shadow-level-1 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div><h2 className="text-lg font-bold text-petrol">Progression par matière</h2><p className="mt-1 text-xs text-petrol/55">Votre maîtrise sur les unités d’enseignement</p></div>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            {progress.length > 0 ? (
              <div className="mt-6 space-y-5">
                {progress.map((course, index) => (
                  <div key={course.course_code}>
                    <div className="mb-2 flex items-baseline justify-between gap-3"><div><span className="text-sm font-semibold text-petrol">{course.course_name}</span><span className="ml-2 text-[11px] text-petrol/45">{course.course_code}</span></div><span className="text-sm font-bold tabular-nums text-petrol">{course.mastery_pct}%</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-canvas"><div className={`h-full rounded-full ${['bg-primary', 'bg-secondary', 'bg-tertiary'][index % 3]}`} style={{ width: `${course.mastery_pct}%` }} /></div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 rounded-lg bg-surface-canvas px-4 py-5 text-sm leading-6 text-petrol/70">Aucune progression enregistrée pour le moment. Vos résultats apparaîtront ici après vos premières séances.</p>
            )}
          </section>

          <section className="rounded-xl border border-border-subtle bg-surface-base p-5 shadow-level-1 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div><h2 className="text-lg font-bold text-petrol">Activité récente</h2><p className="mt-1 text-xs text-petrol/55">Vos séances et corrections</p></div>
              <Clock3 className="h-5 w-5 text-petrol/50" />
            </div>
            {activities.length > 0 ? (
              <div className="mt-5 divide-y divide-border-subtle">
                {activities.map((activity) => {
                  const Icon = activityIcons[activity.activity_type];
                  const date = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Porto-Novo' }).format(new Date(activity.created_at));

                  return (
                    <div key={activity.id} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-canvas text-primary"><Icon className="h-4 w-4" /></span>
                      <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-petrol">{activity.title}</p><p className="mt-1 text-xs text-petrol/55">{activity.detail || date}</p></div>
                      {activity.score !== null ? <span className="whitespace-nowrap rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{activity.score}/20</span> : <ArrowDownRight className="h-4 w-4 shrink-0 text-petrol/50" />}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="mt-6 rounded-lg bg-surface-canvas px-4 py-5 text-sm leading-6 text-petrol/70">Aucune activité pour le moment. Vos séances avec le mentor et vos corrections apparaîtront ici.</p>
            )}
          </section>
        </div>

        <section className="flex flex-col gap-4 rounded-xl border border-secondary/15 bg-secondary/5 p-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary"><BookOpen className="h-4 w-4" /></span><div><p className="text-sm font-bold text-petrol">Un nouveau sujet à travailler ?</p><p className="mt-1 text-xs leading-5 text-petrol/60">Retrouvez les épreuves de votre université et entraînez-vous avec un corrigé guidé.</p></div></div>
          <Link href="/archives" className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-secondary/25 px-4 text-xs font-bold text-secondary transition hover:bg-white">Explorer les annales <ArrowRight className="h-3.5 w-3.5" /></Link>
        </section>
      </div>
    </PageTransition>
  );
}