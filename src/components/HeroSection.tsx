
export default function HeroSection() {
    return (
        <section className="bg-white text-[#1f2933] py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <span className="inline-block px-4 py-2 bg-[#EAE4D9] border border-[#E5DFD5] text-sm rounded-full text-slate-700">
                        Vår historia & vision
                    </span>

                    <h1 className="mt-5 text-3xl md:text-5xl font-serif leading-tight">
                        Namly Design - där personlig stil möter vardag och kreativitet
                    </h1>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        Namly Design grundades 2019 av två småbarnsföräldrar med en enkel idé -
                        att göra familjelivet lite enklare, lite roligare och mycket mer personligt.
                        Det började med behovet av smarta och praktiska lösningar för vardagen,
                        men växte snabbt till ett företag som idag inspirerar tusentals kunder med
                        personliga produkter för både hem och livstil.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Vi erbjuder ett brett sortiment av anpassningsbara produkter som låter dig
                        uttrycka din unika stil - allt från namnlappar och posters till väggdekor,
                        tapeter och kakeldekor. Många av våra produkter kan designas med egen text,
                        färg och bild, så att du enkelt kan skapa något som verkligen känns som du.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">

                        <div className="p-4 bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl shadow-sm text-center">
                            <p className="text-sm font-semibold text-slate-800 mb-2">Lokalt i Sverige</p>
                            <p className="text-xs text-slate-600">Egen produktion i Skåne</p>
                        </div>

                        <div className="p-4 bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl shadow-sm text-center">
                            <p className="text-sm font-semibold text-slate-800 mb-2">Personligt skapande</p>
                            <p className="text-xs text-slate-600">Designa med egen text & motiv</p>
                        </div>
                    </div>
                </div>

                <div className="relative self-stretch">

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Namly Design"
                        className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]"
                    />

                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                        <p className="text-xs font-semibold text-[#26302E]">
                            Skandinavisk design & hållbar kvalitet
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}