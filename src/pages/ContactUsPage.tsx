import FollowUsSection from "../components/AboutUs/FollowUsSection";
import NewsletterSection from "../components/AboutUs/NewsLetterSection";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactHero from "../components/ContactUs/ContactHero";
import ContactQuickCards from "../components/ContactUs/ContactQuickCards";
import FaqAccordion from "../components/ContactUs/FaqAccordion";
import RatingCard from "../components/ContactUs/Ratingcard";
import TrustPointsCard from "../components/ContactUs/TrustPointsCard";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col px-6 py-16">
      <ContactHero />

      <div className="mt-16">
        <ContactQuickCards />
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <ContactForm />
        </div>
        <div className="flex h-full flex-col gap-6">
          <TrustPointsCard />
          <FollowUsSection />
        </div>
      </div>

      <div className="mt-8">
        <RatingCard />
      </div>

      <div className="mt-16">
        <FaqAccordion />
      </div>

      <div className="mt-16">
        <NewsletterSection />
      </div>
    </div>
  );
}