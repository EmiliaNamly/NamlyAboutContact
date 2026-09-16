import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  orderNumber: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: koppla till er endpoint/API
    console.log(form);
  };

  const inputClasses =
    "w-full rounded-lg border border-[#E4DED2] bg-[#F1ECE3] px-4 py-3 text-[#2A2620] placeholder-[#8A8478] outline-none transition-colors focus:border-[#C17752]";

  return (
    <div className="mx-4 w-auto rounded-2xl border border-[#EAE4D8] bg-white p-6 sm:mx-0 sm:w-full sm:p-10">
      {/* Eyebrow */}
      <span className="text-xs font-semibold tracking-wide text-[#394150]">
        SKRIV TILL OSS
      </span>

      {/* Heading */}
      <h2 className="mt-2 font-serif text-4xl text-[#2A2620]">
        Skicka ett meddelande
      </h2>

      {/* Description */}
      <p className="mt-3 text-[15px] text-[#5C574E]">
        Fyll i formuläret nedan så återkommer vi inom 24 timmar under
        vardagar.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {/* Namn + E-post */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#2A2620]">
              Ditt namn *
            </label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Anna Andersson"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#2A2620]">
              E-postadress *
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="namn@exempel.se"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Ordernummer + Ämne */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#2A2620]">
              Ordernummer{" "}
              <span className="font-normal text-[#8A8478]">(Frivilligt)</span>
            </label>
            <input
              name="orderNumber"
              type="text"
              value={form.orderNumber}
              onChange={handleChange}
              placeholder="T.ex. NAM-8921"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#2A2620]">
              Ämne *
            </label>
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className={`${inputClasses} appearance-none`}
            >
              <option value="" disabled>
                Välj vad ditt ärende gäller
              </option>
              <option value="bestallning">Beställning</option>
              <option value="retur">Retur &amp; byte</option>
              <option value="produkt">Produktfråga</option>
              <option value="ovrigt">Övrigt</option>
            </select>
          </div>
        </div>

        {/* Meddelande */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#2A2620]">
            Ditt meddelande *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Berätta hur vi kan hjälpa dig på bästa sätt..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Footer: policy + submit */}
        <div className="mt-2 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[#8A8478]">
            Vi behandlar dina personuppgifter varsamt enligt vår{" "}
            <a href="#" className="underline">
              integritetspolicy
            </a>
            .
          </p>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#394150] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-black"
          >
            SKICKA MEDDELANDE
          </button>
        </div>
      </form>
    </div>
  );
}