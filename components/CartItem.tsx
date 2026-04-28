"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-0.5">
              {product.category}
            </p>
            <h3 className="font-semibold text-slate-900 text-sm leading-snug">{product.name}</h3>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="text-slate-400 hover:text-rose-500 transition-colors p-1 rounded-lg hover:bg-rose-50 flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-7 h-7 rounded-lg border border-slate-200 hover:border-indigo-300 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-7 h-7 rounded-lg border border-slate-200 hover:border-indigo-300 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <div className="text-right">
            <p className="font-bold text-slate-900 text-sm">
              ${(product.price * quantity).toFixed(2)}
            </p>
            {quantity > 1 && (
              <p className="text-xs text-slate-400">${product.price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
