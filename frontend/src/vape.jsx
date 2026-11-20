
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Menu,
  Cigarette,
  ArrowLeft,
  X,
  ChevronRight,
  Info,
  Battery,
  Zap,
  Package,
  LogOut,
  ShieldAlert,
} from "lucide-react";

// ==========================================
// VAPE DATA
// ==========================================

const vapeData = [
  {
    id: 1,
    name: "Vaporesso XROS 4",
    brand: "Vaporesso",
    category: "Pod System",
    image: "https://tse3.mm.bing.net/th/id/OIP.mwvWsyKqb4MFg93a-q8XAAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Compact refillable pod-system device.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 2,
    name: "Vaporesso XROS 4 Mini",
    brand: "Vaporesso",
    category: "Pod System",
    image: "https://tse3.mm.bing.net/th/id/OIP.5hlRimNzsUV9SZdGnMzLlgHaHa?r=0&pid=Api&h=220&P=0",
    description: "Compact pod-system device with a simple design.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 3,
    name: "Vaporesso LUXE XR MAX",
    brand: "Vaporesso",
    category: "Pod System",
    image: "https://tse3.mm.bing.net/th/id/OIP.HV3XbY4vypCBrsaVlejFPQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "2800mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 4,
    name: "Vaporesso ECO NANO",
    brand: "Vaporesso",
    category: "Pod System",
    image: "https://tse1.mm.bing.net/th/id/OIP.-fsZxXrYtj_choAKWe_YCwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Small rechargeable pod-system device.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 5,
    name: "Uwell Caliburn G3",
    brand: "Uwell",
    category: "Pod System",
    image: "https://tse4.mm.bing.net/th/id/OIP.eAmwNVCxcLEc47XgAtXuFgHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "900mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 6,
    name: "Uwell Caliburn G3 Pro",
    brand: "Uwell",
    category: "Pod System",
    image: "https://tse3.mm.bing.net/th/id/OIP.mHKklbXmdnXn3V6LAkEiRAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Pod-system device with a display.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 7,
    name: "Uwell Caliburn A3S",
    brand: "Uwell",
    category: "Pod System",
    image: "https://tse4.mm.bing.net/th/id/OIP.eNFIJCxo_bVKl6mKmv4ytwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Compact rechargeable pod-system device.",
    battery: "520mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 8,
    name: "SMOK Nord 5",
    brand: "SMOK",
    category: "Pod System",
    image: "https://tse4.mm.bing.net/th/id/OIP.8Edg8y-U5ugAPDKJAh9B6gHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "2000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 9,
    name: "SMOK Novo 5",
    brand: "SMOK",
    category: "Pod System",
    image: "https://tse1.mm.bing.net/th/id/OIP.nmruuduAVh1_AmM6DerGsAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Compact pod-system device.",
    battery: "900mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 10,
    name: "SMOK RPM 5",
    brand: "SMOK",
    category: "Pod System",
    image: "https://tse2.mm.bing.net/th/id/OIP.iMhybOEklTjb6bSxENM_ngHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "2000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 11,
    name: "OXVA XLIM Pro",
    brand: "OXVA",
    category: "Pod System",
    image: "https://tse4.mm.bing.net/th/id/OIP.2e9ia64aTDNQPaxWrS-yAQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 12,
    name: "OXVA XLIM SQ Pro",
    brand: "OXVA",
    category: "Pod System",
    image: "https://tse4.mm.bing.net/th/id/OIP.gyzh8WwHSHKYW0kEiB6WrAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Compact pod-system djpgevice with a display.",
    battery: "1200mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 13,
    name: "Geekvape Wenax Q",
    brand: "Geekvape",
    category: "Pod System",
    image: "https://tse3.mm.bing.net/th/id/OIP.0Yi0vC-_TF_3Z_9YVbllMAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Rechargeable pod-system device.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 14,
    name: "Geekvape Aegis Boost 3",
    brand: "Geekvape",
    category: "Pod System",
    image: "https://admin.elementvape.com/media/catalog/product/g/e/geek_vape_aegis_boost_3_60w_pod_system_-_default.png",
    description: "Rechargeable pod-system device.",
    battery: "3000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 15,
    name: "Lost Vape Ursa Nano 3",
    brand: "Lost Vape",
    category: "Pod System",
    image: "https://tse1.mm.bing.net/th/id/OIP.DMZrVsLrEuFpB2XYM0PuNwHaJc?r=0&pid=Api&h=220&P=0",
    description: "Compact rechargeable pod-system device.",
    battery: "1200mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
  {
    id: 16,
    name: "Lost Vape Ursa Baby 3",
    brand: "Lost Vape",
    category: "Pod System",
    image: "/image/lost-vape-ursa-baby-3.jpg",
    description: "Compact pod-system device.",
    battery: "1000mAh",
    charging: "USB-C",
    type: "Refillable pod system",
  },
];

const brands = [
  "All Brands",
  "Vaporesso",
  "Uwell",
  "SMOK",
  "OXVA",
  "Geekvape",
  "Lost Vape",
];

// ==========================================
// VAPE PAGE
// ==========================================

export default function VapePage({ onBack, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedVape, setSelectedVape] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHealthWarning, setShowHealthWarning] = useState(true);

  // HEALTH NOTICE: AUTOMATICALLY CLOSE AFTER 10 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHealthWarning(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const filteredVapes = useMemo(() => {
    return vapeData.filter((vape) => {
      const matchesSearch =
        vape.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vape.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All Brands" ||
        vape.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });
  }, [searchTerm, selectedBrand]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All Brands");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf5ff] via-[#cfe5ff] to-[#3984ed] text-[#102a5e]">

      {/* ================================== */}
      {/* HEALTH NOTICE NOTIFICATION */}
      {/* ================================== */}

      {showHealthWarning && (
        <div className="fixed right-5 top-24 z-[100] w-[calc(100%-40px)] max-w-sm animate-in slide-in-from-right duration-500">
          <div className="flex gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-2xl">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <ShieldAlert size={24} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-black text-[#102a5e]">
                  Health Notice
                </h3>

                <button
                  onClick={() => setShowHealthWarning(false)}
                  className="text-slate-400 transition hover:text-red-500"
                  aria-label="Close notification"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Vaping is not risk-free. Nicotine is addictive and may
                affect your health. Not intended for minors,
                non-smokers, or pregnant people.
              </p>

              {/* 10-SECOND PROGRESS BAR */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-amber-100">
                <div className="h-full w-full origin-left animate-[shrink_10s_linear_forwards] rounded-full bg-amber-500" />
              </div>

              <p className="mt-1 text-right text-[10px] text-slate-400">
                Disappears in 10 seconds
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================================== */}
      {/* HEADER */}
      {/* ================================== */}

      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="rounded-xl bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
              aria-label="Go back"
            >
              <ArrowLeft size={21} />
            </button>

            <div>
              <h1 className="text-xl font-black tracking-wider text-[#102a5e] sm:text-2xl">
                SMOKIN{" "}
                <span className="text-blue-600">ANDROIDS</span>
              </h1>
              <p className="text-[10px] tracking-[3px] text-blue-600">
                VAPE INFORMATION
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={onBack}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50"
            >
              Categories
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>

          <button
            className="rounded-lg p-2 text-blue-800 hover:bg-blue-50 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenu && (
          <div className="flex flex-col gap-2 border-t border-blue-100 bg-white p-4 md:hidden">
            <button
              onClick={() => {
                setMobileMenu(false);
                onBack?.();
              }}
              className="rounded-lg p-3 text-left font-semibold text-blue-900 hover:bg-blue-50"
            >
              Categories
            </button>

            <button
              onClick={() => {
                setMobileMenu(false);
                onLogout?.();
              }}
              className="flex items-center gap-2 rounded-lg p-3 text-left font-semibold text-red-600 hover:bg-red-50"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        )}
      </header>

      {/* ================================== */}
      {/* MAIN CONTENT */}
      {/* ================================== */}

      <main className="mx-auto min-h-screen max-w-7xl px-5 py-10">

        {/* TITLE */}
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[4px] text-blue-700">
            Device Information
          </p>

          <h2 className="text-3xl font-black text-[#102a5e] sm:text-5xl">
            Vape{" "}
            <span className="text-blue-600">Collection</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm text-blue-800 sm:text-base">
            Browse device names, brands, and general specifications.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-7 flex justify-center">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-blue-200 bg-white px-4 py-3 shadow-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
            <Search className="shrink-0 text-blue-600" size={20} />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search vape device or brand..."
              className="w-full bg-transparent text-sm text-[#102a5e] outline-none placeholder:text-slate-400"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="text-blue-700 hover:text-red-500"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* BRAND FILTER */}
        <div className="mb-9 flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm transition ${
                selectedBrand === brand
                  ? "border-blue-600 bg-blue-600 text-white shadow-md"
                  : "border-blue-200 bg-white/90 text-blue-900 hover:border-blue-400 hover:bg-blue-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* RESULTS COUNT */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-blue-900">
            <span className="font-black text-blue-700">
              {filteredVapes.length}
            </span>{" "}
            devices found
          </p>

          <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
            <Cigarette size={16} />
            Vape Devices
          </div>
        </div>

        {/* PRODUCT GRID */}
        {filteredVapes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVapes.map((vape) => (
              <div
                key={vape.id}
                className="group overflow-hidden rounded-2xl border border-white bg-white/95 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl"
              >
                <div className="relative flex h-60 items-center justify-center overflow-hidden bg-blue-50 p-5">
                  <img
                    src={vape.image}
                    alt={vape.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    {vape.brand}
                  </span>
                </div>

                <div className="p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    {vape.category}
                  </p>

                  <h3 className="min-h-12 text-lg font-bold text-[#102a5e]">
                    {vape.name}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm text-slate-500">
                    {vape.description}
                  </p>

                  <button
                    onClick={() => setSelectedVape(vape)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
                  >
                    View Information
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-white/90 py-20 text-center shadow-lg">
            <Cigarette
              size={45}
              className="mx-auto mb-4 text-blue-400"
            />

            <h3 className="text-xl font-black text-[#102a5e]">
              No Device Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another device name or brand.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* ================================== */}
      {/* DEVICE DETAILS MODAL */}
      {/* ================================== */}

      {selectedVape && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#071b40]/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVape(null)}
        >
          <div
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVape(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-blue-100 p-2 text-blue-800 transition hover:bg-red-100 hover:text-red-600"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <img
                  src={selectedVape.image}
                  alt={selectedVape.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="max-h-72 w-full object-contain"
                />
              </div>

              {/* INFORMATION */}
              <div className="p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[3px] text-blue-600">
                  {selectedVape.brand}
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#102a5e] sm:text-3xl">
                  {selectedVape.name}
                </h2>

                <div className="my-6 h-px bg-blue-100" />

                <h3 className="mb-4 font-black text-[#102a5e]">
                  Device Information
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Package className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Device Type</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedVape.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Battery className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Battery Information</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedVape.battery}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Zap className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Charging</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedVape.charging}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Info className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Description</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedVape.description}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVape(null)}
                  className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Close Information
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-10 border-t border-blue-900 bg-[#102a5e] px-5 py-7 text-center text-sm text-white">
        © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
      </footer>
    </div>
  );
}
