import {
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

export default function TrustPointsCard() {
  return (
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
              <h3 className="font-semibold text-[#2A2620]">{point.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#5C574E]">
                {point.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}