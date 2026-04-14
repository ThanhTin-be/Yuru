"use client";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (!menuOpen) {
      setMenuOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      closeMenu();
    }
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-100 px-12 py-[1.2rem] flex items-center justify-between bg-cream/88 backdrop-blur-[12px] border-b border-sand/30 transition-[background] duration-300 max-md:px-6 max-md:py-4">
        <a className="font-[family-name:var(--font-cormorant)] text-[1.6rem] font-medium tracking-[0.04em] text-forest no-underline flex items-center gap-2" href="#">
          <img src="/imgs/Yuru Logo Characters Only.png" alt="Yuru" style={{ height: "36px", width: "auto" }} />
        </a>
        <ul className="flex gap-10 list-none items-center max-md:hidden">
          <li><a href="#about" className="no-underline text-charcoal text-[0.82rem] tracking-[0.12em] uppercase font-normal opacity-75 hover:opacity-100 transition-opacity duration-200">About</a></li>
          <li><a href="#gallery" className="no-underline text-charcoal text-[0.82rem] tracking-[0.12em] uppercase font-normal opacity-75 hover:opacity-100 transition-opacity duration-200">The Property</a></li>
          <li><a href="#mission" className="no-underline text-charcoal text-[0.82rem] tracking-[0.12em] uppercase font-normal opacity-75 hover:opacity-100 transition-opacity duration-200">Our Mission</a></li>
          <li><Link href="/reserve" className="no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal bg-forest! text-cream! px-[1.4rem] py-[0.55rem] rounded-[2px] opacity-100! hover:bg-forest-mid! transition-[background] duration-200">Reserve</Link></li>
        </ul>
        {/* Hamburger */}
        <button
          className="hidden max-md:flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1 z-200 relative"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-[22px] h-[1.5px] bg-charcoal rounded-[2px] transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-charcoal rounded-[2px] transition-all duration-300 origin-center ${menuOpen ? "opacity-0 w-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-charcoal rounded-[2px] transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE NAV OVERLAY ── */}
      <div
        className={`fixed inset-0 z-150 bg-cream/97 backdrop-blur-[16px] flex-col items-center justify-center ${menuOpen ? "flex opacity-100" : "hidden opacity-0"}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-[1.2rem] right-6 w-10 h-10 bg-transparent border border-sand/40 rounded-full cursor-pointer flex items-center justify-center text-charcoal text-[1.2rem] hover:bg-sand/20 hover:border-sand transition-all duration-200"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &#x2715;
        </button>
        <ul className="list-none text-center flex flex-col w-full">
          <li><a href="#about" onClick={closeMenu} className="block px-8 py-[1.1rem] font-[family-name:var(--font-cormorant)] text-[1.8rem] font-light text-charcoal no-underline tracking-[0.03em] border-b border-sand/25 first:border-t hover:text-forest transition-colors duration-200">About</a></li>
          <li><a href="#gallery" onClick={closeMenu} className="block px-8 py-[1.1rem] font-[family-name:var(--font-cormorant)] text-[1.8rem] font-light text-charcoal no-underline tracking-[0.03em] border-b border-sand/25 hover:text-forest transition-colors duration-200">The Property</a></li>
          <li><a href="#mission" onClick={closeMenu} className="block px-8 py-[1.1rem] font-[family-name:var(--font-cormorant)] text-[1.8rem] font-light text-charcoal no-underline tracking-[0.03em] border-b border-sand/25 hover:text-forest transition-colors duration-200">Our Mission</a></li>
        </ul>
        <a href="#book" onClick={closeMenu} className="mt-6 bg-forest text-cream! px-10 py-[0.9rem] rounded-[2px] font-[family-name:var(--font-jost)]! text-[0.82rem]! tracking-[0.12em] uppercase no-underline inline-block hover:bg-forest-mid transition-[background] duration-200">Reserve</a>
      </div>

      {/* ── HERO ── */}
      <section
        className="min-h-screen bg-charcoal bg-cover bg-no-repeat flex flex-col items-center justify-center text-center p-8 relative max-md:bg-cover max-md:bg-center md:bg-[length:100%_auto] md:bg-[position:70%_30%]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(44, 74, 41, 0.28) 0%, rgba(42, 42, 36, 0.52) 100%), url('/imgs/The view (3).JPG')`,
        }}
      >
        <p className="text-[0.75rem] tracking-[0.2em] uppercase text-cream/75 font-normal mb-6 animate-fade-up max-md:tracking-[0.1em] max-md:text-[0.65rem]">YuRu · Brinnon, WA · Hood Canal</p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,8vw,6.5rem)] font-light leading-[1.05] text-off-white tracking-[-0.01em] mb-4" style={{ animation: "fadeUp 0.9s 0.15s ease both" }}>
          Unplug<br />Slow down<br /><em className="italic text-sand-light">Simply relax</em>
        </h1>
        <p className="text-base text-cream/80 max-w-[420px] tracking-[0.04em] mb-10" style={{ animation: "fadeUp 1s 0.3s ease both" }}>
          A private beach on Washington&apos;s only saltwater fjord. A glamping retreat kept for family and close friends — by invitation only. Nothing rushed. Nothing wasted. Just the water and the people you love. Every booking benefits the{" "}
          <a href="https://ducfoundation.org" target="_blank" className="text-sand-light underline underline-offset-[3px]" style={{ textDecorationColor: "rgba(221, 208, 186, 0.5)" }}>
            <strong className="font-normal">Đức Foundation.</strong>
          </a>
        </p>
        <div className="flex gap-4 flex-wrap justify-center" style={{ animation: "fadeUp 1s 0.45s ease both" }}>
          <a href="#book" className="bg-forest text-cream px-[2.2rem] py-[0.85rem] rounded-[2px] no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal border border-transparent hover:bg-forest-mid hover:-translate-y-[1px] transition-all duration-200">Reserve Your Stay</a>
          <a href="#amenities" className="bg-transparent text-off-white px-[2.2rem] py-[0.85rem] rounded-[2px] no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal border border-cream/45 hover:border-cream/85 hover:-translate-y-[1px] transition-all duration-200">Explore the Property</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-off-white py-24 px-8 max-md:py-16 max-md:px-6" id="about">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-10">
            <div>
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-forest-light font-normal mb-4">Welcome</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-charcoal mb-6">Xin chào from<br /><em className="italic text-forest-mid">Hood Canal</em></h2>
              <div className="w-12 h-px bg-sand my-6" />
              <p className="text-text-muted mb-[1.2rem] text-[0.97rem] font-[family-name:var(--font-jost)] font-light leading-[1.7]">We&apos;re Linh &amp; Trang. YuRu isn&apos;t a business — it&apos;s an invitation. A place we built to share this quiet corner of the canal with the family and friends who need to exhale.</p>
              <p className="text-text-muted mb-[1.2rem] text-[0.97rem] font-[family-name:var(--font-jost)] font-light leading-[1.7]"><strong className="font-medium text-charcoal">ゆる [Yu-Ru]</strong> is a Japanese word for a relaxed, carefree vibe. That&apos;s the feeling we hope you carry home.</p>
              <p className="text-text-muted mb-[1.2rem] text-[0.97rem] font-[family-name:var(--font-jost)] font-light leading-[1.7]">We keep things grounded and eco-minded here: private well water, real dishes over disposables, and a genuine care for the land we&apos;re lucky enough to call our own.</p>
              <div className="mt-[1.6rem] relative inline-block">
                <span className="font-[family-name:var(--font-sacramento)] text-[2rem] text-forest inline-block whitespace-nowrap leading-[1.4] max-md:text-[1.5rem]" style={{ clipPath: "inset(0 100% 0 0)", animation: "sigWrite 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}>Daniel Linh &amp; Anna Trang</span>
                <span className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-[1.8rem] bg-forest rounded-[1px]" style={{ animation: "sigPenMove 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" }} />
              </div>
            </div>
            <div className="relative">
              <div className="w-full mx-auto pb-[105%] rounded-[4px] relative" style={{ background: "url('/imgs/Trang&Linh(2).jpg') 25% center / cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="p-0 relative" id="experiences">
        <div className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden max-md:min-h-[60vh]">
          <img
            className="absolute inset-0 w-full h-full object-cover block transition-transform duration-[8s] ease-linear md:object-[center_60%] max-md:object-[25%]"
            src="/imgs/main.jpg"
            alt="Chartered fishing and crabbing on Hood Canal"
            style={{ transform: "scale(1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(20, 35, 18, 0.1) 0%, transparent 20%), linear-gradient(to top, rgba(10, 20, 10, 0.82) 0%, rgba(20, 35, 18, 0.2) 45%, transparent 70%)",
            }}
          />
          <div className="relative z-2 text-center p-8 flex flex-col items-center">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-cream/65 font-normal mb-[1.2rem] animate-fade-up">Guided Experiences</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.08] text-off-white tracking-[-0.01em] mb-[1.2rem]" style={{ animation: "fadeUp 0.9s 0.1s ease both" }}>Moments worth<br /><em className="italic text-sand-light">planning around</em></h2>
            <div className="w-10 h-px bg-sand/50 mx-auto mb-[1.4rem]" style={{ animation: "fadeUp 0.9s 0.2s ease both" }} />
            <p className="text-[0.97rem] text-cream/75 max-w-[480px] leading-[1.75] mb-[2.2rem]" style={{ animation: "fadeUp 1s 0.3s ease both" }}>
              Some moments are worth planning around. We offer a small handful of guided experiences for those who want them — a private chef dinner at sunset on the water, or a chartered fishing and crabbing trip on the canal. Nothing packaged. Everything personal.
            </p>
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-transparent text-off-white px-[2.2rem] py-[0.85rem] rounded-[2px] no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal border border-cream/45 hover:border-cream/85 hover:bg-cream/8 hover:-translate-y-[1px] transition-all duration-300"
              style={{ animation: "fadeUp 1s 0.45s ease both" }}
            >
              Inquire
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 hover:translate-x-[3px]">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        className="text-cream text-center py-32 px-8"
        id="mission"
        style={{
          background: "linear-gradient(to bottom, rgba(44, 74, 41, 0.91) 0%, rgba(30, 50, 28, 0.96) 100%), url('https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=1600&q=80') center/cover no-repeat fixed",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-sand-light/70 font-normal mb-4">Why we exist</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-off-white max-w-[640px] mx-auto mb-6">
            Every stay<br />funds a <em className="italic text-sand-light">future.</em>
          </h2>
          <div className="w-12 h-px bg-sand/35 mx-auto my-6" />
          <p className="text-[0.97rem] text-cream/72 leading-[1.85] max-w-[580px] mx-auto mb-6">
            Behind every YuRu stay is a simple promise — your donation goes directly to the Đức Foundation, funding scholarships that help college students in Vietnam access the education they deserve. Contributions are tax-deductible.
          </p>
          <div className="max-w-[680px] mx-auto my-10 px-10 py-8 border-t border-b border-sand/25">
            <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(1.4rem,2.5vw,1.9rem)] italic font-light text-sand-light leading-[1.5]">
              &ldquo;We believe a night under the stars should mean something beyond the stay itself.&rdquo;
            </blockquote>
            <cite className="block mt-[0.9rem] text-[0.72rem] text-sand/55 not-italic tracking-[0.12em] uppercase">— YuRu, Hood Canal</cite>
          </div>
          <div className="mx-auto mt-10 px-[1.6rem] py-[1.25rem] bg-white/7 border border-sand/28 rounded-lg inline-flex items-center gap-[0.9rem] backdrop-blur-[6px]">
            <div className="w-11 h-11 rounded-[10px] overflow-hidden shrink-0">
              <a href="https://ducfoundation.org/" target="_blank">
                <img src="/imgs/Duc Logo Profile Yellow.jpg" alt="Đức Foundation" className="w-full h-full object-cover block" />
              </a>
            </div>
            <div className="text-left">
              <p className="text-[0.85rem] font-medium text-cream">
                <a href="https://ducfoundation.org/" target="_blank" className="text-inherit no-underline">Đức Foundation</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="bg-cream-dark py-24 px-8 max-md:py-16 max-md:px-6" id="amenities">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-forest-light font-normal mb-4">Property Amenities</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-charcoal mb-6">Everything you need<br /><em className="italic text-forest-mid">to do nothing at all</em></h2>
            <div className="w-12 h-px bg-sand mx-auto my-6" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[1.5px] bg-sand-light border border-sand-light">
            {[
              { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>, name: "Tents", desc: "SnowPeak tents sleeping 2–8 and a yurt with wood-burning stove, perched on platforms above the canal. Views in every direction." },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, name: "Bathrooms & Showers", desc: "Flushing toilets, hot showers, and bidet — proper comforts in nature." },
              { icon: <><path d="M15 13.5a3 3 0 01-6 0" /><path d="M17.8 11.8C19.1 9.5 20 7 20 4H4c0 3 .9 5.5 2.2 7.8C7.5 14.1 9 15.5 9 17v1a2 2 0 004 0v-1c0-1.5 1.5-2.9 2.8-5.2z" /></>, name: "Outdoor Chef's Kitchen", desc: "A Dacor 6-burner stove. A Blackstone griddle. A Weber BBQ. Every pot, pan, dish, and utensil you need. Cook like you're home — or better. We've got the dishes; leave the single-use plastic at home." },
              { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .97h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.82a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />, name: "Private Beach Access", desc: "Direct access to your own oysters. Low tide means dinner." },
              { icon: <path d="M2 12h20M2 12s4-4 10-4 10 4 10 4M2 12s4 4 10 4 10-4 10-4" />, name: "Kayaks & Paddleboard", desc: "Grab a life jacket and explore the canal at your own pace." },
              { icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></>, name: "Outdoor Movie Theatre", desc: "Gather under the stars for film nights by the water." },
              { icon: <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />, name: "Beachside Fire Pit", desc: "Firewood provided. Evenings made for stories and s'mores." },
              { icon: <><rect x="1" y="6" width="14" height="8" rx="2" /><path d="M23 8v3a2 2 0 01-2 2h-1V8h3zM5 14v2M9 14v2" /></>, name: "EV Charging", desc: "Arrive by electric — a charging port is on-site for your stay." },
              { icon: <><path d="M6 17l2-8 4 4 4-8 2 12" /><path d="M3 21h18" /></>, name: "Crab Pots", desc: "Seasonal crabbing right off the property. Bring your own bait and fishing license. We've got the crab pots." },
              { icon: <><path d="M4 20h16" /><path d="M4 20V8a2 2 0 012-2h12a2 2 0 012 2v12" /><path d="M9 11h6M9 15h6" /></>, name: "Lounge Deck", desc: "A dedicated lounge deck overlooking the water. Bring your coffee, your book, or nothing at all — sink into a couch or hammock and watch the tide." },
            ].map((a, i) => (
              <div key={i} className="bg-off-white p-[2rem_1.5rem] flex flex-col gap-3 hover:bg-cream transition-[background] duration-200">
                <div className="w-8 h-8 border border-sand rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-forest fill-none" strokeWidth="1.5">{a.icon}</svg>
                </div>
                <div className="font-[family-name:var(--font-cormorant)] text-[1.1rem] font-medium text-charcoal">{a.name}</div>
                <div className="text-[0.82rem] text-text-muted leading-[1.5]">{a.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-forest text-cream p-[2rem_2.5rem] rounded-[2px] flex gap-8 items-start max-md:flex-col max-md:gap-2 max-md:p-6">
            <div>
              <div className="text-[0.7rem] tracking-[0.18em] uppercase text-sand-light mb-2">A note on eco</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[1.4rem] font-normal mb-2">Leave it better than you found it</h3>
              <p className="text-[0.87rem] opacity-80 max-w-[480px]">Well water is pure and delicious straight from the tap. All faucets, all sinks. Bring a refillable bottle and skip the plastic. There&apos;s no trash service here — pack out your trash and leave the land as you found it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-charcoal py-24 px-8 max-md:py-16! max-md:px-6!" id="gallery">
        <div className="max-w-[1100px] mx-auto">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-white/40 font-normal mb-4">Moments</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-off-white mb-6">What it feels<br />like to be <em className="italic text-sand-light">here.</em></h2>
          </div>

          {/* Category Grid */}
          <div className="mt-14 grid grid-cols-3 gap-3.5 max-md:grid-cols-2" style={{ gridTemplateRows: "340px 280px" }}>
            {/* 1. The View */}
            <Link href="/gallery?cat=the-view" className="relative rounded-[18px] overflow-hidden cursor-pointer border border-white/8 bg-[rgba(30,32,24,0.8)] shadow-[0_24px_48px_rgba(0,0,0,0.25)] block no-underline col-span-2 row-span-1 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-[0_36px_72px_rgba(0,0,0,0.38)] transition-all duration-350 max-md:col-span-2 max-md:row-span-1" style={{ isolation: "isolate" }}>
              <img src="/imgs/Waterfront-main.jpg" alt="The View at YuRu" className="w-full h-full object-cover block brightness-[0.78] hover:scale-[1.06] hover:brightness-[0.65] transition-all duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10, 12, 8, 0.85) 0%, rgba(10, 12, 8, 0.3) 45%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-[20px_24px_24px] flex items-end justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-[clamp(22px,2.8vw,34px)] font-light text-white leading-[1.1] tracking-[-0.01em]">The View</p>
                  <p className="text-[11px] text-white/50 tracking-[0.08em] mt-1">Sunrise · Hood Canal · Waterfront</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/22 bg-white/8 backdrop-blur-[8px] flex items-center justify-center shrink-0 text-white/70">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </div>
              </div>
            </Link>

            {/* 2. The Experience */}
            <Link href="/gallery?cat=the-experience" className="relative rounded-[18px] overflow-hidden cursor-pointer border border-white/8 bg-[rgba(30,32,24,0.8)] shadow-[0_24px_48px_rgba(0,0,0,0.25)] block no-underline hover:-translate-y-1 hover:scale-[1.005] hover:shadow-[0_36px_72px_rgba(0,0,0,0.38)] transition-all duration-350" style={{ isolation: "isolate" }}>
              <img src="/imgs/activities-main.jpg" alt="The Experience at YuRu" className="w-full h-full object-cover block brightness-[0.78] hover:scale-[1.06] hover:brightness-[0.65] transition-all duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10, 12, 8, 0.85) 0%, rgba(10, 12, 8, 0.3) 45%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-[20px_24px_24px] flex items-end justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-[clamp(18px,2vw,26px)] font-light text-white leading-[1.1] tracking-[-0.01em]">The Experience</p>
                  <p className="text-[11px] text-white/50 tracking-[0.08em] mt-1">Crabbing · Fishing · Kayaking</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/22 bg-white/8 backdrop-blur-[8px] flex items-center justify-center shrink-0 text-white/70">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </div>
              </div>
            </Link>

            {/* 3. The Property */}
            <Link href="/gallery?cat=the-property" className="relative rounded-[18px] overflow-hidden cursor-pointer border border-white/8 bg-[rgba(30,32,24,0.8)] shadow-[0_24px_48px_rgba(0,0,0,0.25)] block no-underline hover:-translate-y-1 hover:scale-[1.005] hover:shadow-[0_36px_72px_rgba(0,0,0,0.38)] transition-all duration-350 max-md:col-span-1" style={{ isolation: "isolate" }}>
              <img src="/imgs/The view.webp" alt="The Property at YuRu" className="w-full h-full object-cover block brightness-[0.78] hover:scale-[1.06] hover:brightness-[0.65] transition-all duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10, 12, 8, 0.85) 0%, rgba(10, 12, 8, 0.3) 45%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-[20px_24px_24px] flex items-end justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-[clamp(18px,2vw,26px)] font-light text-white leading-[1.1] tracking-[-0.01em]">The Property</p>
                  <p className="text-[11px] text-white/50 tracking-[0.08em] mt-1">Tents · Kitchen · Amenities</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/22 bg-white/8 backdrop-blur-[8px] flex items-center justify-center shrink-0 text-white/70">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </div>
              </div>
            </Link>
          </div>

          {/* View All */}
          <div className="mt-8 flex items-center justify-center gap-4 before:content-[''] before:flex-1 before:h-px before:bg-white/8 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
            <Link href="/gallery" className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-white/20 rounded-full text-white/75 bg-white/4 backdrop-blur-[8px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline hover:bg-white/10 hover:border-white/40 hover:text-white hover:-translate-y-[2px] transition-all duration-300">
              Browse all photos
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCAL GUIDE ── */}
      <section className="bg-off-white py-24 px-8 max-md:py-16 max-md:px-6" id="local">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-forest-light font-normal mb-4">Local Guide</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-charcoal mb-6">Adventure is<br /><em className="italic text-forest-mid">right outside your tent</em></h2>
          <div className="w-12 h-px bg-sand my-6" />
          <div className="grid grid-cols-2 gap-16 mt-12 max-md:grid-cols-1 max-md:gap-10">
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[1.3rem] font-medium mb-6 pb-3 border-b border-cream-dark">Outdoor Activities</h3>
              {[
                ["Hood Canal (beach & waterfront access)", "on-site", true],
                ["Pleasant Harbor State Park", "0.9 mi"],
                ["Pleasant Harbor Marina", "0.9 mi"],
                ["Dosewallips State Park", "1.4 mi"],
                ["Seal Rock", "4.5 mi"],
                ["Rocky Brook Falls", "5.0 mi"],
                ["Ranger Hole Trailhead", "5.5 mi"],
                ["Olympic National Forest", "10.5 mi"],
                ["Lena Lake Trailhead", "18 mi"],
                ["Olympic Nat'l Park — Staircase", "40 mi"],
              ].map(([name, dist, onsite], i) => (
                <div key={i} className="flex justify-between items-baseline py-[0.6rem] border-b border-sand/25 last:border-b-0 text-[0.9rem]">
                  <span className="text-charcoal">{name}</span>
                  <span className={`text-[0.75rem] tracking-[0.05em] whitespace-nowrap ml-4 ${onsite ? "text-forest-light italic" : "text-text-muted"}`}>{dist}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[1.3rem] font-medium mb-6 pb-3 border-b border-cream-dark">Restaurants &amp; Food</h3>
              {[
                ["Pleasant Harbor Dock & Dine", "0.9 mi"],
                ["Geoduck Restaurant and Lounge", "0.9 mi"],
                ["Halfway House Restaurant", "1.6 mi"],
                ["Hama Hama Oysters", "12.0 mi"],
              ].map(([name, dist], i) => (
                <div key={i} className="flex justify-between items-baseline py-[0.6rem] border-b border-sand/25 last:border-b-0 text-[0.9rem]">
                  <span className="text-charcoal">{name}</span>
                  <span className="text-[0.75rem] text-text-muted tracking-[0.05em] whitespace-nowrap ml-4">{dist}</span>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-[1.3rem] font-medium mb-6 pb-3 border-b border-cream-dark">On-Site Recreation</h3>
                {[
                  ["Beach combing for oysters", "on-site"],
                  ["Kayaking & paddleboarding", "on-site"],
                  ["Crabbing (seasonal)", "on-site"],
                ].map(([name, dist], i) => (
                  <div key={i} className="flex justify-between items-baseline py-[0.6rem] border-b border-sand/25 last:border-b-0 text-[0.9rem]">
                    <span className="text-charcoal">{name}</span>
                    <span className="text-[0.75rem] text-forest-light italic tracking-[0.05em] whitespace-nowrap ml-4">{dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ── */}
      <section className="bg-cream-dark py-24 px-8 max-md:py-16 max-md:px-6" id="getting-here">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-stretch max-md:grid-cols-1 max-md:gap-10">
            <div>
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-forest-light font-normal mb-4">Getting Here</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-charcoal mb-6">Find your<br /><em className="italic text-forest-mid">way to calm</em></h2>
              <div className="w-12 h-px bg-sand my-6" />
              <p className="font-[family-name:var(--font-cormorant)] text-[1.5rem] font-light leading-[1.5] text-charcoal mb-8">115 Pleasant Harbor Rd<br />Brinnon, WA 98320</p>
              <p className="text-[0.87rem] text-text-muted mb-[1.2rem]">From Seattle, the scenic ferry routes are worth it.</p>
              <div className="flex flex-col gap-3 mt-6">
                {[
                  ["Ferry", "West Seattle (Fauntleroy) → Southworth"],
                  ["Ferry", "Downtown Seattle (Pier 52) → Bainbridge"],
                  ["Ferry", "Edmonds → Kingston"],
                  ["Drive", "Tacoma Narrows Bridge via Gig Harbor, or I-5 via Shelton"],
                ].map(([type, route], i) => (
                  <div key={i} className="flex items-center gap-4 p-[1rem_1.25rem] bg-off-white rounded-[2px] border-l-[3px] border-l-forest-light text-[0.87rem] text-charcoal max-md:break-words">
                    <span className="text-[0.68rem] uppercase tracking-[0.14em] text-forest-light font-normal min-w-[50px]">{type}</span>
                    {route}
                  </div>
                ))}
              </div>
              <p className="text-[0.82rem] text-text-muted mt-[1.2rem] italic">Once on the Peninsula: US-101 → Brinnon → Pleasant Harbor Rd.</p>
            </div>
            <div>
              <div
                className="rounded-[20px] overflow-hidden relative min-h-[440px] w-full max-md:h-[45vh] max-md:min-h-[45vh]"
                style={{ height: "110%", maxHeight: "calc(100svh - 80px)", background: "url('/imgs/google_map.jpg') center/cover no-repeat" }}
                role="img"
                aria-label="Map"
              >
                <div className="absolute top-[45%] left-[51%] -translate-x-1/2 -translate-y-1/2 bg-forest w-3.5 h-3.5 rounded-full shadow-[0_0_0_6px_rgba(44,74,41,0.25)]" />
                <div className="absolute bottom-4 left-4 bg-forest text-cream px-[0.8rem] py-[0.4rem] rounded-[2px] text-[0.78rem] tracking-[0.06em]">YuRu · Brinnon, WA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-forest py-24 px-8 max-md:py-16 max-md:px-6" id="reviews">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-sand-light/75 font-normal mb-4">Guest Reviews</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-off-white mb-6">
            Fully<br /><em className="italic text-sand-light">yuru&apos;d</em>
          </h2>
          <div className="w-12 h-px bg-sand/40 my-6" />
          <div className="grid grid-cols-3 gap-px bg-sand/15 mt-12 max-md:grid-cols-1 max-md:gap-10">
            {[
              { quote: '"Came for the glamping, left completely yuru\'d — 10/10 would totally chill here again."', source: "S. Kelly" },
              { quote: '"Somewhere between the salty breezes and hammock snoozes, I hit peak yuru — part sea sprite, part professional lounger."', source: "S. Chantorn" },
              { quote: '"Fully yuru\'d — zen\'d out and loving it. The private beach access made the whole trip."', source: "T. Johnson" },
            ].map((r, i) => (
              <div key={i} className="bg-forest/40 p-[2.5rem_2rem] relative">
                <div className="text-sand-light text-[0.85rem] tracking-[0.2em] mb-[0.4rem]">★ ★ ★ ★ ★</div>
                <p className="font-[family-name:var(--font-cormorant)] text-[1.25rem] font-light italic text-cream leading-[1.55] mb-6">{r.quote}</p>
                <div className="text-[0.75rem] text-sand/65 tracking-[0.1em] uppercase">{r.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO PACK ── */}
      <section className="bg-off-white py-24 px-8 max-md:py-16 max-md:px-6" id="pack">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-forest-light font-normal mb-4">Before You Arrive</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-charcoal mb-6">What to<br /><em className="italic text-forest-mid">pack</em></h2>
          <div className="w-12 h-px bg-sand my-6" />
          <div className="grid grid-cols-2 gap-10 mt-10 max-md:grid-cols-1 max-md:gap-10">
            <div>
              <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-forest-light mb-[1.2rem]">Must Have</h3>
              <div className="flex flex-col">
                {["Bedding, sleeping bag & pillow", "Flashlight or headlamp", "Refillable water bottle", "Crabbing / fishing license", "Layers for cool mornings & evenings", "Quick-dry bath towel", "Sturdy water shoes — sharp oyster shells!", "Biodegradable dish soap, dish towels, food & drinks"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-[0.7rem] border-b border-cream-dark text-[0.9rem] text-charcoal">
                    <div className="w-[5px] h-[5px] rounded-full shrink-0 bg-forest" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-forest-light mb-[1.2rem]">Nice to Have</h3>
              <div className="flex flex-col">
                {["Portable battery pack", "Rain boots for beach wading", "Eco-friendly sunscreen, hat, sunglasses", "Swimsuit", "Board games, cards, or a good book", "Camera or binoculars for wildlife", "Gloves, shovels, rakes & bucket for clamming (at Dosewallips State Park)"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-[0.7rem] border-b border-cream-dark text-[0.9rem] text-charcoal">
                    <div className="w-[5px] h-[5px] rounded-full shrink-0 bg-sand" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section
        className="text-center py-40 px-8 max-md:py-20 max-md:px-6 w-full"
        id="book"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(44, 74, 41, 0.92), rgba(44, 74, 41, 0.78)), url('/imgs/background_booking.jpg')",
          backgroundPosition: "50% 40%",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-off-white max-w-[580px] mx-auto mb-4">
            Ready to get<br /><em className="italic text-sand-light">YuRu&apos;d?</em>
          </h2>
          <div className="w-12 h-px bg-sand/40 mx-auto my-6" />
          <p className="text-cream/75 max-w-[420px] mx-auto mb-10 text-[0.95rem]">Reach out to us to check availability and book your stay at Hood Canal&apos;s most carefree corner.</p>
          <div className="flex gap-4 flex-wrap justify-center mb-6">
            <Link href="/reserve" className="bg-forest text-cream px-[2.2rem] py-[0.85rem] rounded-[2px] no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal border border-transparent hover:bg-forest-mid hover:-translate-y-[1px] transition-all duration-200">RESERVE</Link>
            <a href="https://www.instagram.com/hey.yuru?igsh=MWJ2ZWVsNXBxYjNpYg==" target="_blank" className="bg-transparent text-off-white px-[2.2rem] py-[0.85rem] rounded-[2px] no-underline text-[0.82rem] tracking-[0.12em] uppercase font-normal border border-cream/45 hover:border-cream/85 hover:-translate-y-[1px] transition-all duration-200">Instagram</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-charcoal text-cream/50 p-12 text-center max-md:p-6">
        <div className="mb-2">
          <img src="/imgs/Yuru Logo Characters Only.png" alt="Yuru" style={{ height: "48px", width: "auto", display: "inline" }} />
        </div>
        <div className="flex gap-8 justify-center my-6 flex-wrap max-md:gap-[1rem_1.5rem]">
          <a href="#about" className="text-cream/45 no-underline text-[0.75rem] tracking-[0.12em] uppercase hover:text-cream transition-colors duration-200">About</a>
          <a href="#gallery" className="text-cream/45 no-underline text-[0.75rem] tracking-[0.12em] uppercase hover:text-cream transition-colors duration-200">The Property</a>
          <a href="#mission" className="text-cream/45 no-underline text-[0.75rem] tracking-[0.12em] uppercase hover:text-cream transition-colors duration-200">Our Mission</a>
          <Link href="/reserve" className="text-cream/45 no-underline text-[0.75rem] tracking-[0.12em] uppercase hover:text-cream transition-colors duration-200">RESERVE</Link>
        </div>
        <p className="text-[0.8rem] tracking-[0.05em]">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Hello@HeyYuRu.com" target="_blank" className="text-inherit no-underline">Hello@HeyYuRu.com</a> · 115 Pleasant Harbor Rd · Brinnon, WA 98320 · Hood Canal
        </p>
        <p className="mt-2 text-[0.72rem] opacity-40">© 2026 YuRu. All rights reserved.</p>
      </footer>
    </>
  );
}
