
import { useState } from "react";
import {
  UserRound,
  Smartphone,
  X,
  LogOut,
  Menu,
  ArrowRight,
  Star,
  Home as HomeIcon,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Headphones,
} from "lucide-react";

export default function HomePage({ user, onLogout, onProducts, onLogin }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleProducts = () => {
    setShowProfile(false);
    setShowMobileMenu(false);
    onProducts?.();
  };

  const handleLogout = () => {
    setShowProfile(false);
    setShowMobileMenu(false);
    onLogout?.();
  };

  const features = [
    {
      title: "Quality",
      subtitle: "Premium Devices",
      icon: <ShieldCheck size={26} strokeWidth={2.2} />,
      description:
        "We offer premium smartphones from trusted brands, built with high-quality materials and designed for durability, reliability, and an excellent user experience.",
    },
    {
      title: "Performance",
      subtitle: "Powerful Features",
      icon: <Zap size={26} strokeWidth={2.2} />,
      description:
        "Experience fast performance, smooth multitasking, powerful processors, and advanced features designed to keep up with your everyday needs.",
    },
    {
      title: "Support",
      subtitle: "Always Here",
      icon: <Headphones size={26} strokeWidth={2.2} />,
      description:
        "We are here to help you choose the right smartphone. Our goal is to provide helpful assistance, reliable service, and a satisfying shopping experience.",
    },
  ];

  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-gradient-to-br from-[#07182e] via-[#13355c] to-[#081b33] font-sans text-white selection:bg-cyan-400 selection:text-slate-950"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[18%] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[12%] h-[500px] w-[500px] rounded-full bg-cyan-400/25 blur-[130px]" />
        <div className="absolute bottom-[5%] left-[35%] h-[360px] w-[520px] rounded-full bg-blue-400/15 blur-[110px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 660 C 300 480, 620 780, 1020 500 C 1240 340, 1380 420, 1560 280 L 1560 850 L -100 850 Z"
            fill="url(#cyberWave1)"
          />
          <path
            d="M-120 520 C 360 720, 740 320, 1180 540 C 1340 620, 1440 480, 1560 440 L 1560 850 L -120 850 Z"
            fill="url(#cyberWave2)"
          />

          <defs>
            <linearGradient
              id="cyberWave1"
              x1="0"
              y1="0"
              x2="1440"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0f294a" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#091a32" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient
              id="cyberWave2"
              x1="1440"
              y1="0"
              x2="0"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0b223f" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-[45.5%] top-[33%] h-12 w-12 rounded-full border border-white/50 bg-gradient-to-br from-white/50 via-sky-300/20 to-slate-900/50 shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm" />
        <div className="absolute right-[13%] top-[22%] h-7 w-7 rounded-full border border-white/60 bg-gradient-to-br from-white/70 to-cyan-400/30 shadow-md" />
        <div className="absolute bottom-[30%] left-[64%] h-8 w-8 rounded-full border border-white/50 bg-gradient-to-br from-white/60 to-sky-400/25 shadow-md" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-300/20 bg-[#0b2342]/75 shadow-[0_6px_30px_rgba(2,10,24,0.55)] backdrop-blur-xl">
        <div
          style={{
            width: "100%",
            maxWidth: "1380px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 4vw, 48px)",
            paddingRight: "clamp(20px, 4vw, 48px)",
          }}
          className="box-border flex items-center justify-between gap-4 py-3.5"
        >
          {/* LOGO */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex shrink-0 cursor-pointer items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/45 bg-gradient-to-br from-sky-400/25 to-blue-900/50 text-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.3)]">
              <Smartphone size={21} strokeWidth={2.2} />
            </div>

            <div>
              <h1 className="text-base font-black leading-none tracking-wide text-white sm:text-lg">
                SMOKIN
                <span className="mt-0.5 block text-sky-400">ANDROIDS</span>
              </h1>

              <p className="mt-1 text-[8px] font-bold tracking-[0.22em] text-slate-300">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-cyan-300/70 bg-gradient-to-r from-sky-500/35 to-cyan-400/25 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-sky-500/45"
            >
              <HomeIcon size={16} className="text-cyan-300" />
              Home
            </button>

            <button
              type="button"
              onClick={handleProducts}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-white/20"
            >
              <ShoppingBag size={16} className="text-cyan-300" />
              Products
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  if (!user && onLogin) {
                    onLogin();
                  } else {
                    setShowProfile(!showProfile);
                  }
                }}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-white/20"
                aria-label="User Profile or Login"
              >
                <span>
                  {user ? user?.name || user?.username || "Profile" : "Login"}
                </span>
                <UserRound size={17} className="text-cyan-300" />
              </button>

              {showProfile && (
                <div className="absolute right-0 top-13 z-50 w-64 rounded-2xl border border-cyan-300/30 bg-[#0b2342]/95 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-sky-500/20 text-cyan-300">
                      <UserRound size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-bold text-white">
                        {user?.name || user?.username || "User"}
                      </p>

                      <p className="truncate text-xs text-slate-300">
                        {user?.email || "Welcome"}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-200 transition hover:bg-red-500/30"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm md:hidden"
            aria-label="Toggle Menu"
          >
            {showMobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {showMobileMenu && (
          <div className="border-t border-cyan-300/20 bg-[#0b2342] p-5 md:hidden">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowMobileMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 rounded-xl bg-sky-500/25 px-4 py-3 text-left font-semibold text-white"
              >
                <HomeIcon size={18} className="text-cyan-300" />
                Home
              </button>

              <button
                type="button"
                onClick={handleProducts}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-left font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <ShoppingBag size={18} className="text-cyan-300" />
                Products
              </button>

              <div className="rounded-xl border border-cyan-300/20 bg-white/10 px-4 py-3">
                <p className="text-sm font-semibold text-white">
                  {user?.name || user?.username || "Guest User"}
                </p>

                <p className="mt-0.5 text-xs text-slate-300">
                  {user?.email || "Welcome to Smokin Androids"}
                </p>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-left font-semibold text-red-300 transition hover:bg-red-500/15"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <main
        style={{
          width: "100%",
          maxWidth: "1380px",
          margin: "0 auto",
          paddingLeft: "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
        }}
        className="relative z-10 my-auto box-border py-8 lg:py-10"
      >
        <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.16em] text-slate-200">
              <Star size={14} className="fill-slate-200 text-slate-200" />
              PREMIUM SMARTPHONES
            </div>

            <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.7rem]">
              Discover Your
              <span className="mt-1 block bg-gradient-to-r from-[#38bdf8] via-[#22d3ee] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                Next Smartphone.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
              Explore the latest smartphones from leading brands around the
              world. Find the perfect device that matches your lifestyle.
            </p>

            {/* EXPLORE BUTTON */}
            <button
              type="button"
              onClick={handleProducts}
              className="mt-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-sky-300/60 bg-gradient-to-r from-[#134e9e] via-[#1b6bd4] to-[#2589f5] px-7 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_0_25px_rgba(37,137,245,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(56,189,248,0.85)] sm:text-sm"
            >
              Explore Collection
              <ArrowRight size={16} />
            </button>

            {/* CLICKABLE FEATURE CARDS */}
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
              {features.map((feature) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setSelectedFeature(feature)}
                  className="group relative flex flex-col items-center rounded-2xl border border-cyan-300/45 bg-gradient-to-b from-white/20 to-[#0c2747]/70 px-3 py-5 text-center shadow-[0_12px_28px_rgba(3,12,28,0.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white/20"
                >
                  {/* CORNER BRACKETS */}
                  <span className="pointer-events-none absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l-2 border-t-2 border-cyan-300/80" />
                  <span className="pointer-events-none absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r-2 border-t-2 border-cyan-300/80" />
                  <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-2.5 w-2.5 border-b-2 border-l-2 border-cyan-300/80" />
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-2.5 w-2.5 border-b-2 border-r-2 border-cyan-300/80" />

                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-gradient-to-b from-white/50 to-sky-300/30 text-white shadow-[0_4px_15px_rgba(56,189,248,0.3)] transition group-hover:scale-105">
                    {feature.icon}
                  </div>

                  <p className="text-xs font-extrabold text-white sm:text-sm">
                    {feature.title}
                  </p>

                  <p className="mt-0.5 text-[10px] font-medium text-slate-300 sm:text-xs">
                    {feature.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PHONE SHOWCASE */}
          <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[450px] lg:col-span-6">
            {/* BACKLIGHT */}
            <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl sm:h-[420px] sm:w-[420px]" />

            {/* ORBITAL RINGS */}
            <div className="pointer-events-none absolute h-64 w-80 -rotate-12 rounded-[100%] border-2 border-cyan-300/65 shadow-[0_0_25px_rgba(56,189,248,0.45)] sm:h-[260px] sm:w-[470px]" />
            <div className="pointer-events-none absolute h-56 w-80 rotate-12 rounded-[100%] border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.25)] sm:h-[240px] sm:w-[450px]" />

            {/* SMARTPHONE IMAGE */}
            <img
              src="/image/Iphone15.png"
              alt="Premium smartphone showcase"
              className="relative z-10 h-[310px] w-full max-w-[380px] object-contain drop-shadow-[0_26px_42px_rgba(2,10,24,0.8)] transition-transform duration-500 hover:scale-105 sm:h-[420px]"
            />

            {/* COLLECTION BADGE */}
            <div className="absolute bottom-2 right-2 z-20 rounded-xl border border-cyan-300/60 bg-[#0b2342]/80 px-5 py-3 shadow-[0_12px_30px_rgba(2,10,24,0.7)] backdrop-blur-xl sm:bottom-5 sm:right-4">
              <span className="pointer-events-none absolute -left-1 -top-1 h-2.5 w-2.5 border-l-2 border-t-2 border-cyan-300" />
              <span className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 border-r-2 border-t-2 border-cyan-300" />
              <span className="pointer-events-none absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b-2 border-l-2 border-cyan-300" />
              <span className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-cyan-300" />

              <p className="text-[9px] font-bold tracking-[0.18em] text-slate-300">
                PREMIUM COLLECTION
              </p>

              <p className="mt-0.5 text-sm font-black text-cyan-300 sm:text-base">
                Latest Smartphones
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/25 bg-white/20 px-5 py-4 text-slate-900 backdrop-blur-xl sm:px-8">
        <div
          style={{
            width: "100%",
            maxWidth: "1380px",
            margin: "0 auto",
            paddingLeft: "clamp(12px, 3vw, 32px)",
            paddingRight: "clamp(12px, 3vw, 32px)",
          }}
          className="box-border flex flex-col items-center justify-between gap-3 sm:flex-row"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-900/20 bg-white/40 text-slate-900 shadow-sm">
              <Smartphone size={17} />
            </div>

            <div>
              <p className="text-xs font-black leading-none tracking-wide text-slate-900 sm:text-sm">
                SMOKIN ANDROIDS
              </p>

              <p className="mt-0.5 text-[8px] font-bold tracking-[0.2em] text-slate-700">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </div>

          <p className="text-center text-xs font-semibold text-slate-800">
            © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
          </p>

          <p className="text-xs font-semibold text-slate-800">
            Your Ultimate Smartphone Destination.
          </p>
        </div>
      </footer>

      {/* FEATURE POPUP / MODAL */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-cyan-300/40 bg-gradient-to-br from-[#0b2342] via-[#12365e] to-[#07182e] p-8 text-center text-white shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedFeature(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-red-500/30"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* FEATURE ICON */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-sky-400/30 to-blue-900/50 text-cyan-300 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
              {selectedFeature.icon}
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-black text-white">
              {selectedFeature.title}
            </h2>

            <p className="mt-2 text-sm font-bold tracking-wide text-cyan-300">
              {selectedFeature.subtitle}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {selectedFeature.description}
            </p>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedFeature(null)}
              className="mt-7 rounded-full border border-cyan-300/50 bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.3)] transition hover:scale-105"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
