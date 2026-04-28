export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  image: string;
  badge?: "sale" | "featured" | "new";
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Minimal Arc Sneaker",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 214,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "sale",
    description: "Lightweight everyday sneaker with arch support.",
  },
  {
    id: 2,
    name: "Structured Canvas Tote",
    price: 54.99,
    rating: 4.6,
    reviewCount: 98,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    badge: "featured",
    description: "Durable canvas tote with interior pockets.",
  },
  {
    id: 3,
    name: "Merino Wool Crewneck",
    price: 119.00,
    rating: 4.9,
    reviewCount: 312,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    badge: "featured",
    description: "Ultra-soft merino wool in a relaxed fit.",
  },
  {
    id: 4,
    name: "Polarized Aviator Shades",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 176,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    badge: "sale",
    description: "Classic aviator frame with UV400 protection.",
  },
  {
    id: 5,
    name: "Leather Bifold Wallet",
    price: 49.99,
    rating: 4.7,
    reviewCount: 89,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    badge: "new",
    description: "Full-grain leather with RFID blocking.",
  },
  {
    id: 6,
    name: "Slim Chino Trousers",
    price: 79.00,
    rating: 4.4,
    reviewCount: 143,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    description: "Tailored slim fit in stretch cotton.",
  },
  {
    id: 7,
    name: "Crossbody Leather Bag",
    price: 139.00,
    originalPrice: 179.00,
    rating: 4.8,
    reviewCount: 67,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    badge: "sale",
    description: "Compact crossbody with adjustable strap.",
  },
  {
    id: 8,
    name: "High-Top Canvas Boot",
    price: 109.99,
    rating: 4.6,
    reviewCount: 201,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
    badge: "new",
    description: "Retro-inspired high-top with vulcanized sole.",
  },
];

export const categories = ["All", "Clothing", "Footwear", "Bags", "Accessories"];
