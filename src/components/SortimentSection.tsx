import {
    FaceSmileIcon,
    PaintBrushIcon,
    PhotoIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
    Squares2X2Icon,
    SwatchIcon,
    TagIcon,
} from "@heroicons/react/24/outline";

interface CategoryTitle {
    id: string;
    label: string;
    icon: typeof TagIcon;
    href: string;
    fullWidth?: boolean;
}

const categories: CategoryTitle[] = [
    { id: "namnlappar", label: "Namnlappar", icon: TagIcon, href: "/namnlappar.html" },
    { id: "posters", label: "Posters", icon: PhotoIcon, href: "/posters.html" },
    { id: "vaggdekor", label: "Väggdekor", icon: PaintBrushIcon, href: "/vaggdekor.html" },
    { id: "kakeldekor", label: "Kakeldekor", icon: Squares2X2Icon, href: "/kakeldekor.html" },
    { id: "dekorplast", label: "Dekorplast", icon: SwatchIcon, href: "/dekorplast.html" },
    { id: "tapeter", label: "Tapeter", icon: RectangleGroupIcon, href: "/tapeter.html" },
    { id: "klistermarken", label: "Klistermärken", icon: FaceSmileIcon, href: "/klistermarken.html" },
    { id: "canvastavlor", label: "Canvastavlor", icon: RectangleStackIcon, href: "/canvastavlor.html" },
];

export default function SortimentSection() {
    return (
        <section className="bg-white text-[#1f2933] py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl p-8 shadow-sm">

                    <span className="inline-block px-4 py-2 mb-6 bg-white border border-[#E5DFD5] text-sm rounded-full text-slate-700">
                        Sortiment
                    </span>

                    <h2 className="text-2xl md:text-3xl font-serif leading-tight mb-2">
                        Vårt sortiment
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                        Vi erbjuder ett brett sortiment av anpassningsbara produkter som låter
                        dig uttrycka din unika stil – allt från namnlappar och posters till
                        väggdekor, tapeter och kakeldekor. Många av våra produkter kan designas
                        med egen text, färg och bild, så att du enkelt kan skapa något som
                        verkligen känns som du.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <a
                                    key={category.id}
                                    href={category.href}
                                    className={`group bg-white p-4 rounded-lg shadow-sm border border-transparent flex flex-col items-center text-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1E3A5F]/20 ${category.fullWidth ? "col-span-2 md:col-span-1" : ""
                                        }`}
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A5F] shrink-0 transition-colors duration-200 group-hover:bg-[#2E5C8A]">
                                        <Icon className="h-4 w-4 text-white" strokeWidth={1.7} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800 transition-colors duration-200 group-hover:text-[#1E3A5F]">
                                        {category.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}