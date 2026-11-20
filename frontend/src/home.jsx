
import { useState } from "react";
import {
  UserRound,
  Smartphone,
  X,
  LogOut,
  Menu,
  ArrowRight,
  Star,
  Home,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Headphones,
} from "lucide-react";

export default function HomePage({ user, onLogout, onProducts }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleProducts = () => {
    onProducts?.();
    setShowMobileMenu(false);
  };

  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#eaf5ff] via-[#d5e9ff] to-[#b5d6ff] text-[#10366d]"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-white/70 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-400/30 blur-[100px]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#082b64] shadow-lg">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8">

          {/* LOGO */}
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-800">
              <Smartphone size={50
} />
            </div>

            <div>
              <h1 className="text-lg font-black leading-tight tracking-wide text-white sm:text-xl">
                SMOKIN
                <span className="block text-blue-300">
                  ANDROIDS
                </span>
              </h1>

              <p className="text-[8px] font-bold tracking-[2px] text-blue-100">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="#home"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-900 shadow-md"
            >
              <Home size={17} />
              Home
            </a>

            <button
              onClick={handleProducts}
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <ShoppingBag size={17} />
              Products
            </button>
          </nav>

          {/* PROFILE */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-900 transition hover:bg-blue-100"
            >
              <UserRound size={22} />
            </button>

            {showProfile && (
              <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-blue-100 bg-white p-5 text-slate-800 shadow-2xl">

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <UserRound size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-bold">
                      {user?.name || user?.username || "User"}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {user?.email || "Welcome"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowProfile(false);
                    onLogout?.();
                  }}
                  className="flex w-full items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-900 lg:hidden"
          >
            {showMobileMenu ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {showMobileMenu && (
          <div className="border-t border-white/20 bg-[#082b64] p-5 lg:hidden">
            <div className="flex flex-col gap-3">

              <a
                href="#home"
                onClick={() => setShowMobileMenu(false)}
                className="rounded-xl bg-white/15 px-4 py-3 font-semibold text-white"
              >
                Home
              </a>

              <button
                onClick={handleProducts}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-left font-semibold text-white transition hover:bg-white/15"
              >
                <ShoppingBag size={18} />
                Products
              </button>

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                <p className="text-sm font-semibold text-white">
                  {user?.name || user?.username || "User"}
                </p>

                <p className="mt-1 text-xs text-blue-200">
                  {user?.email || "Welcome"}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  onLogout?.();
                }}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-left font-semibold text-red-200 transition hover:bg-white/10"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 mx-auto max-w-[1450px] px-4 pb-12 pt-7 sm:px-7 lg:px-10">

        {/* HERO SECTION */}
        <section className="grid items-center gap-6 rounded-[30px] border border-white/70 bg-white/25 p-5 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-12">

          {/* HERO TEXT */}
          <div className="rounded-[25px] border border-white/80 bg-white/45 p-6 shadow-lg backdrop-blur-xl sm:p-9">

            {/* PREMIUM LABEL */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 text-xs font-bold text-blue-800">
              <Star
                size={15}
                className="fill-yellow-400 text-yellow-500"
              />
              PREMIUM SMARTPHONES
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#10366d] sm:text-5xl lg:text-6xl">
              Discover Your

              <span className="block text-blue-600">
                Next Smartphone.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-700 sm:text-base">
              Explore the latest smartphones from leading brands around the
              world. Find the perfect device that matches your lifestyle.
            </p>

            {/* EXPLORE BUTTON */}
            <button
              onClick={handleProducts}
              className="mt-7 flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:from-blue-900 hover:to-blue-700"
            >
              Explore Collection
              <ArrowRight size={19} />
            </button>

            {/* FEATURES */}
            <div className="mt-9 grid grid-cols-3 divide-x divide-blue-300">

              {/* QUALITY */}
              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <ShieldCheck size={28} className="text-blue-700" />

                <p className="text-xs font-black text-blue-950">
                  Quality
                </p>

                <p className="text-[9px] text-slate-600">
                  Premium Devices
                </p>
              </div>

              {/* PERFORMANCE */}
              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <Zap size={28} className="text-blue-700" />

                <p className="text-xs font-black text-blue-950">
                  Performance
                </p>

                <p className="text-[9px] text-slate-600">
                  Powerful Features
                </p>
              </div>

              {/* SUPPORT */}
              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <Headphones size={28} className="text-blue-700" />

                <p className="text-xs font-black text-blue-950">
                  Support
                </p>

                <p className="text-[9px] text-slate-600">
                  Always Here
                </p>
              </div>
            </div>
          </div>

          {/* HERO PHONE IMAGE */}
          <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[440px]">

            {/* GLOW */}
            <div className="absolute h-64 w-64 rounded-full bg-blue-400/30 blur-3xl sm:h-96 sm:w-96" />

            {/* CIRCLE */}
            <div className="absolute h-64 w-64 rounded-full border-[18px] border-white/30 sm:h-80 sm:w-80" />

            {/* ROTATED CIRCLE */}
            <div className="absolute h-72 w-72 rotate-45 rounded-full border-2 border-blue-400/40 sm:h-96 sm:w-96" />

            {/* PHONE IMAGE */}
            <img
              src="/image/Iphone15.png"
              alt="Premium smartphone showcase"
              className="relative z-10 h-[300px] w-full max-w-[340px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105 sm:h-[410px]"
            />

            {/* FLOATING LABEL */}
            <div className="absolute bottom-3 right-0 z-20 rounded-2xl border border-white bg-white/75 px-5 py-3 shadow-xl backdrop-blur-xl sm:bottom-8 sm:right-3">

              <p className="text-[9px] font-bold tracking-widest text-blue-700">
                PREMIUM COLLECTION
              </p>

              <p className="mt-1 text-sm font-black text-blue-950">
                Latest Smartphones
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mt-10 bg-[#082b64] px-5 py-7 text-white">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-4 sm:flex-row">

          {/* FOOTER LOGO */}
          <div className="flex items-center gap-3">
            <Smartphone size={27} />

            <div>
              <p className="font-black tracking-wide">
                SMOKIN ANDROIDS
              </p>

              <p className="text-[9px] tracking-widest text-blue-200">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center text-xs text-blue-100">
            © 2026 SMOKIN ANDROIDS. All Rights Reserved.
          </p>

          {/* TAGLINE */}
          <p className="text-xs text-blue-200">
            Your Ultimate Smartphone Destination.
          </p>
        </div>
      </footer>
    </div>
  );
}
