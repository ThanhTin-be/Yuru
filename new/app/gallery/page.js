"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/* ── Photo Data ───────────────────────────── */
const theViewPhotos = [
  { src: "/imgs/The view-main.jpg", alt: "The View — Main", featured: true },
  { src: "/imgs/The view (2).JPG", alt: "The view 2" },
  { src: "/imgs/The view (3).JPG", alt: "The view 3" },
  { src: "/imgs/The view (4).webp", alt: "The view 4" },
  { src: "/imgs/Brinnon Lost Ship Under The Stars.webp", alt: "Under the stars" },
  { src: "/imgs/The view (3).webp", alt: "The view 3" },
  { src: "/imgs/The view (5).webp", alt: "The view 5" },
  { src: "/imgs/The view (6).webp", alt: "The view 6" },
  { src: "/imgs/The view (7).webp", alt: "The view 7", style: { objectPosition: "center 80%" } },
  { src: "/imgs/Sunrise (waterfront).jpg", alt: "Sunrise" },
  { src: "/imgs/Waterfront-main.jpg", alt: "Waterfront Main" },
  { src: "/imgs/Waterfront (2).jpg", alt: "Waterfront 2" },
  { src: "/imgs/Waterfront (3).jpg", alt: "Waterfront 3" },
  { src: "/imgs/Waterfront (4).jpg", alt: "Waterfront 4" },
  { src: "/imgs/Waterfront (5).jpg", alt: "Waterfront 5" },
  { src: "/imgs/Waterfront.jpg", alt: "Waterfront", style: { objectPosition: "top" } },
  { src: "/imgs/Activities (7).jpg", alt: "Activities 7" },
  { src: "/imgs/Waterfront (6).jpg", alt: "Waterfront 6" },
  { src: "/imgs/Waterfront (7).jpg", alt: "Waterfront 7" },
];

const theExperiencePhotos = [
  { src: "/imgs/activities-main.jpg", alt: "Activities main", featured: true },
  { src: "/imgs/Activities (2).jpg", alt: "Activities 2" },
  { src: "/imgs/Activities (3).jpg", alt: "Activities 3" },
  { src: "/imgs/Activities (5).jpg", alt: "Activities 5" },
  { src: "/imgs/Activities (6).jpg", alt: "Activities 6" },
  { src: "/imgs/Activities (8).jpg", alt: "Activities 8" },
  { src: "/imgs/Activities (9).jpg", alt: "Activities 9" },
  { src: "/imgs/Activities (10).jpg", alt: "Activities 10" },
  { src: "/imgs/Activities (4).jpg", alt: "Activities alt 4" },
  { src: "/imgs/Activities (11).jpg", alt: "Activities 11", style: { objectPosition: "top 60%" } },
  { src: "/imgs/Activities (12).jpg", alt: "Activities 12" },
  { src: "/imgs/Activities (13).jpg", alt: "Activities 13", style: { objectPosition: "center 70%" } },
  { src: "/imgs/The experience.jpg", alt: "The Experience" },
  { src: "/imgs/The experience (2).jpg", alt: "The Experience 2" },
  { src: "/imgs/The experience (3).jpg", alt: "The Experience 3" },
  { src: "/imgs/The experience (4).jpg", alt: "The Experience 4" },
  { src: "/imgs/The experience (5).jpg", alt: "The Experience 5" },
];

