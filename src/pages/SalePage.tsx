import CampaignHero from "../components/Kampanjsida/CampaignSection";


export default function CampaignPage() {
  return (
    <div>
      <CampaignHero
        headingPrefix="Upp till"
        headingHighlight="40% rabatt"
        headingSuffix="på namnlappar, posters & kakeldekor"
        description="Just nu: utvalda namnlappar, posters, väggdekor och kakeldekor till nedsatta priser — så länge lagret räcker."
        ctaLabel="SE ALLA ERBJUDANDEN ↓"
        countdown={{
          days: 3,
          hours: 14,
          minutes: 27,
          endLabel: "Kampanjen avslutas söndag 23:59",
        }}
      />
      {/* Här kommer filter-pills och produktgrid senare */}
    </div>
  );
}