import ProductsCard from "../components/ProductCard/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="mb-6 text-3xl font-bold">Produkter</h1>
      <h2 className="mb-6 text-3xl font-bold">Sale</h2>
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
      <h2 className="mb-6 text-3xl font-bold">Standard</h2>
      <ProductsCard
        image="https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/5/7/5736.jpeg"
        title="Kakelklistermärke - Marmor / Ljusrosa och beige / Skala och sticka / 24 st"
        price={195}
        rating={4.9}
        reviews={203}
        delivery="3–5 dagar"
        badge={{ type: "popular", label: "POPULÄR JUST NU" }}
      />

      <h2 className="mb-6 text-3xl font-bold">Without stars</h2>

      <ProductsCard
        image="https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/2/1/2160.png"
        title="Kakelklistermärke - Vintage kakeldekaler / Grön / 24 st"
        price={239}
        satisfiedCustomers={86}
        delivery="2–4 dagar"
      />
    </div>
  );
}
