"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

export default function ReservePage() {
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  /* Date constraints */
  const today = new Date().toISOString().split("T")[0];

  const handleCheckInChange = (e) => {
    const nextDay = new Date(e.target.value);
    nextDay.setDate(nextDay.getDate() + 2);
    const minOut = nextDay.toISOString().split("T")[0];
    const checkOut = document.getElementById("check-out");
    if (checkOut) {
      checkOut.min = minOut;
      if (checkOut.value < minOut) checkOut.value = minOut;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const required = form.querySelectorAll("[required]");
    let valid = true;
    required.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = "#C47B5A";
        field.addEventListener("input", () => (field.style.borderColor = ""), { once: true });
      }
    });
    if (!valid) return;

    setSending(true);

    try {
      if (typeof window !== "undefined" && window.emailjs) {
        await window.emailjs.sendForm("service_llefodr", "template_n3hhm1h", form);
      }
      form.style.opacity = "0";
      form.style.transform = "translateY(-10px)";
      form.style.transition = "opacity 0.4s, transform 0.4s";
      setTimeout(() => {
        setSubmitted(true);
      }, 400);
    } catch (error) {
      alert("Sorry, an error occurred while sending your request: " + JSON.stringify(error));
      setSending(false);
    }
  };

  return (
    <>
      {/* EmailJS SDK */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.emailjs) {
            window.emailjs.init("Wi3gcg9uexcFt8FRy");
          }
        }}
      />

      <div
        className="relative z-1 max-w-[720px] mx-auto font-[family-name:var(--font-jost)] font-light min-h-screen overflow-x-hidden"
        style={{
          backgroundColor: "#F5F0E8",
          color: "#2C2A26",
          padding: "80px 32px 120px",
        }}
      >
        {/* Background texture */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(107, 122, 94, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(122, 155, 175, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(158, 139, 114, 0.07) 0%, transparent 50%)",
          }}
        />

        {/* Header */}
        <header className="text-center mb-[72px] animate-fade-up relative z-1">
          <div className="inline-block font-[family-name:var(--font-cormorant)] text-[13px] font-normal tracking-[0.25em] uppercase text-clay mb-7 before:content-['—'] before:mx-3 before:opacity-50 after:content-['—'] after:mx-3 after:opacity-50">
            YuRu · Hood Canal
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,64px)] font-light leading-[1.1] text-ink mb-5">
            Reserve your<br /><em className="italic text-clay">retreat</em>
          </h1>
          <p className="text-[14px] tracking-[0.08em] text-clay leading-[1.8] max-w-[420px] mx-auto">
            By invitation only — reach out to check availability and we&apos;ll be in touch within 24 hours.
          </p>
        </header>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12 relative z-1 before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-reserve-sand before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-reserve-sand after:to-transparent" style={{ animation: "fadeUp 0.8s 0.1s ease both" }}>
          <span className="text-[18px] opacity-60">〜</span>
        </div>

        {/* Form */}
        {!submitted && (
          <form
            ref={formRef}
            id="reservationForm"
            noValidate
            onSubmit={handleSubmit}
            className="relative z-1"
            style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
          >
            {/* Section 1 */}
            <div className="mb-12">
              <div className="font-[family-name:var(--font-cormorant)] text-[22px] font-normal text-ink mb-6 pb-2.5 border-b border-reserve-sand flex items-center gap-3">
                <span className="text-[11px] font-[family-name:var(--font-jost)] font-medium tracking-[0.2em] text-clay bg-warm-white border border-reserve-sand rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">1</span>
                Tell us about yourself
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5 max-[560px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">First Name</label>
                  <input type="text" id="first-name" name="first_name" placeholder="Linh" required className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white placeholder:text-clay/50 appearance-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="last-name" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Last Name</label>
                  <input type="text" id="last-name" name="last_name" placeholder="Nguyen" required className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white placeholder:text-clay/50 appearance-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5 max-[560px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Email</label>
                  <input type="email" id="email" name="email" placeholder="hello@email.com" required className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white placeholder:text-clay/50 appearance-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Phone (optional)</label>
                  <input type="tel" id="phone" name="phone" placeholder="(360) 555-0100" className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white placeholder:text-clay/50 appearance-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="referred-by" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">How did you hear about YuRu?</label>
                  <select id="referred-by" name="referred_by" className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 pr-10 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white cursor-pointer appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239E8B72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                    <option value="" disabled defaultValue>Select one</option>
                    <option value="friend">Friend or family</option>
                    <option value="instagram">Instagram</option>
                    <option value="word-of-mouth">Word of mouth</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="font-[family-name:var(--font-cormorant)] text-[22px] font-normal text-ink mb-6 pb-2.5 border-b border-reserve-sand flex items-center gap-3">
                <span className="text-[11px] font-[family-name:var(--font-jost)] font-medium tracking-[0.2em] text-clay bg-warm-white border border-reserve-sand rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">2</span>
                Your stay
                <span className="ml-auto font-[family-name:var(--font-jost)] text-[10px] font-medium tracking-[0.18em] uppercase text-clay opacity-75">2-night minimum</span>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5 max-[560px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="check-in" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Arrival Date</label>
                  <input type="date" id="check-in" name="check_in" required min={today} onChange={handleCheckInChange} className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white appearance-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="check-out" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Departure Date</label>
                  <input type="date" id="check-out" name="check_out" required min={today} className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white appearance-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5 max-[560px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="accommodation" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Accommodation</label>
                  <select id="accommodation" name="accommodation" required className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 pr-10 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white cursor-pointer appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239E8B72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                    <option value="" disabled defaultValue>Select one</option>
                    <option value="tent-1">Tent Platform (1 tent)</option>
                    <option value="tent-2">Tent Platforms (2 tents)</option>
                    <option value="tent-3">Tent Platforms (3 tents)</option>
                    <option value="yurt">Camper (sleeps 2)</option>
                    <option value="yurt">Cabin (sleeps 2)</option>
                    <option value="yurt">The Yurt</option>
                    <option value="buyout">Whole Property Buyout</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Number of Guests</label>
                  <div className="flex items-center bg-warm-white border border-reserve-sand rounded-[2px] overflow-hidden w-fit">
                    <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))} className="w-12 h-12 border-none bg-transparent text-clay text-[20px] cursor-pointer flex items-center justify-center font-[family-name:var(--font-jost)] font-light hover:bg-reserve-sand hover:text-ink transition-all duration-200">−</button>
                    <div className="min-w-[64px] text-center text-[18px] font-[family-name:var(--font-cormorant)] text-ink border-x border-reserve-sand h-12 leading-[48px] select-none">{guests}</div>
                    <button type="button" onClick={() => setGuests((g) => Math.min(24, g + 1))} className="w-12 h-12 border-none bg-transparent text-clay text-[20px] cursor-pointer flex items-center justify-center font-[family-name:var(--font-jost)] font-light hover:bg-reserve-sand hover:text-ink transition-all duration-200">+</button>
                  </div>
                  <input type="hidden" name="guests" value={guests} />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="font-[family-name:var(--font-cormorant)] text-[22px] font-normal text-ink mb-6 pb-2.5 border-b border-reserve-sand flex items-center gap-3">
                <span className="text-[11px] font-[family-name:var(--font-jost)] font-medium tracking-[0.2em] text-clay bg-warm-white border border-reserve-sand rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">3</span>
                Add-on experiences
              </div>
              <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
                {[
                  { value: "chef-dinner", label: "Private Chef Dinner" },
                  { value: "fishing", label: "Chartered Fishing & Crabbing" },
                  { value: "both", label: "Both — full experience" },
                  { value: "none", label: "No add-ons for now" },
                ].map((exp) => (
                  <label key={exp.value} className="flex items-center gap-3.5 bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 cursor-pointer select-none transition-all duration-250 hover:border-clay has-[input:checked]:border-reserve-moss has-[input:checked]:bg-[rgba(107,122,94,0.06)] group">
                    <input type="checkbox" name="experiences" value={exp.value} className="absolute opacity-0 w-0 h-0 pointer-events-none peer" />
                    <div className="w-[18px] h-[18px] min-w-[18px] border-[1.5px] border-reserve-sand rounded-[2px] bg-reserve-cream flex items-center justify-center shrink-0 transition-all duration-250 group-hover:border-clay peer-checked:border-reserve-moss peer-checked:bg-[rgba(107,122,94,0.08)]">
                      <svg viewBox="0 0 12 12" className="w-[11px] h-[11px] stroke-reserve-moss fill-none opacity-0 scale-[0.6] transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: "var(--check-opacity, 0)", transform: "var(--check-scale, scale(0.6))" }}>
                        <polyline points="1.5,6 4.5,9.5 10.5,2.5" />
                      </svg>
                    </div>
                    <span className="text-[12px] tracking-[0.08em] text-ink cursor-pointer leading-[1.4]">{exp.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="font-[family-name:var(--font-cormorant)] text-[22px] font-normal text-ink mb-6 pb-2.5 border-b border-reserve-sand flex items-center gap-3">
                <span className="text-[11px] font-[family-name:var(--font-jost)] font-medium tracking-[0.2em] text-clay bg-warm-white border border-reserve-sand rounded-full w-[26px] h-[26px] flex items-center justify-center shrink-0">4</span>
                Anything else?
              </div>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] tracking-[0.18em] uppercase text-clay font-medium">Notes, questions, or occasion</label>
                  <textarea id="message" name="message" placeholder="Tell us about your group, any special occasions, dietary needs for a chef dinner, or anything else on your mind..." className="bg-warm-white border border-reserve-sand rounded-[2px] px-4 py-3.5 font-[family-name:var(--font-jost)] text-[14px] font-light text-ink w-full outline-none transition-all duration-250 hover:border-clay focus:border-reserve-moss focus:shadow-[0_0_0_3px_rgba(107,122,94,0.1)] focus:bg-white placeholder:text-clay/50 resize-y min-h-[120px] leading-[1.7]" />
                </div>
              </div>
              <div className="bg-[rgba(107,122,94,0.08)] border border-[rgba(107,122,94,0.2)] rounded-[2px] px-5 py-4 text-[12px] leading-[1.8] text-reserve-moss tracking-[0.04em] mt-6">
                <strong className="font-medium block mb-2 tracking-[0.1em] uppercase text-[10px]">🌿 A gentle reminder</strong>
                <p className="m-0 p-0">YuRu is a leave-no-trace property. No trash service on-site — please plan to pack out what you bring in.</p>
                <p className="m-0 p-0 mt-1.5">Well water is pure and delicious from the tap, bring your own reusable water bottle.</p>
                <p className="m-0 p-0 mt-1.5">Single-use plastics are kindly left at home — we have dishes and utensils.</p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center mt-14" style={{ animation: "fadeUp 0.8s 0.3s ease both" }}>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3.5 bg-ink text-reserve-cream border-none px-12 py-[18px] font-[family-name:var(--font-jost)] text-[12px] font-medium tracking-[0.2em] uppercase cursor-pointer rounded-[1px] relative overflow-hidden hover:shadow-[0_8px_24px_rgba(44,42,38,0.2)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-reserve-moss -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
                <span className="relative z-1">{sending ? "Sending request..." : "Send reservation request"}</span>
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <p className="mt-5 text-[12px] text-clay tracking-[0.06em] leading-[1.7]">We&apos;ll reply within 24 hours · hello@HeyYuRu.com</p>
            </div>
          </form>
        )}

        {/* Success state */}
        {submitted && (
          <div className="text-center px-8 py-16 animate-fade-up relative z-1">
            <div className="text-[48px] mb-6">〜</div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[36px] font-light text-ink mb-4">
              You&apos;re almost <em className="italic text-reserve-moss">yuru&apos;d</em>
            </h2>
            <p className="text-[14px] text-clay leading-[1.8] max-w-[380px] mx-auto">
              Your request is on its way. Linh &amp; Trang will be in touch within 24 hours to confirm availability and share next steps.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-reserve-sand font-[family-name:var(--font-cormorant)] text-[13px] text-clay tracking-[0.15em] relative z-1" style={{ animation: "fadeUp 0.8s 0.4s ease both" }}>
          <Link href="/" className="text-clay no-underline hover:text-reserve-moss transition-colors duration-200">← Back to YuRu</Link>
          &nbsp;·&nbsp; 115 Pleasant Harbor Rd · Brinnon, WA
        </div>
      </div>

      {/* Custom CSS for checkbox check visibility */}
      <style jsx global>{`
        .peer:checked ~ div svg {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </>
  );
}
