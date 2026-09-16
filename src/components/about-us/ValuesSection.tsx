import {
    TruckIcon,
    HeartIcon,
    ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

interface ValueCard {
    id: string;
    title: string;
    description: string;
    icon: typeof TruckIcon;
}

const values: ValueCard[] = [
    {
        id: "lokal-produktion",
        title: "Tillverkas lokalt i Sverige",
        description: "Korta transporter, hållbar produktion och noggrann kvalitetskontroll direkt från Skåne.",
        icon: TruckIcon,
    },
    {
        id: "valgorenhet",
        title: "Hjärta för välgörenhet",
        description: "Som en del av vårt ansvar som företag stöttar vi lokala välgörenhetsorganisationer och initiativ.",
        icon: HeartIcon,
    },
    {
        id: "engagemang",
        title: "Personligt engagemang",
        description: "Alltid personligt och genuint bemötande vid varje förfrågan och specialönskemål.",
        icon: ChatBubbleLeftRightIcon,
    },
];

export default function ValuesSection() {
    return (
        <section className="bg-white text-[#1f2933] py-4">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="relative self-stretch order-1">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Ateljén och tryckeriet i Skåne"
                        className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                        <p className="text-xs font-semibold text-[#26302E]">
                            Ateljén &amp; Tryckeriet i Skåne
                        </p>
                    </div>
                </div>

                <div className="order-2">
                    <span className="inline-block px-4 py-2 mb-4 bg-[#EAE4D9] border border-[#E5DFD5] text-sm rounded-full text-slate-700">
                        Våra Värderingar
                    </span>

                    <h2 className="text-2xl md:text-3xl font-serif leading-tight mb-4">
                        Vi är ett riktigt företag – med riktiga människor
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Trovärdighet är viktigt för oss. Vi vill att du som kund ska känna
                        att det finns ett genuint team bakom Namly. Vi är ett litet, passionerat
                        gäng som arbetar från Sverige, där vi också tillverkar alla våra
                        produkter lokalt. Har du frågor eller funderingar innan köp, så finns vi
                        alltid här för att hjälpa dig.
                    </p>

                    <div className="flex flex-col gap-4">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.id}
                                    className="p-4 bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl shadow-sm flex items-start gap-3"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A5F] shrink-0">
                                        <Icon className="h-4 w-4 text-white" strokeWidth={1.7} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-800">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}