const thePropertyPhotos = [
  { src: "/imgs/amenities.jpg", alt: "amenities", featured: true },
  { src: "/imgs/The view (2).webp", alt: "The view 2" },
  { src: "/imgs/Kitchen (2).jpg", alt: "Kitchen Main", style: { objectPosition: "center 100%" } },
  { src: "/imgs/Kitchen (3).jpg", alt: "Kitchen 3" },
  { src: "/imgs/Kitchen.jpg", alt: "Kitchen" },
  { src: "/imgs/Kitchen (2).webp", alt: "Kitchen 2 webp" },
  { src: "/imgs/Tent (2).jpg", alt: "Tent 2" },
  { src: "/imgs/Tent (3).jpg", alt: "Tent 3" },
  { src: "/imgs/Tent (4).jpg", alt: "Tent 4" },
  { src: "/imgs/Kitchen  (2).jpg", alt: "Kitchen alt 2" },
  { src: "/imgs/Kitchen (4).jpg", alt: "Kitchen 4" },
  { src: "/imgs/Kitchen (5).jpg", alt: "Kitchen 5" },
  { src: "/imgs/Kitchen .jpg", alt: "Kitchen alt" },
  { src: "/imgs/Kitchen.webp", alt: "Kitchen webp" },
  { src: "/imgs/Tent (5).jpg", alt: "Tent 5" },
  { src: "/imgs/Tent (6).jpg", alt: "Tent 6" },
  { src: "/imgs/Fire pit.jpg", alt: "Fire pit" },
  { src: "/imgs/Fire pit .webp", alt: "Fire pit 2" },
  { src: "/imgs/Fire pit .jpg", alt: "Fire pit 3" },
  { src: "/imgs/shower.jpg", alt: "Shower" },
  { src: "/imgs/bathroom.jpg", alt: "Bathroom" },
  { src: "/imgs/Tent.jpg", alt: "Tent" },
  { src: "/imgs/Kitchen (2).webp", alt: "Kitchen" },
  { src: "/imgs/The property.jpg", alt: "The Property" },
  { src: "/imgs/The property (1).jpg", alt: "The Property 1" },
  { src: "/imgs/The property (2).jpg", alt: "The Property 2" },
];

const categories = [
  { key: "the-view", name: "The View", nameEm: "View", subtitle: "Sunrise · Hood Canal · Mountains", photos: theViewPhotos },
  { key: "the-experience", name: "The Experience", nameEm: "Experience", subtitle: "Crabbing · Fishing · Kayaking · Stargazing", photos: theExperiencePhotos },
  { key: "the-property", name: "The Property", nameEm: "Property", subtitle: "Elevated tent platforms · BBQ · Decor stove · Blackstone griddle", photos: thePropertyPhotos },
];

/* ── Photo Item Component ───────────────────────────── */
function PhotoItem({ photo, onClick }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-zoom-in border border-white/6 group ${photo.featured ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}
      style={{ background: "rgba(255,255,255,0.03)", isolation: "isolate" }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover block transition-all duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] brightness-[0.9] group-hover:scale-105 group-hover:brightness-75"
        style={photo.style}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350" style={{ background: "linear-gradient(to top, rgba(10,12,8,0.72) 0%, transparent 55%)" }} />
      <p className="absolute bottom-3.5 left-3.5 right-3.5 text-[11px] tracking-[0.1em] uppercase text-white/90 font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-[6px] border border-white/20 flex items-center justify-center text-white/70 opacity-0 scale-[0.8] group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
          <circle cx="6.5" cy="6.5" r="4" />
          <path d="M11 11l3 3" />
        </svg>
      </div>
    </div>
  );
}

