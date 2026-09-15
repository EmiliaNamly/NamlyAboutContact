function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-input text-petrol text-[11px] font-bold uppercase tracking-wider mb-4 border border-border-hairline">
            <span className="w-2 h-2 rounded-full bg-copper" />
            Kundservice &amp; Support
          </div>
          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[50px] text-petrol-dark tracking-tight leading-tight mb-4 font-normal">
            Kontakta oss
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A5654] leading-relaxed">
            Vi finns här för dig! Tveka inte att kontakta oss om du har frågor kring
            namnlappar, posters, väggdekaler eller din beställning. Vår personliga
            kundsupport besvarar dig snabbt och omtänksamt.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-xs border border-border-hairline">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-copper" />
            </span>
            <span className="text-[13px] text-[#4A5654]">
              Kundtjänst bemannad:{" "}
              <strong className="text-petrol-dark font-semibold">Mån–Fre 09:00–17:00</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;