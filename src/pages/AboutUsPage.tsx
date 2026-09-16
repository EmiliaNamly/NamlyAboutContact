import FollowUsSection from "../components/about-us/FollowUsSection";
import FoundersSection from "../components/about-us/FoundersSection";
import HelpSection from "../components/about-us/HelpSection";
import HeroSection from "../components/about-us/HeroSection";
import SortimentSection from "../components/about-us/SortimentSection";
import ValuesSection from "../components/about-us/ValuesSection";

export default function AboutUsPage() {
    return (
        <>
            <HeroSection />
            <FoundersSection />
            <SortimentSection />
            <ValuesSection />

            <section className="bg-white text-[#1f2933] py-6">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <HelpSection />
                    <FollowUsSection />
                </div>
            </section>
        </>
    )
}