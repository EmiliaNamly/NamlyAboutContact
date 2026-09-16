import ContactForm from "../components/ContactUs/ContactForm";
import ContactHero from "../components/ContactUs/ContactHero";
import ContactQuickCards from "../components/ContactUs/ContactQuickCards";
import ContactSidebar from "../components/ContactUs/ContactSidebar";
import NewsletterBox from "../components/ContactUs/NewsletterBox";
import FaqAccordion from "../components/ContactUs/FaqAccordion";

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
          <NewsletterBox />
        </div>
        <div className="flex h-full flex-col">
          <ContactSidebar />
        </div>
      </div>

      <div className="mt-16">
        <FaqAccordion />
      </div>
    </div>
  );
}
