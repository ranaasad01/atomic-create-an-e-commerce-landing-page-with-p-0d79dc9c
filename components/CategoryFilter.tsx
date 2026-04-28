"use client";

import { categories } from "@/lib/products";

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return isActive ? (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-indigo-600 text-white shadow-sm shadow-indigo-200 transition-all duration-200"
          >
            {cat}
          </button>
        ) : (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
