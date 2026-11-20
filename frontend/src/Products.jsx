
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
} from "lucide-react";

// ==========================================
// DEFAULT PRODUCTS
// ==========================================

const defaultProducts = [
  {
    id: 1,
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    price: 69990,
    image: "/image/samsung.jpg",
    category: "Cellphone",
    description: "Premium Samsung smartphone with powerful camera.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 84990,
    image: "/image/iphone.jpg",
    category: "Cellphone",
    description: "Premium Apple smartphone with advanced performance.",
  },
  {
    id: 3,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 59990,
    image: "/image/pixel.jpg",
    category: "Cellphone",
    description: "Google smartphone with excellent camera features.",
  },
  {
    id: 4,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 45990,
    image: "/image/xiaomi.jpg",
    category: "Cellphone",
    description: "Powerful Xiaomi smartphone.",
  },
];

// ==========================================
// CATEGORIES
// ==========================================

const categories = [
  { name: "Cellphone", icon: Smartphone },
  { name: "Laptop", icon: Laptop },
  { name: "Tablet", icon: Tablet },
  { name: "Vape", icon: Cigarette },
];

// ==========================================
// PRODUCTS COMPONENT
// ==========================================

export default function Products({
  onBack,
  onLogout,
  onOpenCellphone,
  onOpenLaptop,
  onOpenTablet,
  onOpenVape,
}) {
  const [activeCategory, setActiveCategory] = useState("Cellphone");
  const [products, setProducts] = useState(defaultProducts);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  // ==========================================
  // LOAD ADMIN PRODUCTS
  // ==========================================

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

  // ==========================================
  // FILTER PRODUCTS
  // ==========================================

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        product.category === activeCategory ||
        (activeCategory === "Cellphone" && !product.category);

      const matchesSearch =
        product.name?.toLowerCase().includes(search.toLowerCase()) ||
        product.brand?.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, search]);

  // ==========================================
  // CATEGORY NAVIGATION
  // ==========================================

  function handleCategoryClick(category) {
    setSearch("");
    setSelectedProduct(null);
    setActiveCategory(category);
    setShowMenu(false);

    if (category === "Cellphone") {
      onOpenCellphone?.();
      return;
    }

    if (category === "Laptop") {
      onOpenLaptop?.();
      return;
    }

    if (category === "Tablet") {
      onOpenTablet?.();
      return;
    }

    if (category === "Vape") {
      onOpenVape?.();
      return;
    }
  }

  // ==========================================
  // FORMAT PRICE
  // ==========================================

  function formatPrice(price) {
    return Number(price || 0) > 0
      ? `₱${Number(price).toLocaleString("en-PH")}`
      : "Price not set";
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#eaf5ff] via-[#b9d9ff] to-[#2879ed] font-[Poppins,Arial,sans-serif] text-[#102b59]">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/35 blur-3xl" />
        <div className="absolute right-[-100px] top-[20%] h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[30%] h-96 w-96 rounded-full bg-white/20 blur-3xl" />
      </div>

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="rounded-xl bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-xl font-black tracking-wider text-[#102a5e]">
                SMOKIN
              </h1>

              <p className="text-xs tracking-[4px] text-blue-600">
                ANDROIDS
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-7 md:flex">
            <button
              onClick={onBack}
              className="font-semibold text-blue-900 transition hover:text-blue-500"
            >
              Home
            </button>

            <span className="font-bold text-blue-600">
              Products
            </span>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-lg bg-blue-100 p-2 text-blue-800 transition hover:bg-blue-200 md:hidden"
            aria-label="Toggle menu"
          >
            {showMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {showMenu && (
          <div className="space-y-3 border-t border-blue-100 bg-white/95 px-5 py-4 md:hidden">
            <button
              onClick={() => {
                setShowMenu(false);
                onBack?.();
              }}
              className="block w-full rounded-lg p-2 text-left font-semibold text-blue-900 hover:bg-blue-50"
            >
              Home
            </button>

            <button
              onClick={() => {
                setShowMenu(false);
                onLogout?.();
              }}
              className="flex w-full items-center gap-2 rounded-lg p-2 text-left font-semibold text-red-600 hover:bg-red-50"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        )}
      </header>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <main className="mx-auto max-w-7xl px-5 py-12">

        {/* TITLE */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold tracking-[5px] text-blue-700">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="text-4xl font-black text-[#102a5e] md:text-6xl">
            OUR <span className="text-blue-600">PRODUCTS</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-900/75">
            Discover quality devices and find the perfect product for you.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`flex flex-col items-center gap-3 rounded-2xl border p-6 shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 ${
                  active
                    ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "border-white/70 bg-white/65 text-[#102a5e] hover:border-blue-400 hover:bg-white/90"
                }`}
              >
                <Icon
                  size={35}
                  className={active ? "text-white" : "text-blue-600"}
                />

                <span className="font-bold">
                  {category.name}
                </span>

                <ChevronRight
                  size={17}
                  className={active ? "text-white/80" : "text-blue-400"}
                />
              </button>
            );
          })}
        </div>

        {/* SEARCH */}
        <div className="mx-auto mb-10 flex max-w-xl items-center gap-3 rounded-full border border-blue-200 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
          <Search className="text-blue-600" size={20} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${activeCategory}...`}
            className="w-full bg-transparent text-[#102a5e] outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="text-blue-700 hover:text-red-500"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* PRODUCT LIST TITLE */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#102a5e]">
            {activeCategory}
          </h3>

          <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
              >
                {/* PRODUCT IMAGE */}
                <div className="flex h-64 items-center justify-center bg-blue-50/80 p-5">
                  <img
                    src={product.image || "/image/iphone.jpg"}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                {/* PRODUCT INFORMATION */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {product.brand}
                  </p>

                  <h4 className="mt-2 min-h-14 text-lg font-bold text-[#102a5e]">
                    {product.name}
                  </h4>

                  <p className="mt-3 text-xl font-black text-blue-600">
                    {formatPrice(product.price)}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white shadow-md transition hover:bg-blue-700"
                  >
                    View Details
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* NO PRODUCTS FOUND */
          <div className="rounded-2xl border border-white/80 bg-white/85 py-20 text-center shadow-lg">
            <Search
              size={50}
              className="mx-auto mb-4 text-blue-400"
            />

            <h3 className="text-xl font-bold text-[#102a5e]">
              No Products Found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another search or select another category.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-5 rounded-xl bg-blue-600 px-6 py-2 font-bold text-white transition hover:bg-blue-700"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* ========================================
          PRODUCT DETAILS MODAL
      ======================================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#071b40]/70 p-5 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-blue-100 p-2 text-blue-800 transition hover:bg-red-100 hover:text-red-600"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            {/* PRODUCT IMAGE */}
            <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-5">
              <img
                src={selectedProduct.image || "/image/iphone.jpg"}
                alt={selectedProduct.name}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
            </div>

            {/* PRODUCT DETAILS */}
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-600">
              {selectedProduct.brand}
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#102a5e]">
              {selectedProduct.name}
            </h2>

            <p className="mt-3 text-2xl font-black text-blue-600">
              {formatPrice(selectedProduct.price)}
            </p>

            <div className="my-5 h-px bg-blue-100" />

            <h3 className="mb-2 font-bold text-[#102a5e]">
              Product Description
            </h3>

            <p className="leading-relaxed text-slate-600">
              {selectedProduct.description ||
                "Quality product from SMOKIN ANDROIDS."}
            </p>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-7 w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="mt-10 border-t border-blue-900/20 bg-[#102a5e] px-5 py-7 text-center text-sm text-white">
        © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
      </footer>
    </div>
  );
}
