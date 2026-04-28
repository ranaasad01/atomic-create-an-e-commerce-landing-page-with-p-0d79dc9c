import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            Summer Sale — Up to 40% Off
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Style That Speaks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              For Itself
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
            Discover our curated collection of premium clothing, footwear, and accessories — designed for the modern wardrobe.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Cart
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-pink-400 border-2 border-slate-900" />
                <div className="w-7 h-7 rounded-full bg-violet-400 border-2 border-slate-900" />
                <div className="w-7 h-7 rounded-full bg-sky-400 border-2 border-slate-900" />
                <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-slate-900" />
              </div>
              <span>12k+ happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="ml-1">4.9 avg rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
