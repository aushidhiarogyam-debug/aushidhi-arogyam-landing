import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Leaf, ShoppingBag, ArrowRight, Check, Sparkles } from "lucide-react";

import logo from "../assets/logo.jpeg";
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
const WHATSAPP_NUMBER = "919654706991";

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

const heroImages = [
  { src: imgGlowOil, alt: "Skin Glow Oil", label: "Skincare" },
  { src: imgHairOil, alt: "Herbal Hair Oil", label: "Haircare" },
  { src: imgChyawanprash, alt: "Chyawanprash", label: "Immunity" },
  { src: imgSlimTea, alt: "Slimming Herbal Tea", label: "Wellness" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Aushidhi Aarogyam logo"
            className="h-14 w-auto rounded-full object-contain sm:h-11"
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-lg font-bold leading-tight text-foreground">
              Aushidhi Aarogyam
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Pvt. Ltd.
            </span>
          </div>
        </a>
        <nav className="flex items-center gap-1 sm:gap-3">
          <a
            href="#products"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
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
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/50 via-background to-background">
      {/* soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Pure Herbal Wellness
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Natural Care for a{" "}
            <span className="relative inline-block text-primary">
              Healthier You
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full text-sage"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C60 3 160 3 217 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Aushidhi Aarogyam brings you trusted herbal products for skincare, haircare, men's
            wellness, weight management, and everyday health — simple, effective, and rooted in
            nature.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Browse Products
            </a>
            <a
              href={whatsappLink("Hi Aushidhi Aarogyam, I want to know more about your products.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
            >
              <Phone className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* product imagery woven into the hero */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {heroImages.map((img, i) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                i % 2 === 1 ? "sm:translate-y-5" : ""
              }`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={768}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-deep py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/25">
                <Check className="h-4 w-4 text-sage" />
              </span>
              <span className="text-sm font-medium text-deep-foreground">{item}</span>
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
    <section id="products" className="scroll-mt-20 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Collection
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Products
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-sage" />
          <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-muted-foreground">
            Choose a category to see its products. Tap any product to ask about availability,
            pricing, or place an order directly on WhatsApp.
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
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        {activeCategory !== "All" && (
          <p className="mx-auto mb-10 max-w-2xl text-balance text-center text-sm italic leading-relaxed text-muted-foreground">
            {categoryDescriptions[activeCategory]}
          </p>
        )}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  <Leaf className="h-3 w-3" />
                  {product.category}
                </span>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href={whatsappLink(
                    `Hi Aushidhi Aarogyam, I am interested in ${product.name} (${product.category}). Please share price and details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-transparent px-4 py-2.5 text-sm font-medium text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
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
    <section id="contact" className="relative overflow-hidden bg-deep py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Get In Touch
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-foreground sm:text-4xl">
          Ready to Order?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-deep-foreground/70">
          Have questions or want to place an order? Message us on WhatsApp and we will get back to
          you quickly with product details, pricing, and delivery information.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink("Hi Aushidhi Aarogyam, I would like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3.5 text-base font-semibold text-deep shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Message on WhatsApp
          </a>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/30 px-8 py-3.5 text-base font-medium text-deep-foreground transition-all hover:-translate-y-0.5 hover:border-deep-foreground/60"
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
    <footer className="border-t border-deep-foreground/10 bg-deep py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Aushidhi Aarogyam"
              className="h-14 w-auto rounded-full bg-background object-contain p-0.5"
            />
            <span className="font-serif text-sm font-bold text-deep-foreground">
              Aushidhi Aarogyam Pvt. Ltd.
            </span>
          </div>
          <p className="text-center text-sm text-deep-foreground/60">
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
