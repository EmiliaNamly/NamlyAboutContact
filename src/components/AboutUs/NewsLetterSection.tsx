// components/about-us/NewsletterSection.tsx
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;

        setSubmitted(true);
        setEmail("");

        setTimeout(() => setSubmitted(false), 3500);
    };

    return (
        <section id="newsletter" className="bg-[#1E3A5F] text-white py-12">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif leading-tight mb-2">
                    Namly Design nyhetsbrev
                </h2>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    Var först med de senaste nyheterna och ta del av våra exklusiva
                    erbjudanden.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <input
                        id="newsletter-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-postadress"
                        className="w-full sm:flex-1 py-3 px-4 bg-white text-slate-800 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EAE4D9]"
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#EAE4D9] text-[#1E3A5F] text-sm font-semibold rounded-lg py-3 px-5 transition-colors hover:bg-white"
                    >
                        <span>{submitted ? "Tack!" : "Prenumerera"}</span>
                        {!submitted && <ArrowRightIcon className="h-4 w-4" strokeWidth={2} />}
                    </button>
                </form>

                <div className="flex items-center justify-center gap-3 mt-6">
                    <a
                        href="https://www.instagram.com/namly_design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <CameraIcon className="h-4 w-4" strokeWidth={1.7} />
                    </a>
                    <a
                        href="https://www.facebook.com/Namly-Design-2315890788640287/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <FaFacebook className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@namlydesign"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <FaTiktok className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}