export interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  endLabel: string; // t.ex. "Kampanjen avslutas söndag 23:59"
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex w-16 flex-col items-center rounded-lg bg-white/10 py-2.5">
      <span className="text-xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wide text-slate-300">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({
  days,
  hours,
  minutes,
  endLabel,
}: CountdownTimerProps) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <TimeBox value={days} label="Dagar" />
        <TimeBox value={hours} label="Timmar" />
        <TimeBox value={minutes} label="Minuter" />
      </div>
      <p className="text-xs text-slate-400">{endLabel}</p>
    </div>
  );
}