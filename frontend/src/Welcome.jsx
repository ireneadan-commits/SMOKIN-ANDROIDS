
export default function Welcome({ onGetStarted }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-blue-950">

      {/* FULLSCREEN VIDEO BACKGROUND */}
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube.com/embed/3vvJeRHe3sk?autoplay=1&mute=1&loop=1&playlist=3vvJeRHe3sk&controls=0&rel=0&playsinline=1"
        title="SMOKIN ANDROIDS Background Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* VIDEO OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950/65 via-blue-950/40 to-blue-950/15" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col px-10 py-8 sm:px-14 md:px-20 lg:px-28 xl:px-32">

        {/* HEADER */}
        <header>
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <div className="flex h-11 w-11 items-center justify-center rounded-x5 border border-white/30 bg-blue-500/80 text-xl font-extrabold text-white shadow-lg backdrop-blur-md sm:h-12 sm:w-12">
              S 
            </div>

            {/* BRAND NAME */}
            <span className="text-xs font-extrabold tracking-widest text-white sm:text-sm">
              SMOKIN ANDROIDS
            </span>
          </div>
        </header>

        {/* HERO SECTION */}
        <main className="flex flex-1 items-center">
          <section className="w-full max-w-xl py-10 text-left text-white md:py-12">

            {/* WELCOME TITLE */}
            <h1 className="mb-6 leading-tight">
              <span
                className="block text-3xl font-semibold italic text-blue-200 md:text-4xl"
                style={{ fontFamily: "cursive" }}
              >
                Welcome to
              </span>

              <span className="mt-2 block text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                SMOKIN!
              </span>
            </h1>

            {/* SUBTITLE */}
            <h2 className="mb-4 text-base font-bold tracking-wide text-blue-100 sm:text-lg">
              Your Ultimate Smartphone Destination
            </h2>

            {/* DESCRIPTION */}
            <p className="max-w-md text-sm leading-7 tracking-wide text-white sm:text-base">
              Discover the latest smartphones, explore amazing features,
              and find the perfect device for you.
            </p>

            {/* GET STARTED BUTTON */}
            <button
              onClick={onGetStarted}
              className="mt-12 rounded-full border-2 border-white/50 bg-blue-500/90 px-10 py-4 text-base font-extrabold tracking-widest text-white shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 sm:px-12 sm:py-5 sm:text-lg"
            >
              GET STARTED
            </button>

            {/* BOTTOM BRAND NAME */}
            <p className="mt-6 text-xs font-bold tracking-[4px] text-blue-100">
              SMOKIN ANDROIDS
            </p>

          </section>
        </main>
      </div>
    </div>
  );
}
