import FollowUsSection from "../components/AboutUs/FollowUsSection";
import FoundersSection from "../components/AboutUs/FoundersSection";
import HelpSection from "../components/AboutUs/HelpSection";
import HeroSection from "../components/AboutUs/HeroSection";
import NewsletterSection from "../components/AboutUs/NewsLetterSection";
import SortimentSection from "../components/AboutUs/SortimentSection";
import ValuesSection from "../components/AboutUs/ValuesSection";

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

            <NewsletterSection />
        </>
    )
}