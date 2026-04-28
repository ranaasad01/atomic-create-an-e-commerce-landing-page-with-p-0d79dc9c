"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export default function OrderSummary() {
  const { subtotal, totalItems } = useCart();
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-5">Order Summary</h2>

      <div className="space-y-3 text-sm mb-5">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-emerald-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        {subtotal > 0 && subtotal < 75 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
            Add <strong>${(75 - subtotal).toFixed(2)}</strong> more for free shipping!
          </div>
        )}
        {subtotal >= 75 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-medium">
            You qualify for free shipping!
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 pt-4 mb-5">
        <div className="flex justify-between font-bold text-slate-900">
          <span>Total</span>
          <span className="text-lg">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:-translate-y-0.5 mb-3">
        Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
      >
        <ShoppingCart className="w-4 h-4" />
        Continue Shopping
      </Link>

      <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-slate-400">
        <Lock className="w-3 h-3" />
        Secure checkout — SSL encrypted
      </div>
    </div>
  );
}
