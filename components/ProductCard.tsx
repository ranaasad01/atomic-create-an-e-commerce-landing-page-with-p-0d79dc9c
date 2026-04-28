"use client";

import Image from "next/image";
import { ShoppingCart, Star, Check } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

type Props = { product: Product };

function starClass(filled: boolean): string {
  if (filled) return "w-3.5 h-3.5 fill-amber-400 text-amber-400";
  return "w-3.5 h-3.5 fill-slate-200 text-slate-200";
}

function getBadgeClass(badge: string): string {
  if (badge === "sale") return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500 text-white";
  if (badge === "featured") return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white";
  return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white";
}

function getBadgeLabel(badge: string): string {
  if (badge === "sale") return "Sale";
  if (badge === "featured") return "Featured";
  return "New";
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-100 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span className={getBadgeClass(product.badge)}>
            {getBadgeLabel(product.badge)}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-rose-100 text-rose-600 px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-1">{product.description}</p>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            <Star className={starClass(product.rating >= 1)} />
            <Star className={starClass(product.rating >= 2)} />
            <Star className={starClass(product.rating >= 3)} />
            <Star className={starClass(product.rating >= 4)} />
            <Star className={starClass(product.rating >= 5)} />
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {added ? (
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-emerald-500 text-white"
          >
            <Check className="w-4 h-4" />
            Added!
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 text-white hover:-translate-y-0.5 shadow-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
