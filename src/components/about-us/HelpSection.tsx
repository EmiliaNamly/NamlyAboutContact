// components/HelpSection.tsx
import { ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function HelpSection() {
    return (
        <section className="bg-white text-[#1f2933] py-6">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-[#EAE4D9] border border-[#E5DFD5] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A5F] shrink-0">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white" strokeWidth={1.7} />
                    </div>

                    <h3 className="text-xl font-serif leading-tight">
                        Hur vi kan hjälpa dig
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Vi vet att det kan dyka upp frågor när du handlar personligt
                        online. Hur ser produkten ut i verkligheten? Passar det i mitt
                        hem? Vad händer om jag ångrar mig? Vår hemsida är skapad för att
                        vara enkel och inspirerande – men vi finns också här med personlig
                        service, tydliga instruktioner och snabb återkoppling. Tveka inte
                        att höra av dig!
                    </p>

                    <a
                        href="mailto:info@namly.se"
                        className="mt-2 inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg py-3 px-4 transition-colors hover:bg-[#2E5C8A]"
                    >
                        <EnvelopeIcon className="h-4 w-4" strokeWidth={1.7} />
                        <span>Kontakta oss: info@namly.se</span>
                    </a>
                </div>
            </div>
        </section>
    );
}