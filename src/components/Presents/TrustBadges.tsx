
export default function TrustBadges() {
    return (
        <section className="bg-white border-b border-[#1E3A5F]/20" data-purpose="trust-badges">

            <div className="max-w-6xl mx-auto px-5 py-6 md:py-10 grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8">

                <div className="flex flex-col items-center text-center  md:flex-row md:text-left md:justify-center md:gap-4  md:mb-0 shrink-0">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-[12px] bg-black flex items-center justify-center mb-1.5">
                        <svg
                            className="w-4 h-4 md:w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] md:text-[15px] font-bold text-[#1e293b] block leading-tight">
                            Presentinslagning
                        </span>
                        <span className="text-[9px] md:text-[12px] text-[#475569] mt-0.5">
                            Finns som tilval
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-center md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-[12px] bg-black flex items-center justify-center mb-1.5 md:mb-0 shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] md:text-[15px] font-bold text-[#1e293b] block leading-tight">
                            3-5 dagars frakt
                        </span>
                        <span className="text-[9px] md:text-[12px] text-[#475569] mt-0.5">
                            Klimatkompenserat
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center  md:flex-row md:text-left md:justify-center md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-[12px] bg-black flex items-center justify-center mb-1.5 md:mb-0 shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] md:text-[15px] font-bold text-[#1e293b] block leading-tight">
                            Nöjdhetsgaranti
                        </span>
                        <span className="text-[9px] md:text-[12px] text-[#475569] mt-0.5">
                            100% personligt
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}