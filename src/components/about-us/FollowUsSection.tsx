// components/FollowUsSection.tsx
import { CameraIcon, ArrowDownIcon, EnvelopeOpenIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTiktok } from "react-icons/fa";

export default function FollowUsSection() {
    const handleNewsletterJump = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.getElementById("newsletter");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                const input = document.getElementById("newsletter-input") as HTMLInputElement | null;
                input?.focus();
            }, 500);
        }
    };

    return (
        <div className="bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-[#1E3A5F]" strokeWidth={1.7} />
            </div>

            <h3 className="text-xl font-serif leading-tight">
                Följ vår resa
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
                Vi delar gärna med oss av inspiration, kundbilder och nyheter
                – men vill också ta del av din kreativitet. Följ oss gärna i
                våra kanaler och var med i vår växande gemenskap:
            </p>

            <div className="grid grid-cols-3 gap-3 mt-2">
                <a
                    href="https://www.instagram.com/namly_design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg py-2.5 px-3 transition-colors hover:bg-[#2E5C8A]"
                >
                    <CameraIcon className="h-4 w-4" strokeWidth={1.7} />
                    <span className="hidden sm:inline">Instagram</span>
                </a>
                <a
                    href="https://www.facebook.com/Namly-Design-2315890788640287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg py-2.5 px-3 transition-colors hover:bg-[#2E5C8A]"
                >
                    <FaFacebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                </a>
                <a
                    href="https://www.tiktok.com/@namlydesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg py-2.5 px-3 transition-colors hover:bg-[#2E5C8A]"
                >
                    <FaTiktok className="h-4 w-4" />
                    <span className="hidden sm:inline">TikTok</span>
                </a>
            </div>

            <a
                href="#newsletter"
                onClick={handleNewsletterJump}
                className="bg-white/60 rounded-lg p-3 mt-2 flex items-center justify-between text-center hover:bg-white transition-colors group cursor-pointer"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E3A5F]/10 shrink-0">
                    <EnvelopeOpenIcon className="h-4 w-4 text-[#1E3A5F]" strokeWidth={1.7} />
                </div>

                <div className="text-left">
                    <p className="text-sm font-bold text-slate-800">
                        Vill du ha inspiration i inkorgen?
                    </p>
                    <p className="text-sm text-slate-600">
                        Prenumerera på vårt nyhetsbrev här nedan.
                    </p>
                </div>
                <ArrowDownIcon
                    className="text-[#1E3A5F] h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-y-0.5 shrink-0"
                    strokeWidth={2}
                />
            </a>
        </div>
    );
}