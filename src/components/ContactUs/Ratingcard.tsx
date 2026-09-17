import { useState } from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function RatingCard() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-62 rounded-2xl border border-[#EAE4D8] bg-white p-6 shadow-lg">
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Stäng"
        className="absolute right-3 top-3 rounded-full p-1 text-[#9B9585] transition-colors hover:bg-[#F5F1E8] hover:text-[#2A2620]"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>

      <div className="flex items-start justify-between pr-6">
        <span className="text-xs font-semibold tracking-wide text-[#C17752]">
          KUNDOMDÖME
        </span>
        <span className="flex items-center gap-1 rounded-full border border-[#EAE4D8] px-3 py-1 text-xs font-semibold text-[#5C574E]">
          <StarIcon className="h-3.5 w-3.5 text-[#F5A524]" />
          LIPSCORE
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-3xl font-semibold text-[#2A2620]">4.2</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className="h-4 w-4 text-[#F5A524]" />
          ))}
          <StarIcon className="h-4 w-4 text-[#E4DED2]" />
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#5C574E]">
        Baserat på{" "}
        <span className="font-semibold text-[#2A2620]">
          1 403 oberoende kundbetyg
        </span>
      </p>
    </div>
  );
}