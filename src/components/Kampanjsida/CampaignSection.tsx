import CountdownTimer from "./Countdown";


export interface CampaignHeroProps {
  badgeLabel?: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    endLabel: string;
  };
}

export default function CampaignHero({
  badgeLabel = "HÖSTKAMPANJ 2026",
  headingPrefix,
  headingHighlight,
  headingSuffix,
  description,
  ctaLabel,
  onCtaClick,
  countdown,
}: CampaignHeroProps) {
  return (
    <section className="bg-[#242529] px-6 py-16 text-center text-white">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        {badgeLabel}
      </span>

      {/* Rubrik */}
      <h1 className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl">
        {headingPrefix}{" "}
        <span className="text-orange-400">{headingHighlight}</span>{" "}
        {headingSuffix}
      </h1>

      {/* Brödtext */}
      <p className="mx-auto mt-4 max-w-lg text-sm text-slate-300">
        {description}
      </p>

      {/* CTA */}
      <button
        onClick={onCtaClick}
        className="mt-8 rounded-lg bg-orange-400 px-6 py-3 text-sm font-bold tracking-wide text-slate-900 transition hover:bg-orange-300"
      >
        {ctaLabel}
      </button>

      {/* Nedräkning */}
      {countdown && (
        <CountdownTimer
          days={countdown.days}
          hours={countdown.hours}
          minutes={countdown.minutes}
          endLabel={countdown.endLabel}
        />
      )}
    </section>
  );
}