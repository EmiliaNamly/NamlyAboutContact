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
            <HelpSection />
            <FollowUsSection />
        </>
    )
}