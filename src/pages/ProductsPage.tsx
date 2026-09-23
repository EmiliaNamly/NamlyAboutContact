import ProductsCard from "../components/ProductCard/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="mb-6 text-3xl font-bold">Produkter</h1>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        <ProductsCard
          image="https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/c/o/codex-bild_17_sep._2026_13_07_36.png"
          title="Kakelklistermärken – Vinröd och beige randig / 24 st"
          price={156}
          oldPrice={195}
          rating={4.8}
          reviews={24}
          delivery="2–4 dagar"
          
          badge={{ type: "discount", label: "-20 %" }}
        />

        <ProductsCard
          image="https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/5/7/5736.jpeg"
          title="Kakelklistermärke - Marmor / Ljusrosa och beige / Skala och sticka / 24 st"
          price={195}
          rating={4.9}
          reviews={203}
          delivery="3–5 dagar"
          sizeInfo="Flera storlekar"
          badge={{ type: "popular", label: "POPULÄR JUST NU" }}
        />

        <ProductsCard
          image="https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/2/1/2160.png"
          title="Kakelklistermärke - Vintage kakeldekaler / Grön / 24 st"
          price={239}
          satisfiedCustomers={86}
          delivery="2–4 dagar"
        />

        <ProductsCard
          image="https://www.namly.se/media/catalog/product/cache/7dc57066311f5a329f606bebc4c29857/w/p/wpprublwodss2150814535_006.jpg"
          title="Tapet – Blommig Beige / Kök & våtrum"
          price={249}
          trustLabel="Testad kvalitet"
          delivery="4–6 dagar"
        />
      </div>
    </div>
  );
}
