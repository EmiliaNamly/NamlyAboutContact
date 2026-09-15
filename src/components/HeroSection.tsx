
export default function HeroSection() {
    return (
        <section className="bg-[#F7F4EE] text-[#26302E] py-16">
            <div className="max-w-6x1 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] text-xs rounded-full">
                        Vår historia & vision
                    </span>

                    <h1 className="mt-5 text-4xl md:text-5xl font-serif leading-tight">
                        Namly Design - där personlig stil möter vardag och kreativitet
                    </h1>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        Namly Design grundades 2019 av två småbarnsföräldrar med en enkel idé -
                        att göra familjelivet lite enklare, lite roligare och mycket mer personligt.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">

                        <div className="p-4 bg-white border rounded-md shadow-sm">
                            <p className="font-bold text-sm">Lokalt i Sverige</p>
                            <p className="text-xs text-gray-500">Egen produktion i Skåne</p>
                        </div>
                    </div>
                </div>

                <div className="relative">

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Namly Design"
                        className="rounded-md shadow-lg w-full object-cover aspect-[4/3]"
                    />

                </div>
            </div>
        </section>
    )
}