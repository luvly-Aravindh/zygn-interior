import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import ProgressLoad from "./ProgressLoad";



export default function ZygnHero({ isPopupOpen = false, openPopup }) {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
  const playerScript = document.createElement("script");
  playerScript.src = "https://fast.wistia.com/player.js";
  playerScript.async = true;
  document.body.appendChild(playerScript);

  const embedScript = document.createElement("script");
  embedScript.src = "https://fast.wistia.com/embed/igmr5mwein.js";
  embedScript.async = true;
  embedScript.type = "module";
  document.body.appendChild(embedScript);
}, []);

  const monthName = new Date().toLocaleString("en-IN", { month: "long" });
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white"
     style={{
  background: `
    radial-gradient(circle at 20% 50%, #8b0000 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, #ff0000 0%, transparent 35%),
    #000000
  `,
}}
    >
      {/* Top trust bar */}
      <div className="bg-red-600 py-2 text-center sm:text-sm text-xs font-medium">
  50+ studios saved ₹40L–₹1Cr monthly with Zygn. Claim your spot before {monthName} ends.
</div>


      {/* Content */}
      <div className="relative mx-auto flex max-w-full flex-col items-center sm:px-6 px-4 sm:pt-12 pt-7 sm:pb-20 pb-12 text-center">
        
{/* Logo left + Attention center */}
<div className="sm:mb-10 mb-4 grid w-full sm:grid-cols-3 grid-cols-1 items-center">
  
  {/* Left: Logo */}
  <div className="flex justify-center">
    <img src={logo} alt="Zygn" className="w-28 sm:w-28 pb-6 sm:pb-0" />
  </div>

  {/* Center: Attention pill */}
 <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mx-auto inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-[10px] sm:text-base font-semibold uppercase tracking-wide whitespace-nowrap"
>
  <span className="sm:h-6 sm:w-6 h-5 w-5 rounded-full bg-red-500"></span>
  Attention Interior Designers & Design-Build Firms
</motion.div>

  {/* Right: Empty spacer (keeps center true) */}
  <div />
</div>


<div className="mt-4 sm:mt-6 w-full max-w-6xl px-1 sm:px-4 text-center">

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="mx-auto font-extrabold tracking-tight sm:tracking-tight leading-[1.12] sm:leading-[1.18] text-[1.15rem] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
  >
    {/* Mobile — 5 deliberate lines, readable size */}
    <span className="sm:hidden inline-block w-full">
      <span className="block whitespace-nowrap">RUN YOUR INTERIOR</span>
      <span className="block whitespace-nowrap">DESIGN‑BUILD</span>
      <span className="block whitespace-nowrap text-red-500">FIRM WITH REAL‑TIME CONTROL,</span>
      <span className="block whitespace-nowrap">NOT SPREADSHEETS, CHATS, AND</span>
      <span className="block whitespace-nowrap">CONSTANT FOLLOW‑UPS</span>
    </span>

    {/* Tablet — 4 balanced lines */}
    <span className="hidden sm:block lg:hidden">
      <span className="block">RUN YOUR INTERIOR DESIGN‑BUILD</span>
      <span className="block text-red-500">FIRM WITH REAL‑TIME CONTROL,</span>
      <span className="block">NOT SPREADSHEETS, CHATS, AND</span>
      <span className="block">CONSTANT FOLLOW‑UPS</span>
    </span>

    {/* Desktop — 4 clean full-width lines */}
    <span className="hidden lg:block">
      <span className="block whitespace-nowrap">RUN YOUR INTERIOR DESIGN‑BUILD</span>
      <span className="block whitespace-nowrap text-red-500">FIRM WITH REAL‑TIME CONTROL,</span>
      <span className="block whitespace-nowrap">NOT SPREADSHEETS, CHATS, AND</span>
      <span className="block whitespace-nowrap">CONSTANT FOLLOW‑UPS</span>
    </span>
  </motion.h1>

  {/* Stat badges — mobile: 2 on top, 1 centered below | desktop: row */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25, duration: 0.5 }}
    className="mt-5 sm:mt-7 grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-center justify-items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full max-w-[16.5rem] sm:max-w-none mx-auto"
  >
    <div className="rounded-full bg-purple-600 px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm font-bold text-white text-center">
      India-First
      <span className="block text-[9px] sm:text-xs font-normal leading-tight opacity-90">
        End-to-End Workflow
      </span>
    </div>

    <div className="rounded-full bg-red-600 px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm font-bold text-white text-center">
      ₹50–400 CR
      <span className="block text-[9px] sm:text-xs font-normal leading-tight opacity-90">
        Project Values Managed
      </span>
    </div>

    <div className="col-span-2 justify-self-center rounded-full bg-green-500 px-3 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm font-bold text-white text-center sm:col-span-1">
      300 USERS
      <span className="block text-[9px] sm:text-xs font-normal leading-tight opacity-90">
        35% Increase in Productivity
      </span>
    </div>
  </motion.div>

</div>



 

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300"
        >
          Zygn is an all-in-one ERP for interior design-build firms, unifying
          sales, design, procurement, site, HR, and finance. Ditch spreadsheets
          and WhatsApp chaos. Assign leads with full action logs, track follow-ups,
          automate reports, and gain total project control with clear visibility
          and accountability.
        </motion.p>

{/* Demo Video */}
<div className="mt-10 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
  <style>
    {`
      wistia-player[media-id='igmr5mwein']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/igmr5mwein/swatch');
        display: block;
        filter: blur(5px);
        padding-top:56.25%;
      }
    `}
  </style>

  <wistia-player
    media-id="igmr5mwein"
    aspect="1.7777777777777777"
  ></wistia-player>
</div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <button
  onClick={() => openPopup()}
  className="rounded-full bg-red-600 sm:px-12 px-2 py-4 text-[12px] sm:text-lg tracking-wide transition hover:bg-red-700"
>
  BOOK YOUR FREE ZYGN DEMO + WORKFLOW AUDIT
</button>

          <p className="mt-4 text-[16px] text-gray-300">
  <span className="text-red-400">Only 6 {currentMonth} slots left</span> | 
  300 studios already transformed operations.
</p>

          <ProgressLoad />
        </motion.div>
      </div>
    </section>
  );
}
