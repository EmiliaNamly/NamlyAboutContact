
export default function HeroSectionPresent() {
    return (
        <section className="bg-white text-[#1f2933] border-b border-[#1E3A5F]/20">
            <div className="relative max-w-6xl mx-auto px-5 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

                <div>
                    <div className="inline-flex items-center gap-2 bg-[#eef6ff] border border-[#E5DFD5] px-4 py-2 rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <span className="text-[12px] tracking-wider uppercase text-[#334155]">
                            Presenttips
                        </span>
                    </div>

                    <h1 className="font-serif text-[30px] md:text-[48px] leading-[1.25] md:leading-[1.1] text-[#1f2933] md:max-w-[15ch]">
                        Hitta en present som känns{" "}
                        <span className="italic">personlig </span>
                        & rätt
                    </h1>

                    <p className="text-[14px] md:text-[16px] text-[#4b5563] leading-[1.625] mt-4 max-w-[340px] md:max-w-[46ch] mx-auto md:mx-0">
                        Klicka i vad du letar efter eller utforska handplockade tips
                        för alla tillfällen - från personliga posters till namnlappar.
                    </p>

                    <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
                        <a
                            href="#presentguide"
                            className="bg-black hover:bg-[#1E3A5F] text-white text-[13px] font-semibold py-3 px-6 rounded-lg uppercase tracking-wider transition">
                            Utforska
                        </a>

                        <a
                            href="#result"
                            className="hidden md:inline text-[13px] font-semibold text-[#475569] hover:text-black underline underline-offset-4">
                            Se alla presentförslag
                        </a>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-2 gap-4 h-full">
                    <div className="rounded-xl overflow-hidden border border-[#E5DFD5] h-full shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80"
                            alt="Posters"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid gap-4 h-full">

                        <div className="rounded-xl overflow-hidden border border-[#E5DFD5] h-full shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=700&q=80"
                                alt="Poster"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="rounded-xl bg-[#eef6ff] border border-[#E5DFD5] p-5 flex flex-col justify-center shadow-sm h-full">
                            <span className="font-serif text-[30px] leading-none text-[#1f2933]">
                                3-5
                            </span>
                            <span className="text-[14px] text-[#475569] mt-2">
                                dagars leverans, personligt och redo att ge bort.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}