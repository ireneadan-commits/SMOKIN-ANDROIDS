import React from "react";

export default function Welcome({ onGetStarted }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] font-sans text-white selection:bg-blue-500 selection:text-white">
      
      {/* FULLSCREEN VIDEO BACKGROUND (Shifted right on desktop for split composition) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-105 lg:translate-x-[-32%]"
          src="https://www.youtube.com/embed/3vvJeRHe3sk?autoplay=1&mute=1&loop=1&playlist=3vvJeRHe3sk&controls=0&rel=0&playsinline=1"
          title="SMOKIN ANDROIDS Background Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* DARK BLUE GRADIENT OVERLAY (Solid left for text readability, clear right for phones) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030712] via-[#050d24]/92 to-[#030712]/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(37,99,235,0.22),transparent_60%)]" />

      {/* MAIN SPLIT CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-between px-6 py-8 sm:px-12 sm:py-10 lg:px-16">
        
        {/* HEADER / LOGO (Top Left) */}
        <header className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.7)] sm:h-12 sm:w-12">
            S
          </div>
          <span className="text-xs font-extrabold tracking-[0.28em] text-white sm:text-sm">
            SMOKIN&apos; ANDROIDS
          </span>
        </header>

        {/* LEFT-HALF CENTERED HERO SECTION */}
        <main className="my-auto flex w-full items-center py-10">
          <section className="flex w-full flex-col items-center text-center lg:w-[54%]">
            
            {/* WELCOME TITLE */}
            <h1 className="leading-none">
              <span className="block text-2xl font-bold italic text-blue-100/95 sm:text-4xl md:text-[2.6rem]">
                Welcome to
              </span>
              <span className="mt-1 block text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(59,130,246,0.35)] sm:text-7xl md:text-[5.5rem] xl:text-[6.2rem]">
                SMOKIN!
              </span>
            </h1>

            {/* SUBTITLE */}
            <h2 className="mt-4 text-base font-bold tracking-wide text-blue-100 sm:text-xl md:text-2xl">
              Your Ultimate Smartphone Destination
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base">
              Discover the latest smartphones, explore amazing features, and find
              the perfect device for you.
            </p>

            {/* GLOWING GET STARTED BUTTON */}
            <button
              type="button"
              onClick={onGetStarted}
              className="mt-8 cursor-pointer rounded-full border-2 border-blue-200/80 bg-blue-600/85 px-9 py-3 text-sm font-extrabold tracking-[0.2em] text-white shadow-[0_0_25px_rgba(59,130,246,0.85)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(96,165,250,1)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712] sm:px-11 sm:py-3.5 sm:text-base"
            >
              GET STARTED
            </button>

            {/* SUB-BRANDING UNDER BUTTON */}
            <p className="mt-4 text-[11px] font-bold tracking-[0.35em] text-blue-100/90 sm:text-xs">
              SMOKIN ANDROIDS
            </p>

          </section>
        </main>

        {/* SPACER PARA BALANCED SA TAAS AT BABA */}
        <div className="h-4" />

      </div>
    </div>
  );
}