/* ── Gallery Content (uses searchParams) ───────────────────────────── */
function GalleryContent() {
  const searchParams = useSearchParams();
  const urlCat = searchParams.get("cat");

  const [filter, setFilter] = useState(urlCat || "all");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const [lbItems, setLbItems] = useState([]);

  useEffect(() => {
    if (urlCat) setFilter(urlCat);
  }, [urlCat]);

  const visibleCategories = filter === "all" ? categories : categories.filter((c) => c.key === filter);
  const totalPhotos = categories.reduce((sum, c) => sum + c.photos.length, 0);

  const openLightbox = useCallback((photo) => {
    const items = visibleCategories.flatMap((c) => c.photos);
    const idx = items.findIndex((p) => p.src === photo.src);
    setLbItems(items);
    setLbIdx(idx >= 0 ? idx : 0);
    setLbOpen(true);
    document.body.style.overflow = "hidden";
  }, [visibleCategories]);

  const closeLightbox = useCallback(() => {
    setLbOpen(false);
    document.body.style.overflow = "";
  }, []);

  const lbNav = useCallback((dir) => {
    setLbIdx((prev) => (prev + dir + lbItems.length) % lbItems.length);
  }, [lbItems.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!lbOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lbNav(1);
      if (e.key === "ArrowLeft") lbNav(-1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lbOpen, closeLightbox, lbNav]);

  const handleFilterClick = (f) => {
    setFilter(f);
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-100 h-[68px] flex items-center justify-between px-[clamp(20px,5vw,72px)] backdrop-blur-[16px] border-b border-white/6" style={{ background: "rgba(14,15,11,0.82)" }}>
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <img src="/imgs/Yuru Logo Characters Only.png" alt="Yuru" className="h-8 w-auto brightness-0 invert opacity-90" />
        </Link>
        <Link href="/#gallery" className="inline-flex items-center gap-2 px-[18px] py-2 border border-white/16 rounded-full text-[12.5px] font-normal tracking-[0.06em] text-white/65 no-underline hover:bg-white/8 hover:text-white hover:border-white/30 transition-all duration-200">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M13 8H3M7 4L3 8l4 4" />
          </svg>
          Back to site
        </Link>
      </header>

      {/* HERO */}
      <div className="relative h-[52vh] min-h-[520px] flex items-end overflow-hidden mt-[68px]" style={{ padding: "0 clamp(20px,5vw,72px) 52px" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a2010 0%, #0e1208 50%, #1c1a14 100%)" }}>
          <img src="/imgs/Waterfront-main.jpg" alt="Yuru Gallery" className="w-full h-[800px] object-cover opacity-45 brightness-[0.6] saturate-[0.7] max-[900px]:h-full max-[900px]:object-[20%_center]" style={{ objectPosition: "center 70%" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,15,11,0.5) 0%, rgba(61,61,60,0.1) 30%, rgba(14,15,11,0.65) 75%, rgba(14,15,11,0.95) 100%)" }} />
        <div className="relative z-2 max-w-[680px]">
          <p className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-amber-light opacity-80 mb-3.5 before:content-['✦'] before:text-[8px]">Yuru · Hood Canal, Washington</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(38px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            Every moment,<br /><em className="italic text-amber-light">captured.</em>
          </h1>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="sticky top-[68px] z-90 backdrop-blur-[16px] border-b border-white/6" style={{ background: "rgba(14,15,11,0.92)", padding: "0 clamp(20px,5vw,72px)" }}>
        <div className="flex overflow-x-auto scrollbar-none" role="tablist">
          {[
            { key: "all", label: "All photos", count: totalPhotos },
            ...categories.map((c) => ({ key: c.key, label: c.key === "the-view" ? "The View" : c.key === "the-experience" ? "The Experience" : "The Property", count: c.photos.length })),
          ].map((tab) => (
            <button
              key={tab.key}
              className={`inline-flex items-center gap-2 px-5 py-[18px] text-[12.5px] font-normal tracking-[0.06em] bg-transparent border-none cursor-pointer whitespace-nowrap border-b-2 transition-all duration-200 ${filter === tab.key ? "text-white border-b-amber-light" : "text-white/42 border-b-transparent hover:text-white/75"}`}
              onClick={() => handleFilterClick(tab.key)}
              role="tab"
            >
              {tab.label}{" "}
              <span className={`text-[10px] px-[7px] py-[2px] rounded-[20px] transition-all duration-200 ${filter === tab.key ? "bg-amber-light/15 text-amber-light" : "bg-white/8 text-white/40"}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY BODY */}
      <main className="max-w-[1400px] mx-auto py-10 pb-20" style={{ padding: "40px clamp(20px,5vw,72px) 80px" }}>
        {visibleCategories.map((cat) => (
          <section key={cat.key} className="mb-14 animate-fade-up">
            <div className="flex items-baseline gap-4 mb-6 pb-3.5 border-b border-white/7">
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,3vw,40px)] font-light tracking-[-0.01em] text-white">
                The <em className="italic text-amber-light">{cat.nameEm}</em>
              </h2>
              <span className="text-[12px] text-white/30 tracking-[0.08em]">{cat.subtitle}</span>
            </div>
            <div className="grid grid-cols-4 gap-2.5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-2 max-[560px]:gap-2">
              {cat.photos.map((photo, i) => (
                <PhotoItem key={i} photo={photo} onClick={() => openLightbox(photo)} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* LIGHTBOX */}
      <div
        className={`fixed inset-0 z-500 flex items-center justify-center transition-opacity duration-300 ${lbOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(5,6,4,0.96)" }}
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
      >
        <button className="absolute top-5 right-6 bg-transparent border-none text-white/55 text-[28px] cursor-pointer w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/8 hover:text-white transition-all duration-200 z-10" onClick={closeLightbox}>✕</button>
        <p className="absolute top-5 left-6 text-[12px] text-white/30 tracking-[0.1em]">
          {lbItems.length > 0 ? `${lbIdx + 1} / ${lbItems.length}` : ""}
        </p>
        <div className="relative max-w-[92vw] max-h-[88vh]">
          <button className="absolute top-1/2 -translate-y-1/2 -left-[72px] max-[900px]:-left-[52px] max-[560px]:-left-[44px] w-[52px] h-[52px] max-[560px]:w-10 max-[560px]:h-10 rounded-full backdrop-blur-[6px] border border-white/12 text-white/65 text-[22px] cursor-pointer flex items-center justify-center hover:bg-white/16 hover:text-white transition-all duration-200" style={{ background: "rgba(255,255,255,0.08)" }} onClick={() => lbNav(-1)}>&#8249;</button>
          {lbItems[lbIdx] && (
            <img
              className={`max-w-[92vw] max-h-[88vh] object-contain rounded-[6px] block transition-transform duration-350 ${lbOpen ? "scale-100" : "scale-95"}`}
              style={{ transition: "opacity 0.15s ease, transform 0.15s ease" }}
              src={lbItems[lbIdx]?.src}
              alt={lbItems[lbIdx]?.alt || ""}
            />
          )}
          <button className="absolute top-1/2 -translate-y-1/2 -right-[72px] max-[900px]:-right-[52px] max-[560px]:-right-[44px] w-[52px] h-[52px] max-[560px]:w-10 max-[560px]:h-10 rounded-full backdrop-blur-[6px] border border-white/12 text-white/65 text-[22px] cursor-pointer flex items-center justify-center hover:bg-white/16 hover:text-white transition-all duration-200" style={{ background: "rgba(255,255,255,0.08)" }} onClick={() => lbNav(1)}>&#8250;</button>
        </div>
      </div>

      {/* MINI FOOTER */}
      <footer className="border-t border-white/6 flex items-center justify-between text-[12px] text-white/20" style={{ padding: "28px clamp(20px,5vw,72px)" }}>
        <span>© 2026 Yuru · Hood Canal, Washington</span>
        <Link href="/" className="text-white/35 no-underline hover:text-white/70 transition-colors duration-200">Back to home →</Link>
      </footer>
    </>
  );
}

/* ── Page Export (wrapped in Suspense for useSearchParams) ── */
export default function GalleryPage() {
  return (
    <div className="font-[family-name:var(--font-dm-sans)] bg-gallery-bg text-white overflow-x-hidden min-h-screen" style={{ fontWeight: 300 }}>
      <Suspense fallback={<div className="min-h-screen bg-gallery-bg" />}>
        <GalleryContent />
      </Suspense>
    </div>
  );
}
