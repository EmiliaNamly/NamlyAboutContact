import { useState } from "react";

const AMOUNTS = [300, 500, 800, 1200];

export default function GiftCardSection() {
    const [selected, setSelected] = useState<number | null>(500);
    const [custom, setCustom] = useState("");
    const [useCustom, setUseCustom] = useState(false);

    const finalAmount = useCustom ? Number(custom) : selected;

    return (
        <section className="px-4 py-7 bg-white border-b border-[#1E3A5F]/20">
            <div className="bg-[#eef6ff] rounded-2xl p-6 shadow-md border border-[#1E3A5F]/20 mx-auto max-w-xl">

                <div className="bg-[#eef6ff] flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center border border-[#1E3A5F]/20">
                        <img
                            src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=200&q=80"
                            alt="Presentkort"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#334155]">
                            Sista minuten?
                        </span>
                        <h2 className="font-serif text-[22px] font-bold text-[#0f172a]">
                            Ge ett digitalt presentkort
                        </h2>
                    </div>
                </div>

                <p className="text-[14px] text-[#4b5563] mb-6 leading-relaxed">
                    Svårt att bestämma vilket motiv som passar bäst?
                    Levereras direkt via e-post inom 2 minuter.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    {AMOUNTS.map((a) => (
                        <button
                            key={a}
                            onClick={() => {
                                setSelected(a);
                                setUseCustom(false);
                            }}
                            className={`py-3 rounded-xl bg-white border border-[#1E3A5F]/20 text-[15px] font-bold transition
                ${selected === a && !useCustom
                                    ? "bg-black text-white "
                                    : "hover:bg-[#1E3A5F] text-[#1f2933] hover:text-white"
                                }`}
                        >
                            {a} kr
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setUseCustom(true)}
                    className={`w-full py-3 rounded-xl border border-[#1E3A5F]/20 text-[15px] font-bold transition mb-4
            ${useCustom
                            ? "bg-black text-white "
                            : "hover:bg-[#1E3A5F] text-[#1f2933] hover:text-white"
                        }`}
                >
                    Eget belopp
                </button>

                {useCustom && (
                    <div className="mb-4">
                        <label className="block text-[11px] font-bold uppercase text-[#334155] mb-2">
                            Eget belopp
                        </label>

                        <div className="flex items-center gap-2 rounded-xl bg-white border border-[#1E3A5F]/20 px-3">
                            <input
                                type="number"
                                min={100}
                                max={10000}
                                step={50}
                                value={custom}
                                onChange={(e) => setCustom(e.target.value)}
                                className="flex-1 bg-transparent py-3 text-[15px] font-bold outline-none text-[#1f2933]"
                                placeholder="500"
                            />
                            <span className="text-[14px] text-[#475569]">kr</span>
                        </div>
                        <p className="text-[11px] text-[#475569] mt-1.5">
                            Valfritt belopp mellan 100 och 10 000 kr.
                        </p>
                    </div>
                )}

                <button className="w-full bg-black hover:bg-[#1E3A5F] text-white py-3.5 rounded-2xl font-bold uppercase text-[13px]">
                    Köp presentkort - {finalAmount || 0} kr
                </button>

            </div>
        </section>
    )
}