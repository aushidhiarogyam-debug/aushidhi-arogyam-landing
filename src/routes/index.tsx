import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Leaf, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";

import logoAsset from "../assets/aushidhi-logo.jpg.asset.json";
import imgFaceWash from "../assets/products/skincare-facewash.jpg";
import imgGlowOil from "../assets/products/skincare-glowoil.jpg";
import imgMoisturizer from "../assets/products/skincare-moisturizer.jpg";
import imgHairOil from "../assets/products/haircare-oil.jpg";
import imgShampoo from "../assets/products/haircare-shampoo.jpg";
import imgSerum from "../assets/products/haircare-serum.jpg";
import imgVitality from "../assets/products/men-vitality.jpg";
import imgTonic from "../assets/products/men-tonic.jpg";
import imgSlimTea from "../assets/products/weight-tea.jpg";
import imgDetox from "../assets/products/weight-detox.jpg";
import imgChyawanprash from "../assets/products/immunity-chyawanprash.jpg";
import imgTurmeric from "../assets/products/immunity-turmeric.jpg";
import imgSoap from "../assets/products/personal-soap.jpg";
import imgBodyOil from "../assets/products/personal-bodyoil.jpg";

// Replace with your business WhatsApp number (with country code, no + or spaces).
const WHATSAPP_NUMBER = "919999999999";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aushidhi Aarogyam Pvt. Ltd. | Herbal Wellness Products" },
      {
        name: "description",
        content:
          "Aushidhi Aarogyam offers pure herbal products for skincare, haircare, men's wellness, weight management, and everyday health. Natural care, rooted in tradition.",
      },
      { property: "og:title", content: "Aushidhi Aarogyam Pvt. Ltd. | Herbal Wellness Products" },
      {
        property: "og:description",
        content:
          "Pure herbal products for skincare, haircare, men's wellness, weight management, and everyday health.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
};

const categoryDescriptions: Record<string, string> = {
  Skincare:
    "Gentle, plant-based cleansers, oils, and creams that nourish your skin without harsh chemicals.",
  Haircare:
    "Strengthening oils and cleansers made with traditional herbs to support healthy hair and scalp.",
  "Men's Wellness":
    "Natural supplements and wellness blends crafted to support energy, stamina, and daily vitality.",
  "Weight Management":
    "Herbal teas, juices, and supplements to support digestion, metabolism, and a balanced lifestyle.",
  "Immunity & Health":
    "Everyday immunity boosters and wellness tonics made from time-tested natural ingredients.",
  "Personal Care":
    "Safe, natural daily-care essentials for the whole family, free from harmful additives.",
};

const products: Product[] = [
  {
    name: "Herbal Face Wash",
    category: "Skincare",
    description: "A gentle daily cleanser with neem and tulsi that removes impurities without drying the skin.",
    image: imgFaceWash,
  },
  {
    name: "Skin Glow Oil",
    category: "Skincare",
    description: "A nourishing facial oil blend that supports an even, naturally radiant complexion.",
    image: imgGlowOil,
  },
  {
    name: "Natural Moisturizing Cream",
    category: "Skincare",
    description: "Lightweight herbal cream with aloe vera for soft, hydrated skin all day.",
    image: imgMoisturizer,
  },
  {
    name: "Herbal Hair Oil",
    category: "Haircare",
    description: "Traditional amla-based oil that strengthens roots and supports healthy hair growth.",
    image: imgHairOil,
  },
  {
    name: "Amla Shampoo",
    category: "Haircare",
    description: "Mild, sulphate-free cleanser with amla and shikakai for clean, shiny hair.",
    image: imgShampoo,
  },
  {
    name: "Hair Growth Serum",
    category: "Haircare",
    description: "Concentrated herbal serum with rosemary and hibiscus to nourish the scalp.",
    image: imgSerum,
  },
  {
    name: "Vitality Capsules",
    category: "Men's Wellness",
    description: "Ashwagandha-based capsules crafted to support energy, stamina, and daily vitality.",
    image: imgVitality,
  },
  {
    name: "Herbal Energy Tonic",
    category: "Men's Wellness",
    description: "A daily wellness tonic with traditional herbs to fight fatigue and support strength.",
    image: imgTonic,
  },
  {
    name: "Slimming Herbal Tea",
    category: "Weight Management",
    description: "A refreshing green tea blend that supports metabolism and healthy digestion.",
    image: imgSlimTea,
  },
  {
    name: "Herbal Detox Powder",
    category: "Weight Management",
    description: "A natural detox blend that helps cleanse the system and support gut health.",
    image: imgDetox,
  },
  {
    name: "Chyawanprash",
    category: "Immunity & Health",
    description: "The classic amla-rich herbal jam for everyday immunity and overall strength.",
    image: imgChyawanprash,
  },
  {
    name: "Turmeric Capsules",
    category: "Immunity & Health",
    description: "Pure curcumin-rich turmeric capsules to support immunity and joint health.",
    image: imgTurmeric,
  },
  {
    name: "Natural Herbal Soap",
    category: "Personal Care",
    description: "Handmade soap with neem and herbs — gentle cleansing for the whole family.",
    image: imgSoap,
  },
  {
    name: "Herbal Body Oil",
    category: "Personal Care",
    description: "A light, fast-absorbing body oil with coconut and jasmine for soft, healthy skin.",
    image: imgBodyOil,
  },
];

const categoryNames = Object.keys(categoryDescriptions);

const highlights = [
  "100% herbal & natural ingredients",
  "No harmful chemicals",
  "Trusted traditional formulas",
  "Direct WhatsApp ordering",
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Aushidhi Aarogyam logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-semibold leading-tight text-foreground">Aushidhi Aarogyam</span>
            <span className="text-xs text-muted-foreground">Pvt. Ltd.</span>
          </div>
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#products"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Order Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-16 lg:py-24 border-b border-border bg-gradient-to-b from-background to-accent/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              Pure Herbal Wellness
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Natural Care for a Healthier You
            </h1>
            <p className="mt-5 text-balance text-lg text-muted-foreground">
              Aushidhi Aarogyam brings you trusted herbal products for skincare, haircare, men's wellness,
              weight management, and everyday health — simple, effective, and rooted in nature.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ShoppingBag className="h-5 w-5" />
                Browse Products
              </a>
              <a
                href={whatsappLink("Hi Aushidhi Aarogyam, I want to know more about your products.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Phone className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex w-full max-w-sm justify-center rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border lg:max-w-md">
            <img
              src={logoAsset.url}
              alt="Aushidhi Aarogyam herbal wellness logo"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-b border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            Choose a category to see its products. Tap any product to ask about availability, pricing, or
            place an order directly on WhatsApp.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", ...categoryNames].map((name) => {
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActiveCategory(name)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-accent"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        {activeCategory !== "All" && (
          <p className="mx-auto mb-8 max-w-2xl text-balance text-center text-sm text-muted-foreground">
            {categoryDescriptions[activeCategory]}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden bg-accent/30">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <Leaf className="h-3 w-3" />
                  {product.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{product.name}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href={whatsappLink(
                    `Hi Aushidhi Aarogyam, I am interested in ${product.name} (${product.category}). Please share price and details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Enquire on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-border bg-accent/30">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to Order?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
          Have questions or want to place an order? Message us on WhatsApp and we will get back to you
          quickly with product details, pricing, and delivery information.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink("Hi Aushidhi Aarogyam, I would like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" />
            Message on WhatsApp
          </a>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-background"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Aushidhi Aarogyam"
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-semibold text-foreground">Aushidhi Aarogyam Pvt. Ltd.</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aushidhi Aarogyam Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Highlights />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
