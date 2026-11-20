
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Menu,
  Smartphone,
  Laptop,
  Tablet,
  Cigarette,
  ArrowLeft,
  LogOut,
  X,
  ChevronRight,
  Package,
} from "lucide-react";

// DEFAULT SALE PRODUCTS
const defaultProducts = [
  {
    id: 1,
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 69990,
    salePrice: 59990,
    image: "/image/samsung.jpg",
    category: "Cellphone",
    description: "Premium Samsung smartphone with powerful camera.",
    isSale: true,
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 84990,
    salePrice: 74990,
    image: "/image/iphone.jpg",
    category: "Cellphone",
    description: "Premium Apple smartphone with advanced performance.",
    isSale: true,
  },
  {
    id: 3,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 59990,
    salePrice: 49990,
    image: "/image/pixel.jpg",
    category: "Cellphone",
    description: "Google smartphone with excellent camera features.",
    isSale: true,
  },
  {
    id: 4,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 45990,
    salePrice: 39990,
    image: "/image/xiaomi.jpg",
    category: "Cellphone",
    description: "Powerful Xiaomi smartphone.",
    isSale: true,
  },
];

// CATEGORIES
const categories = [
  { name: "Cellphone", icon: Smartphone },
  { name: "Laptop", icon: Laptop },
  { name: "Tablet", icon: Tablet },
  { name: "Vape", icon: Cigarette },
];

