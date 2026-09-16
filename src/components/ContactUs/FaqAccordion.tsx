import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Hur beställer jag?",
    answer:
      'Skriv in din text, välj färg, typsnitt, bakgrund, motiv och lägg till din varukorg. Klicka sedan på "Till kassan" och följ några enkla instruktioner för att betala och slutföra din beställning.',
  },
  {
    question: "Tips för fina etiketter & namnlappar",
    answer:
      "• Välj en färgkombination med stor kontrast/läsbarhet\n• Välj gärna en bakgrundsfärg eller ett mönster som tas upp av en av färgerna i motivet\n• Använd förnamn på rad 1\n• Ange bara ett telefonnummer per rad då det annars blir väldigt smått och svårläst.\n• Om du väljer bort motiv så blir texten större.\n\nTänk på att den verkliga namnlappen är mindre än den du ser på skärmen! Detta påverkar textens storlek och läsbarheten. Ju färre tecken på raden desto bättre läsbarhet!",
  },
  {
    question: "Kan jag avbryta eller ändra min beställning?",
    answer:
      "Då din beställning processas automatiskt så snart den registrerats i vårt system går det dessvärre inte att göra några ändringar. Var därför noga med att kontrollera beställningen innan du slutför ditt köp.",
  },
  {
    question: "Hur lång är leveranstiden?",
    answer:
      "När din beställning är mottagen skickas en orderbekräftelse. Vi skickar vanligtvis din beställning inom 1-2 arbetsdagar och den levereras inom 2–5 arbetsdagar. Du kan se den specifika leveranstiden på produktsidan eller i kassan.",
  },
  {
    question: "Frakt och leveranssätt",
    answer:
      "Vi skickar varorna med PostNord eller DSV. Fri frakt erbjuds på beställningar över det belopp som anges i varukorgen.",
  },
  {
    question: "Kvalitet & 100% Nöjdhetsgaranti",
    answer:
      "Namly Design erbjuder 100 % nöjdhetsgaranti. Om du av någon anledning inte är nöjd med din produkt skulle vi uppskatta om du kontaktar oss på info@namly.se så att vi kan hjälpa dig. Eftersom våra produkter är tillverkade specifikt efter dina önskemål ersätter eller återbetalar vi inte beställningar som är fel på grund av felstavning eller för att du ångrar din beställning. Inte heller där skador uppstått på grund av normal användning. Då det finns en mängd olika stavningsalternativ för namn, så är det omöjligt för oss att avgöra om det är ett misstag eller en annorlunda bokstavering. Det är därför viktigt att du tittar igenom din beställning en extra gång innan du slutför ditt köp.",
  },
  {
    question: "Produktinformation och skötselråd för namnlappar",
    answer:
      "Materialet i våra namnlappar är valt med omsorg och är av högsta kvalitet! Färgerna som används är snälla och tar hänsyn till både miljö och barn. Observera att våra namnlappar skall fästas på plaggets märkes- eller klädvårdsetikett. Gnugga försiktigt fast klistermärket, var extra noga med hörnen. Namnlapparna tål att användas i tvättmaskin, torktumlare och diskmaskin. Låt gärna namnlappen sitta 24 timmar innan du tvättar. Se till att namnlappen sitter ordentligt och inte går att pilla loss innan barnen använder föremålet. Observera att namnlappen på websidan inte är den verkliga storleken. Färgerna kan variera något beroende på dina datorinställningar.",
  },
  {
    question: "Hur använder jag en rabattkod?",
    answer:
      'Har du en rabattkod anger du koden och klickar på "Använd". Alla rabattkoder har ett utgångsdatum och om det datumet har passerat är rabattkoden inte längre giltig.',
  },
  {
    question: "Fick du inte svar på din fråga? (Kundservice)",
    answer:
      "Om du inte har hittat svar på dina frågor här, är du välkommen att kontakta kundservice via e-post: info@namly.se",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F1ECE3] px-6 py-16">
      <div className="mx-auto max-w-screen-md">
        {/* Eyebrow */}
        <span className="block text-center text-xs font-semibold tracking-wide text-[#5C574E]">
          SNABBA SVAR PÅ VANLIGA FUNDERINGAR
        </span>

        {/* Heading */}
        <h2 className="mt-2 text-center font-serif text-4xl text-[#000000]">
          Vanliga frågor
        </h2>

        {/* Description */}
        <p className="mt-3 text-center text-[15px] text-[#5C574E]">
          Hittar du inte svaret du söker här? Skicka ett meddelande ovan så
          hjälper vi dig direkt!
        </p>

        {/* Accordion items */}
        <div className="mt-8 flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-[#EAE4D8] bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[17px] text-[#2A2620]">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#394150]">
                    {isOpen ? (
                      <MinusIcon className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      <PlusIcon className="h-4 w-4" strokeWidth={2} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="whitespace-pre-line text-[14px] leading-relaxed text-[#5C574E]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}