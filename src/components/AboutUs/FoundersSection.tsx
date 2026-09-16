
export default function FoundersSection() {
    return (
        <section className="bg-white py-4">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-10">
                    <span className="inline-block px-4 py-2 bg-[#EAE4D9] border border-[#E5DFD5] text-sm rounded-full text-slate-700">
                        Grundarna bakom Namly
                    </span>

                    <h2 className="mt-5 text-3xl md:text-4xl font-serif text-slate-900">
                        Människorna bakom varumärket
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl p-6 flex gap-4 shadow-sm">

                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                            alt="Emelie Jungevall"
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">
                                Emelie Jungevall
                            </h3>

                            <p className="text-sm text-slate-600 mb-2">
                                Grundare & hennes roll
                            </p>

                            <p className="text-sm text-slate-600 mb-2">
                                Hennes ansvar
                            </p>

                        </div>

                    </div>

                    <div className="bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl p-6 flex gap-4 shadow-sm">

                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                            alt="Peter Svendsen"
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">
                                Peter Svendsen
                            </h3>

                            <p className="text-sm text-slate-600 mb-2">
                                Grundare & hans roll
                            </p>

                            <p className="text-sm text-slate-700 leading-relaxed">
                                Hans ansvar
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}