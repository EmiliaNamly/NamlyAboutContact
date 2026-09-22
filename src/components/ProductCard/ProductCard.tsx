import { HeartIcon, PencilIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  StarIcon,
} from "@heroicons/react/24/solid";

export type ProductBadge = {
  type: "discount" | "popular";
  label: string;
};

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  satisfiedCustomers?: number;
  delivery: string;
  badge?: ProductBadge;
  favorited?: boolean;
  onToggleFavorite?: () => void;
  onCustomize?: () => void;
}

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating,
  reviews,
  satisfiedCustomers,
  delivery,
  badge,
  favorited = false,
  onToggleFavorite,
  onCustomize,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="relative aspect-[4/3]">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        {badge && (
          <span
            className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold text-white ${
              badge.type === "discount" ? "bg-red-700" : "bg-slate-900/90"
            }`}
          >
            {badge.label}
          </span>
        )}

        <button
          onClick={onToggleFavorite}
          aria-label="Lägg till favorit"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"
        >
          {favorited ? (
            <HeartIconSolid className="h-4 w-4 text-red-600" />
          ) : (
            <HeartIcon className="h-4 w-4 text-slate-500" />
          )}
        </button>
      </div>

      {/* Info */}
      <div className="space-y-2 p-4">
        <h3 className="text-sm font-medium leading-snug text-slate-900">
          {title}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-xs text-slate-500">Från</span>
          <span
            className={`text-lg font-bold ${
              oldPrice ? "text-red-600" : "text-slate-900"
            }`}
          >
            {price},00 kr
          </span>
          {oldPrice && (
            <span className="text-sm text-slate-400 line-through">
              {oldPrice},00 kr
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm">
          <StarIcon className="h-3.5 w-3.5 text-amber-400" />
          {satisfiedCustomers ? (
            <span className="font-medium text-slate-900">
              {satisfiedCustomers}+ nöjda kunder
            </span>
          ) : (
            <>
              <span className="font-medium text-slate-900">{rating}</span>
              <span className="text-slate-500">({reviews} omdömen)</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-sm text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Leverans {delivery}
        </div>

        <button
          onClick={onCustomize}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <PencilIcon className="h-3.5 w-3.5" />
          ANPASSA
        </button>
      </div>
    </div>
  );
}
