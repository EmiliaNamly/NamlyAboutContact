import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  BuildingOffice2Icon,
  ClockIcon,
  CheckBadgeIcon,
  TruckIcon,
  ArrowDownIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function ContactHero() {
  return (
    <section className="bg-[#FFFFF] px-6 py-16">
      <div className="mx-auto max-w-screen-lg">
        {/* Eyebrow badge */}
        <span className="inline-block px-4 py-2 bg-[#EAE4D9] border border-[#E5DFD5] text-sm rounded-full text-slate-700 mb-6">
          Kundservice &amp; Support
        </span>
        {/* Heading */}
        <h1 className="font-serif text-5xl text-[#2A2620]">Kontakta oss</h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5C574E]">
          Tveka inte att kontakta oss på Namly Design om du har några frågor
          eller funderingar. Vi strävar alltid efter att ge dig bästa möjliga
          service och hjälpa dig på vägen. Innan du hör av dig, kanske du hittar
          svaret på din fråga i vår FAQ-sektion, där vi samlat de vanligaste
          frågorna och svaren. Vår personliga kundsupport besvarar dig snabbt
          och omtänksamt.
        </p>

        {/* Hours badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E4DED2] bg-white px-4 py-2 text-sm text-[#5C574E]">
          <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
          Kundtjänst bemannad:{" "}
          <span className="font-semibold text-[#2A2620]">
            Mån–Fre 09:00–17:00
          </span>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col rounded-2xl border border-[#EAE4D8] bg-white p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#394150]">
              <EnvelopeIcon className="h-6 w-6 text-white" strokeWidth={1.5} />.
            </div>

            <h2 className="mt-2 font-serif text-xl text-[#2A2620]">
              E-post &amp; Chatt
            </h2>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C574E]">
              Skicka ett mejl till oss på{" "}
              <span className="font-semibold text-[#2A2620]">
                info@namly.se
              </span>{" "}
              eller starta en livechatt under våra öppettider. Vi svarar
              vanligtvis inom några timmar!
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#F1ECE3] px-4 py-3 text-sm text-[#5C574E]">
              <ClockIcon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] text-[#8A8478]">
                  SVARSTID &amp; ÖPPETTIDER
                </div>
                <div className="text-[13px] font-semibold text-[#2A2620]">
                  Vardagar 09:00 – 17:00
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#C17752] py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#B06A47]">
              SKICKA E-POST
              <PaperAirplaneIcon className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-2xl border border-[#EAE4D8] bg-white p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#394150]">
              <QuestionMarkCircleIcon
                className="h-6 w-6 text-white"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="mt-2 font-serif text-xl text-[#2A2620]">
              Vanliga frågor (FAQ)
            </h2>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C574E]">
              Innan du hör av dig, kika gärna i vår samlade kunskapsbank där vi
              samlat svar om tryck, applicering, leveranstider och returer.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#F1ECE3] px-4 py-3 text-sm text-[#5C574E]">
              <CheckBadgeIcon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px]  text-[#8A8478]">TOPPFRÅGOR</div>
                <div className="text-[13px] font-semibold text-[#2A2620]">
                  9 av 10 hittar svaret här
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#394150] py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#000000]">
              GÅ TILL VANLIGA FRÅGOR
              <ArrowDownIcon className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-2xl border border-[#EAE4D8] bg-white p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#394150]">
              <BuildingOffice2Icon
                className="h-6 w-6 text-white"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="mt-2 font-serif text-xl text-[#2A2620]">
              Kontor &amp; Lager
            </h2>
            <div className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C574E]">
              <p className="font-semibold text-[#2A2620]">Namly Design AB</p>
              <p>Terminalgatan 9</p>
              <p>232 61 Arlöv, Sverige</p>
              <p className="mt-2 text-xs text-[#8A8478]">Org.nr: 559216-9097</p>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#F1ECE3] px-4 py-3 text-sm text-[#5C574E]">
              <TruckIcon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px]  text-[#8A8478]">
                  LAGER &amp; TRYCKERI
                </div>
                <div className="text-[13px] font-semibold text-[#2A2620]">
                  Lokal produktion i Skåne
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#394150] py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#000000]">
              HITTA VIA KARTA
              <PaperAirplaneIcon className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