export default function Products({
  onBack,
  onLogout,
  onOpenCellphone,
  onOpenLaptop,
  onOpenTablet,
  onOpenVape,
}) {
  // WALA MUNANG SELECTED CATEGORY
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState(defaultProducts);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  // LOAD PRODUCTS FROM ADMIN DASHBOARD
  useEffect(() => {
    function loadProducts() {
      try {
        const saved = JSON.parse(
          localStorage.getItem("smokinAdminProducts") || "[]"
        );

        const adminProducts = Array.isArray(saved) ? saved : [];

        setProducts([...defaultProducts, ...adminProducts]);
      } catch (error) {
        console.error("Unable to load products:", error);
        setProducts(defaultProducts);
      }
    }

    loadProducts();

    window.addEventListener("storage", loadProducts);
    window.addEventListener("smokinProductsUpdated", loadProducts);

    return () => {
      window.removeEventListener("storage", loadProducts);
      window.removeEventListener("smokinProductsUpdated", loadProducts);
    };
  }, []);

  // FILTER SALE PRODUCTS
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // SALE PRODUCTS ONLY
      const matchesSale =
        product.isSale === true ||
        Number(product.salePrice) > 0;

      // CATEGORY FILTER
      const matchesCategory = activeCategory
        ? (product.category || "Cellphone") === activeCategory
        : true;

      // SEARCH FILTER
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        product.name?.toLowerCase().includes(searchText) ||
        product.brand?.toLowerCase().includes(searchText);

      return matchesSale && matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, search]);

  // CATEGORY NAVIGATION
  function handleCategoryClick(category) {
    setSearch("");
    setSelectedProduct(null);
    setActiveCategory(category);
    setShowMenu(false);

    if (category === "Cellphone") {
      onOpenCellphone?.();
    } else if (category === "Laptop") {
      onOpenLaptop?.();
    } else if (category === "Tablet") {
      onOpenTablet?.();
    } else if (category === "Vape") {
      onOpenVape?.();
    }
  }

  // FORMAT PRICE
  function formatPrice(price) {
    return Number(price) > 0
      ? `₱${Number(price).toLocaleString("en-PH")}`
      : "Price not set";
  }

  return (
    <div className="relative isolate flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#040c18] font-sans text-white selection:bg-cyan-500 selection:text-slate-950">

      {/* DEEP SPACE AMBIENT GLOWS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(14,116,144,0.22),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(30,58,138,0.25),transparent_60%)]" />

        <div className="absolute right-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[110px]" />

        <div className="absolute right-[6%] top-[16%] h-64 w-96 -rotate-12 rounded-[100%] border border-cyan-400/25 shadow-[0_0_25px_rgba(34,211,238,0.18)]" />

        <div className="absolute right-[7%] top-[18%] h-56 w-96 rotate-12 rounded-[100%] border border-purple-400/25 shadow-[0_0_25px_rgba(192,132,252,0.18)]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-cyan-400/20 bg-[#071326]/85 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div
          style={{
            width: "100%",
            maxWidth: "1360px",
            margin: "0 auto",
            paddingLeft: "clamp(24px, 5vw, 56px)",
            paddingRight: "clamp(24px, 5vw, 56px)",
          }}
          className="box-border flex items-center justify-between py-3.5"
        >
          {/* LOGO AND BACK */}
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={onBack}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-cyan-400/30 bg-white/5 text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-300"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <h1 className="text-base font-black leading-none tracking-wide text-white sm:text-lg">
                SMOKIN ANDROIDS
              </h1>

              <p className="mt-1 text-[8px] font-bold tracking-[0.22em] text-slate-400">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Home
            </button>

            <span className="text-sm font-semibold text-white">
              Products
            </span>

            <button
              type="button"
              onClick={onLogout}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-red-400/40 bg-red-500/80 px-4 py-1.5 text-xs font-bold text-white shadow-[0_0_15px_rgba(239,68,68,0.35)] transition hover:bg-red-500"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-cyan-400/30 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
          >
            {showMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {showMenu && (
          <div className="space-y-2.5 border-t border-cyan-400/20 bg-[#071326] px-6 py-4 md:hidden">
            <button
              type="button"
              onClick={() => {
                setShowMenu(false);
                onBack?.();
              }}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => {
                setShowMenu(false);
                onLogout?.();
              }}
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-red-300 hover:bg-red-500/15"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main
        style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          paddingLeft: "clamp(24px, 5vw, 56px)",
          paddingRight: "clamp(24px, 5vw, 56px)",
        }}
        className="box-border flex-1 py-8 sm:py-10"
      >
        {/* HERO HEADER */}
        <div
          style={{ textAlign: "center" }}
          className="mb-8 flex flex-col items-center justify-center text-center"
        >
          <p className="mb-2 text-[11px] font-bold tracking-[0.28em] text-slate-300">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-4xl font-black tracking-wide text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.4)] sm:text-5xl">
            OUR PRODUCTS
          </h2>

          <p className="mt-2.5 max-w-xl text-xs text-slate-300 sm:text-sm">
            Discover quality devices and find the perfect product for you.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="mb-7 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => handleCategoryClick(category.name)}
                className={`group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border px-4 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  active
                    ? "border-cyan-300 bg-gradient-to-b from-sky-500/80 to-blue-600/80 text-white shadow-[0_0_28px_rgba(34,211,238,0.45)]"
                    : "border-cyan-400/25 bg-[#08162b]/65 text-slate-200 hover:border-cyan-300/60 hover:bg-[#0b1f3d]/80"
                }`}
              >
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  className={
                    active
                      ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      : "text-slate-300 transition group-hover:text-cyan-300"
                  }
                />

                <span className="text-sm font-bold tracking-wide">
                  {category.name}
                </span>

                <ChevronRight
                  size={15}
                  className={
                    active
                      ? "text-white/90"
                      : "text-slate-400 transition group-hover:text-cyan-300"
                  }
                />
              </button>
            );
          })}
        </div>

        {/* SEARCH BAR */}
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto 32px auto",
          }}
          className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-[#08162b]/80 px-5 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.4)] backdrop-blur-md focus-within:border-cyan-300 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
        >
          <Search className="shrink-0 text-cyan-400" size={18} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              activeCategory
                ? `Search ${activeCategory} sale products...`
                : "Search sale products..."
            }
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="shrink-0 cursor-pointer text-slate-400 transition hover:text-red-400"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* SECTION HEADER */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
            {activeCategory || "SALE"}
          </h3>

          <span className="rounded-full border border-cyan-400/30 bg-[#08162b]/80 px-4 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* SALE PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#08162b]/75 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/70 hover:shadow-[0_15px_35px_rgba(34,211,238,0.18)]"
              >
                {/* PRODUCT IMAGE */}
                <div className="relative flex h-60 items-center justify-center bg-gradient-to-b from-white/[0.04] to-transparent p-5">
                  {/* SALE BADGE */}
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1.5 text-[10px] font-black tracking-widest text-white shadow-lg shadow-red-500/30">
                    SALE
                  </span>

                  <img
                    src={product.image || "/image/iphone.jpg"}
                    alt={product.name}
                    className="h-full w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {product.brand}
                    </p>

                    <h4 className="mt-1 line-clamp-2 text-base font-bold text-white">
                      {product.name}
                    </h4>

                    {/* SALE PRICE */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-lg font-extrabold text-cyan-300">
                        {formatPrice(product.salePrice)}
                      </span>

                      <span className="text-sm text-slate-400 line-through">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>

                  {/* VIEW DETAILS */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#0e56b8] to-[#1d7dfa] py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_4px_15px_rgba(29,125,250,0.4)] transition hover:from-[#1464d1] hover:to-[#338dff] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] sm:text-sm"
                  >
                    View Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-2xl border border-cyan-400/25 bg-[#08162b]/75 py-16 text-center shadow-xl backdrop-blur-md">
            <Package
              size={46}
              className="mx-auto mb-3 text-cyan-400/80"
            />

            <h3 className="text-lg font-bold text-white">
              No Sale Products Found
            </h3>

            <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
              There are currently no sale products available.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 cursor-pointer rounded-full bg-gradient-to-r from-[#0e56b8] to-[#1d7dfa] px-6 py-2 text-xs font-bold text-white shadow-lg transition hover:brightness-110"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#020617]/80 p-5 backdrop-blur-md"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/35 bg-[#08162b]/95 p-7 text-white shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-300"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* PRODUCT IMAGE */}
            <div className="relative flex h-60 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 to-transparent p-5">
              <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1.5 text-xs font-black tracking-widest text-white">
                SALE
              </span>

              <img
                src={selectedProduct.image || "/image/iphone.jpg"}
                alt={selectedProduct.name}
                className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.75)]"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
            </div>

            {/* PRODUCT DETAILS */}
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-cyan-400">
              {selectedProduct.brand}
            </p>

            <h2 className="mt-1.5 text-2xl font-black text-white">
              {selectedProduct.name}
            </h2>

            {/* SALE PRICE */}
            <div className="mt-2.5 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-extrabold text-sky-400">
                {formatPrice(selectedProduct.salePrice)}
              </span>

              <span className="text-base text-slate-400 line-through">
                {formatPrice(selectedProduct.price)}
              </span>
            </div>

            <div className="my-5 h-px bg-cyan-400/20" />

            <h3 className="mb-1.5 text-sm font-bold text-slate-200">
              Product Description
            </h3>

            <p className="text-sm leading-relaxed text-slate-300">
              {selectedProduct.description ||
                "Quality sale product from SMOKIN ANDROIDS."}
            </p>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="mt-7 w-full cursor-pointer rounded-full bg-gradient-to-r from-[#0e56b8] to-[#1d7dfa] py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer
        style={{ textAlign: "center" }}
        className="mt-12 border-t border-cyan-400/20 bg-[#050e1c]/90 px-6 py-4 text-center text-xs text-slate-300 backdrop-blur-md"
      >
        © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
      </footer>
    </div>
  );
}
