import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: koppla till er nyhetsbrevstjänst/API
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="mx-auto max-w-screen-md rounded-2xl border border-[#EAE4D8] bg-[#F1ECE3] p-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#394150]">
        <EnvelopeIcon className="h-5 w-5 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="mt-3 font-serif text-2xl text-[#2A2620]">
        Missa inget
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#5C574E]">
        Glöm inte att prenumerera på vårt nyhetsbrev för exklusiva
        uppdateringar och erbjudanden direkt i din inbox!
      </p>

      {subscribed ? (
        <p className="mt-4 text-sm font-semibold text-[#2A2620]">
          Tack! Du är nu anmäld.
        </p>
      ) : (
        <form
          onSubmit={handleSubscribe}
          className="mt-4 flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.se"
            className="w-full rounded-lg border border-[#E4DED2] bg-white px-4 py-3 text-sm text-[#2A2620] placeholder-[#8A8478] outline-none transition-colors focus:border-[#C17752]"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[#C17752] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#B06A47]"
          >
            Prenumerera
          </button>
        </form>
      )}
    </div>
  );
}