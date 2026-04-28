"use client";

import { useState } from "react";

const heroBg = "https://www.figma.com/api/mcp/asset/9a6ac1c3-91b9-410b-abc5-7a892b05d217";
const aboutPhoto = "https://www.figma.com/api/mcp/asset/9fa6b80e-4300-4621-b4b5-1390669bc366";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

const monoFont = { fontFamily: "var(--font-geist-mono)" } as const;

function BracketedBio() {
  return (
    <div className="flex items-stretch gap-3">
      <div className="flex flex-col justify-between w-4 shrink-0 py-3">
        <span className="block w-4 h-4 border-t border-l border-[#1f1f1f]" />
        <span className="block w-4 h-4 border-b border-l border-[#1f1f1f]" />
      </div>
      <p className="flex-1 py-3 font-normal text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">
        Placeholder paragraph one. This is where you introduce yourself — your background,
        your passion for your craft, and what drives you creatively. Two to three sentences
        work best here. Placeholder paragraph two. Here you can describe your technical
        approach, how you collaborate with clients, or what sets your work apart from others
        in your field.
      </p>
      <div className="flex flex-col justify-between w-4 shrink-0 py-3">
        <span className="block w-4 h-4 border-t border-r border-[#1f1f1f]" />
        <span className="block w-4 h-4 border-b border-r border-[#1f1f1f]" />
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#fafafa] min-h-screen">

      {/* Mobile full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-6 pt-8 pb-12 md:hidden">
          <div className="flex items-center justify-between mb-16">
            <span className="font-semibold text-[16px] text-white tracking-[-0.64px] capitalize">
              H.Studio
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="size-6 flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-light text-[56px] text-white tracking-[-0.04em] uppercase leading-[0.9] border-b border-white/20 py-5"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Hero section */}
      <section
        className="relative overflow-hidden w-full flex flex-col items-center justify-between pb-6 px-4
          h-dvh
          md:h-[847px] md:justify-start md:gap-[240px] md:pb-0 md:px-8"
      >
        {/* Background image — mobile: left-anchored, bleeds right, object-top to show head */}
        <div
          className="absolute inset-y-0 left-0 md:hidden"
          style={{ right: "-39.47%" }}
        >
          <img
            alt="Harvey Specter"
            src={heroBg}
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          />
        </div>

        {/* Background image — desktop: oversized, centered, object-bottom */}
        <div
          className="hidden md:block absolute -translate-y-1/2 aspect-[2291/1346]"
          style={{ left: "-34.79%", right: "-34.79%", top: "calc(50% + 88.84px)" }}
        >
          <img
            alt="Harvey Specter"
            src={heroBg}
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />
        </div>

        {/* Bottom glass blur — fades in from top */}
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] bottom-0 h-[349px] left-0 w-full pointer-events-none"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)" }}
        />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between py-6 w-full">
          <span className="font-semibold text-[16px] text-black tracking-[-0.64px] capitalize">
            H.Studio
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-14 list-none font-semibold text-[16px] text-black tracking-[-0.64px] capitalize">
            {navLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px]">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px]"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-[2px] w-6 bg-black rounded-full" />
            <span className="block h-[2px] w-4 bg-black rounded-full" />
            <span className="block h-[2px] w-6 bg-black rounded-full" />
          </button>
        </nav>

        {/* Hero text — mobile
            No z-index on this container so mix-blend-overlay on the h1
            can composite against the background image in the same stacking context */}
        <div className="relative flex flex-col justify-between items-center w-full h-[341px] md:hidden">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center px-[18px] w-full">
              <span
                className="text-white uppercase text-[14px] leading-[1.1] mix-blend-overlay"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </span>
            </div>
            <h1
              className="font-medium mix-blend-overlay text-[96px] text-center text-white w-full leading-[0.8] capitalize"
              style={{ letterSpacing: "-6.72px" }}
            >
              Harvey&nbsp;&nbsp;&nbsp;Specter
            </h1>
          </div>
          <div className="flex flex-col gap-[17px] items-start w-[294px]">
            <p className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.1] uppercase">
              H.Studio is a <span className="font-normal">full-service</span> creative studio
              creating beautiful digital experiences and products. We are an{" "}
              <span className="font-normal">award winning</span> design and art group specializing
              in branding, web design and engineering.
            </p>
            <button className="bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px]">
              Let&apos;s talk
            </button>
          </div>
        </div>

        {/* Hero text — desktop */}
        <div className="hidden md:flex flex-col items-center justify-center relative w-full">
          <div className="flex flex-col items-start pb-[15px] w-full">
            <div className="flex items-center -mb-[15px] px-[18px] w-full">
              <span
                className="text-white uppercase text-[14px] leading-[1.1] mix-blend-overlay"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </span>
            </div>
            <h1
              className="font-medium -mb-[15px] mix-blend-overlay text-[198px] text-center text-white w-full leading-[1.1] capitalize"
              style={{ letterSpacing: "-13.86px" }}
            >
              Harvey&nbsp;&nbsp;&nbsp;Specter
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <div className="flex flex-col gap-[17px] items-start">
              <p className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] w-[294px] leading-[1.1] uppercase">
                H.Studio is a <span className="font-normal">full-service</span> creative studio
                creating beautiful digital experiences and products. We are an{" "}
                <span className="font-normal">award winning</span> design and art group specializing
                in branding, web design and engineering.
              </p>
              <button className="bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px]">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Identity tagline ── */}
      <section className="overflow-x-hidden w-full px-4 py-12 md:px-8 md:py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* Header row: label + divider */}
          <div className="flex flex-col gap-3 items-end w-full">
            <p
              className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] text-right"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ 8+ years in industry ]
            </p>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Text block — mobile: centered, 32px */}
          <div className="flex flex-col gap-2 items-center md:hidden">
            <p
              className="text-[14px] text-[#1f1f1f] leading-[1.1]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              001
            </p>
            {[
              <>A creative director&nbsp;&nbsp;&nbsp;/</>,
              <>Photographer</>,
              <>Born <em style={{ fontFamily: "var(--font-playfair)" }}>&amp;</em> raised</>,
              <>On the south side</>,
              <>Of chicago.</>,
            ].map((line, i) => (
              <p
                key={i}
                className="font-light text-[32px] text-black uppercase text-center leading-[0.84]"
                style={{ letterSpacing: "-2.56px" }}
              >
                {line}
              </p>
            ))}
            <p
              className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] mt-3"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ creative freelancer ]
            </p>
          </div>

          {/* Text block — desktop: staggered, 96px */}
          <div className="hidden md:flex flex-col gap-2 w-full">

            {/* Line 1: "A creative director   /" + "001" */}
            <div className="flex gap-3 items-start whitespace-nowrap uppercase">
              <p
                className="font-light text-[96px] text-black leading-[0.84]"
                style={{ letterSpacing: "-7.68px" }}
              >
                A creative director&nbsp;&nbsp;&nbsp;/
              </p>
              <span
                className="text-[14px] text-[#1f1f1f] leading-[1.1] mt-1"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                001
              </span>
            </div>

            {/* Line 2: "Photographer" — indented 214px */}
            <div className="pl-[214px] whitespace-nowrap uppercase">
              <p
                className="font-light text-[96px] text-black leading-[0.84]"
                style={{ letterSpacing: "-7.68px" }}
              >
                Photographer
              </p>
            </div>

            {/* Line 3: "Born & raised" — indented 610px */}
            <div className="pl-[610px] whitespace-nowrap uppercase">
              <p
                className="font-light text-[96px] text-black leading-[0.84]"
                style={{ letterSpacing: "-7.68px" }}
              >
                Born{" "}
                <em style={{ fontFamily: "var(--font-playfair)", fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
                  &amp;
                </em>{" "}
                raised
              </p>
            </div>

            {/* Line 4: "On the south side" — no indent */}
            <div className="whitespace-nowrap uppercase">
              <p
                className="font-light text-[96px] text-black leading-[0.84]"
                style={{ letterSpacing: "-7.68px" }}
              >
                On the south side
              </p>
            </div>

            {/* Line 5: "Of chicago." — indented 606px + floating label */}
            <div className="relative pl-[606px] whitespace-nowrap uppercase">
              <p
                className="font-light text-[96px] text-black leading-[0.84]"
                style={{ letterSpacing: "-7.68px" }}
              >
                Of chicago.
              </p>
              <span
                className="absolute left-[1079px] top-[26px] text-[14px] text-[#1f1f1f] leading-[1.1] whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ creative freelancer ]
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: About ── */}
      <section className="w-full px-4 py-12 md:px-8 md:py-20">

        {/* Mobile layout */}
        <div className="flex flex-col gap-5 md:hidden">
          <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoFont}>002</span>
          <span className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoFont}>[ About ]</span>
          <BracketedBio />
          <div className="w-full overflow-hidden" style={{ aspectRatio: "422/594" }}>
            <img src={aboutPhoto} alt="Portrait" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between w-full">
          <span className="shrink-0 text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoFont}>
            [ About ]
          </span>
          {/* Right: bio bottom-aligned with photo + 002 + photo */}
          <div className="flex items-end gap-8">
            <div className="w-[420px]">
              <BracketedBio />
            </div>
            <div className="flex items-start gap-6 shrink-0">
              <span className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoFont}>002</span>
              <div className="w-[436px] h-[614px] overflow-hidden shrink-0">
                <img src={aboutPhoto} alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
