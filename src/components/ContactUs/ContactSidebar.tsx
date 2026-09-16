
import {
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const trustPoints = [
  {
    icon: ClockIcon,
    title: "Snabb återkoppling",
    description:
      "Vi svarar alltid inom 24 timmar under helgfria vardagar så att du slipper vänta.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trygghet & Garanti",
    description:
      "Svensk tillverkning med noggrant testade, slitstarka och giftfria material anpassade för barnfamiljer.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Tillverkas i Sverige",
    description:
      "Varje order trycks med omsorg i vår produktionsanläggning i Arlöv och skickas spårbart.",
  },
];

const socialChannels = [
  { name: "Instagram", handle: "@namly_design" },
  { name: "Facebook", handle: "Namly Design" },
  { name: "TikTok", handle: "@namlydesign" },
];

export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-6">
      {/* Rating card */}
      <div className="rounded-2xl border border-[#EAE4D8] bg-white p-6">
        <div className="flex items-start justify-between">
          <span className="text-xs font-semibold tracking-wide text-[#C17752]">
            KUNDOMDÖME
          </span>
          <span className="flex items-center gap-1 rounded-full border border-[#EAE4D8] px-3 py-1 text-xs font-semibold text-[#5C574E]">
            <StarIcon className="h-3.5 w-3.5 text-[#F5A524]" />
            LIPSCORE
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-3xl font-semibold text-[#2A2620]">4.2</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="h-4 w-4 text-[#F5A524]" />
            ))}
            <StarIcon className="h-4 w-4 text-[#E4DED2]" />
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#5C574E]">
          Baserat på{" "}
          <span className="font-semibold text-[#2A2620]">
            1 403 oberoende kundbetyg
          </span>
          . Våra kunder älskar vår snabba produktion och omsorgsfulla
          paketering.
        </p>
      </div>

      {/* Trust points card */}
      <div className="rounded-2xl border border-[#EAE4D8] bg-white p-6">
        {trustPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className={
                index < trustPoints.length - 1
                  ? "flex gap-4 border-b border-[#EAE4D8] pb-5 mb-5"
                  : "flex gap-4"
              }
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1ECE3]">
                <Icon className="h-4.5 w-4.5 text-[#394150]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2A2620]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#5C574E]">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social card */}
      <div className="rounded-2xl border border-[#EAE4D8] bg-white p-6">
        <span className="text-xs font-semibold tracking-wide text-[#C17752]">
          FÖLJ VÅR VARDAG
        </span>
        <h3 className="mt-2 font-serif text-2xl text-[#2A2620]">
          Sociala kanaler
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5C574E]">
          Följ oss för inredningstips, tävlingar, bakom kulisserna och
          nylanseringar.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href="#"
              className="flex flex-col items-center rounded-lg border border-[#EAE4D8] bg-[#F1ECE3] px-2 py-3 text-center transition-colors hover:bg-[#EAE4D8]"
            >
              <span className="text-sm font-semibold text-[#2A2620]">
                {channel.name}
              </span>
              <span className="mt-0.5 text-xs text-[#8A8478]">
                {channel.handle}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}