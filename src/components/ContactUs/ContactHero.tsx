export default function ContactHero() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-screen-lg">
        {/* Eyebrow badge */}
        <span className="inline-block px-4 py-2 bg-[#EAE4D9] text-[#2A2620]border border-[#E5DFD5] text-sm rounded-full text-slate-700 mb-6">
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
      </div>
    </section>
  );
}