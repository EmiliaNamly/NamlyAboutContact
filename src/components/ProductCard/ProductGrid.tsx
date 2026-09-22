import type { ProductCardProps } from "./ProductCard";
import ProductsCard from "./ProductCard";


type Product = ProductCardProps & { id: number };

const products: Product[] = [
  {
    id: 1,
    image: "https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/c/o/codex-bild_17_sep._2026_13_07_36.png",
    title: "Kakelklistermärken – Vinröd och beige randig / 24 st",
    price: 156,
    oldPrice: 195,
    rating: 4.8,
    reviews: 24,
    delivery: "2–4 dagar",
    badge: { type: "discount", label: "-20 %" },
  },
  {
    id: 2,
    image: "https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/2/1/2160.png",
    title: "Kakelklistermärke - Vintage kakeldekaler / Grön / 24 st",
    price: 195,
    rating: 4.6,
    reviews: 158,
    delivery: "2–4 dagar",
  },
  {
    id: 3,
    image: "https://www.namly.se/media/catalog/product/cache/03a118bc93071e337bc71b1aaa0c6727/5/7/5736.jpeg",
    title: "Kakelklistermärke – Mönstrad / Salviagrön / 24 st",
    price: 195,
    rating: 4.9,
    reviews: 203,
    delivery: "3–5 dagar",
    badge: { type: "popular", label: "POPULÄR JUST NU" },
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, ...cardProps }) => (
        <ProductsCard
          key={id}
          {...cardProps}
          onToggleFavorite={() => console.log("favorite", id)}
          onCustomize={() => console.log("customize", id)}
        />
      ))}
    </div>
  );
}