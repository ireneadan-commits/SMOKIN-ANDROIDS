
import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Smartphone,
  Plus,
  Search,
  Pencil,
  Trash2,
  LogOut,
  X,
  Package,
  Tags,
  Menu,
  Box,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const defaultProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 79990,
    stock: 11,
    image: "/image/s23-ultra.png",
    description: "Premium Samsung smartphone.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    price: 45990,
    stock: 12,
    image: "/image/s23.png",
    description: "Samsung flagship smartphone.",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    price: 59990,
    stock: 8,
    image: "/image/iphone14-pro-max.png",
    description: "Apple premium smartphone.",
  },
  {
    id: 4,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 59990,
    stock: 5,
    image: "/image/pixel.jpg",
    description: "Google smartphone.",
  },
];

const availableBrands = [
  "Samsung",
  "Apple",
  "Google",
  "Xiaomi",
  "OPPO",
  "Vivo",
  "Realme",
  "OnePlus",
  "Huawei",
  "Honor",
  "Nothing",
  "Motorola",
  "Infinix",
  "Tecno",
  "Sony",
];

const emptyForm = {
  name: "",
  brand: "Samsung",
  price: "",
  stock: "",
  image: "",
  description: "",
};

export default function AdminDashboard({ user, onLogout }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("smokinAdminProducts");
      return saved ? JSON.parse(saved) : defaultProducts;
    } catch {
      return defaultProducts;
    }
  });

  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState("Dashboard");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const adminName = user?.name || "Admin";

  const brands = useMemo(() => {
    return [
      ...new Set([
        ...availableBrands,
        ...products.map((p) => p.brand).filter(Boolean),
      ]),
    ].sort();
  }, [products]);

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock || 0),
    0
  );

  const totalBrands = new Set(
    products.map((product) => product.brand)
  ).size;

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query);

      const matchesBrand =
        activePage !== "Brands" ||
        selectedBrand === "All Brands" ||
        product.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesBrand;
    });
  }, [products, search, activePage, selectedBrand]);

  function saveProducts(updatedProducts) {
    setProducts(updatedProducts);
    localStorage.setItem(
      "smokinAdminProducts",
      JSON.stringify(updatedProducts)
    );
  }

  function openAddForm() {
    setEditingId(null);
    setForm({
      ...emptyForm,
      brand:
        activePage === "Brands" && selectedBrand !== "All Brands"
          ? selectedBrand
          : "Samsung",
    });
    setError("");
    setShowForm(true);
  }

  function openEditForm(product) {
    setEditingId(product.id);
    setForm({
      name: product.name,
      brand: product.brand,
      price: product.price,
      stock: product.stock,
      image: product.image || "",
      description: product.description || "",
    });
    setError("");
    setShowForm(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      !form.name.trim() ||
      !form.brand ||
      form.price === "" ||
      form.stock === ""
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (Number(form.price) < 0 || Number(form.stock) < 0) {
      setError("Price and stock cannot be negative.");
      return;
    }

    const productData = {
      id: editingId || Date.now(),
      name: form.name.trim(),
      brand: form.brand,
      price: Number(form.price),
      stock: Number(form.stock),
      image: form.image.trim(),
      description: form.description.trim(),
    };

    const updatedProducts = editingId
      ? products.map((p) =>
          p.id === editingId ? productData : p
        )
      : [...products, productData];

    saveProducts(updatedProducts);
    setActivePage("Products");
    setSelectedBrand("All Brands");
    setSearch("");
    setShowForm(false);
    setForm(emptyForm);
    setEditingId(null);
  }

  function deleteProduct(id) {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    saveProducts(products.filter((p) => p.id !== id));
  }

  function handleNavigation(page) {
    setActivePage(page);
    setSelectedBrand("All Brands");
    setSearch("");
    setSidebarExpanded(false);
  }

  function selectBrand(brand) {
    setSelectedBrand(brand);
    setSearch("");
  }

  if (user?.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0e1421] text-white">
        <div className="text-center">
          <h1 className="mb-3 text-2xl font-bold">Access Denied</h1>
          <p className="mb-5 text-gray-400">
            You are not authorized to access this page.
          </p>
          <button
            onClick={onLogout}
            className="rounded-lg bg-red-600 px-6 py-3"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Products", icon: Smartphone },
    { label: "Inventory", icon: Package },
    { label: "Brands", icon: Tags },
  ];

  return (
    <div className="min-h-screen bg-[#0d1422] font-[Arial,sans-serif] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside
          className={`sticky top-0 flex h-screen shrink-0 flex-col border-r border-[#293952] bg-gradient-to-b from-[#111c2e] to-[#101827] transition-all duration-300 ${
            sidebarExpanded ? "w-[245px]" : "w-[76px]"
          }`}
        >
          {/* SIDEBAR HEADER */}
          <div
            className={`flex h-[85px] items-center border-b border-[#293952] ${
              sidebarExpanded ? "justify-between px-5" : "justify-center"
            }`}
          >
            {sidebarExpanded && (
              <div className="flex items-center gap-3">
                <Smartphone
                  size={32}
                  className="shrink-0 text-[#3994ff]"
                />
                <div className="text-[15px] font-extrabold leading-5">
                  <div>SMOKIN</div>
                  <div className="text-[#3994ff]">ANDROIDS</div>
                </div>
              </div>
            )}

            <button
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              title={sidebarExpanded ? "Collapse menu" : "Expand menu"}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-[#344760] bg-[#1c2a3e] text-[#68adff] transition hover:bg-[#263b57]"
            >
              {sidebarExpanded ? (
                <ChevronLeft size={22} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>

          {/* NAVIGATION */}
          <div className={`pt-6 ${sidebarExpanded ? "px-4" : "px-3"}`}>
            {sidebarExpanded && (
              <p className="mb-4 px-1 text-[11px] font-bold tracking-widest text-[#8295b3]">
                MAIN MENU
              </p>
            )}

            <div className="flex flex-col gap-2">
              {navItems.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  title={!sidebarExpanded ? label : ""}
                  onClick={() => handleNavigation(label)}
                  className={`flex h-[47px] w-full items-center rounded-lg border transition-all ${
                    sidebarExpanded
                      ? "gap-3 px-3"
                      : "justify-center px-2"
                  } ${
                    activePage === label
                      ? "border-[#2766a5] bg-gradient-to-r from-[#204a77] to-[#1c3859] text-white shadow-lg shadow-blue-950/20"
                      : "border-[#26364c] bg-[#172336] text-[#a9bad2] hover:border-[#376a9e] hover:bg-[#20334d] hover:text-white"
                  }`}
                >
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="shrink-0"
                  />

                  {sidebarExpanded && (
                    <span className="text-[13px] font-semibold">
                      {label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ADMIN PROFILE */}
          <div className="mt-auto border-t border-[#293952] px-3 pb-5 pt-4">
            <div
              className={`mb-4 flex items-center ${
                sidebarExpanded ? "gap-3 px-1" : "justify-center"
              }`}
            >
              <div
                title={!sidebarExpanded ? adminName : ""}
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-2 border-[#263e5c] bg-[#287ed0] text-[17px] font-bold"
              >
                {adminName.charAt(0).toUpperCase()}
              </div>

              {sidebarExpanded && (
                <div className="min-w-0">
                  <h3 className="truncate text-[13px] font-bold">
                    {adminName}
                  </h3>
                  <p className="mt-1 text-[11px] text-[#93a8c7]">
                    Administrator
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onLogout}
              title={!sidebarExpanded ? "Logout" : ""}
              className={`flex h-[43px] w-full items-center rounded-lg border border-[#923344] bg-[#38202c] text-[#ff91a3] transition hover:bg-[#512534] ${
                sidebarExpanded
                  ? "gap-3 px-3"
                  : "justify-center"
              }`}
            >
              <LogOut size={20} />
              {sidebarExpanded && (
                <span className="text-[13px] font-bold">Logout</span>
              )}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="min-w-0 flex-1 px-7 pb-8 pt-5 max-[900px]:px-5 max-[600px]:px-4">

          {/* HEADER */}
          <header className="mb-5 flex min-h-[58px] items-center justify-between gap-4">
            <div>
              <p className="mb-1 text-[13px] font-bold tracking-wide text-[#3994ff]">
                SMOKIN ANDROIDS
              </p>
              <h1 className="text-[30px] font-bold leading-tight max-[600px]:text-[24px]">
                {activePage}
              </h1>
            </div>

            <div className="flex shrink-0 items-center gap-3 max-[500px]:hidden">
              <span className="text-[13px] font-semibold">
                {adminName}
              </span>
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#287ed0] text-[18px] font-bold">
                {adminName.charAt(0).toUpperCase()}
              </div>
            </div>
          </header>

          {/* DASHBOARD */}
          {activePage === "Dashboard" && (
            <section className="mb-5 rounded-[15px] border border-[#30445f] bg-gradient-to-br from-[#1c2b43] to-[#172236] p-5 max-[600px]:p-4">
              <div className="mb-5 flex items-center justify-between gap-4 max-[650px]:flex-col max-[650px]:items-start">
                <div>
                  <h2 className="text-[21px] font-bold max-[600px]:text-lg">
                    Welcome, {adminName}!
                  </h2>
                  <p className="mt-1 text-[14px] text-[#a5b8d5]">
                    Manage your smartphone products here.
                  </p>
                </div>

                <button
                  onClick={openAddForm}
                  className="flex h-[43px] items-center justify-center gap-2 rounded-lg bg-[#2584e9] px-4 text-[13px] font-bold transition hover:bg-[#409bff] max-[650px]:w-full"
                >
                  <Plus size={19} />
                  Add New Product
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 max-[850px]:grid-cols-1 max-[850px]:gap-3">
                <div className="flex min-h-[88px] items-center justify-between rounded-xl border border-[#354c6c] bg-[#131e30]/70 px-5 py-3">
                  <div>
                    <p className="text-[14px] text-[#b4c5df]">
                      Total Products
                    </p>
                    <h3 className="mt-1 text-[34px] font-bold">
                      {products.length}
                    </h3>
                  </div>
                  <Smartphone size={36} className="text-[#4b9bfa]" />
                </div>

                <div className="flex min-h-[88px] items-center justify-between rounded-xl border border-[#354c6c] bg-[#131e30]/70 px-5 py-3">
                  <div>
                    <p className="text-[14px] text-[#b4c5df]">
                      Total Brands
                    </p>
                    <h3 className="mt-1 text-[34px] font-bold">
                      {totalBrands}
                    </h3>
                  </div>
                  <Tags size={36} className="text-[#4b9bfa]" />
                </div>

                <div className="flex min-h-[88px] items-center justify-between rounded-xl border border-[#354c6c] bg-[#131e30]/70 px-5 py-3">
                  <div>
                    <p className="text-[14px] text-[#b4c5df]">
                      Total Stock
                    </p>
                    <h3 className="mt-1 text-[34px] font-bold">
                      {totalStock}
                    </h3>
                  </div>
                  <Box size={36} className="text-[#4b9bfa]" />
                </div>
              </div>
            </section>
          )}

          {/* INVENTORY */}
          {activePage === "Inventory" && (
            <section className="mb-5 rounded-xl border border-[#30445f] bg-[#182438] p-5">
              <h2 className="text-xl font-bold">
                Inventory Overview
              </h2>
              <p className="mt-2 text-[14px] text-[#a5b8d5]">
                Total smartphones in stock:
                <strong className="ml-2 text-white">{totalStock}</strong>
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 max-[650px]:grid-cols-1">
                <div className="rounded-lg border border-[#344a66] bg-[#131e30] p-4">
                  <p className="text-[13px] text-[#9db0ca]">
                    Available Stock
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-emerald-400">
                    {totalStock}
                  </h3>
                </div>

                <div className="rounded-lg border border-[#344a66] bg-[#131e30] p-4">
                  <p className="text-[13px] text-[#9db0ca]">
                    Low Stock Items
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-orange-400">
                    {products.filter((p) => Number(p.stock) <= 5).length}
                  </h3>
                </div>

                <div className="rounded-lg border border-[#344a66] bg-[#131e30] p-4">
                  <p className="text-[13px] text-[#9db0ca]">
                    Products
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-blue-400">
                    {products.length}
                  </h3>
                </div>
              </div>
            </section>
          )}

          {/* BRANDS */}
          {activePage === "Brands" && (
            <section className="mb-5 rounded-xl border border-[#30445f] bg-gradient-to-br from-[#1c2b43] to-[#172236] p-5 max-[600px]:p-4">

              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">Product Brands</h2>
                  <p className="mt-1 text-[13px] text-[#a5b8d5]">
                    Choose your favorite smartphone brand.
                  </p>
                </div>

                <button
                  onClick={() => setShowAllBrands(!showAllBrands)}
                  className="shrink-0 rounded-lg border border-[#4776a8] bg-[#203b5a] px-3 py-2 text-[12px] font-bold text-[#80bcff] transition hover:bg-[#2b5279]"
                >
                  {showAllBrands ? "See Less ↑" : "See All →"}
                </button>
              </div>

              <button
                onClick={() => selectBrand("All Brands")}
                className={`mb-3 rounded-lg border px-4 py-2 text-[12px] font-bold transition ${
                  selectedBrand === "All Brands"
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-[#344a66] bg-[#172438] text-[#a9caff] hover:bg-[#263b57]"
                }`}
              >
                All Brands ({products.length})
              </button>

              <div className="grid grid-cols-5 gap-3 max-[1000px]:grid-cols-4 max-[650px]:grid-cols-2">
                {(showAllBrands ? brands : brands.slice(0, 5)).map(
                  (brand) => {
                    const count = products.filter(
                      (p) =>
                        p.brand.toLowerCase() === brand.toLowerCase()
                    ).length;

                    const selected = selectedBrand === brand;

                    return (
                      <button
                        key={brand}
                        onClick={() => selectBrand(brand)}
                        className={`min-h-[78px] rounded-lg border p-3 text-left transition ${
                          selected
                            ? "border-blue-400 bg-[#244d79]"
                            : "border-[#344a66] bg-[#172438]/80 hover:border-blue-400 hover:bg-[#203650]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[12px] font-bold">
                            {brand}
                          </span>
                          <Smartphone
                            size={17}
                            className="shrink-0 text-[#58a4ff]"
                          />
                        </div>

                        <p className="mt-2 text-[11px] text-[#a5b8d5]">
                          {count} {count === 1 ? "model" : "models"}
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* PRODUCT MANAGEMENT */}
          <section className="mt-5">
            <div className="mb-4 flex items-center justify-between gap-4 max-[650px]:flex-col max-[650px]:items-start">
              <div>
                <h2 className="text-[22px] font-bold max-[600px]:text-lg">
                  {activePage === "Inventory"
                    ? "Stock List"
                    : activePage === "Brands"
                      ? selectedBrand === "All Brands"
                        ? "All Products by Brand"
                        : `${selectedBrand} Products`
                      : "Product Management"}
                </h2>
                <p className="mt-1 text-[13px] text-[#9eb1ce]">
                  Manage your smartphone collection.
                </p>
              </div>

              {activePage !== "Dashboard" && (
                <button
                  onClick={openAddForm}
                  className="flex items-center gap-2 rounded-lg bg-[#2584e9] px-4 py-2.5 text-[13px] font-bold hover:bg-[#409bff] max-[650px]:w-full max-[650px]:justify-center"
                >
                  <Plus size={18} />
                  Add Product
                </button>
              )}
            </div>

            {/* SEARCH */}
            <div className="mb-3 flex h-[44px] items-center gap-3 rounded-lg border border-[#354b68] bg-[#192438] px-4">
              <Search size={19} className="shrink-0 text-[#8ea5c5]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search product or brand..."
                className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-[#8da2bf]"
              />
            </div>

            {/* PRODUCT TABLE */}
            <div className="overflow-x-auto rounded-xl border border-[#354b68] bg-[#182438]">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#202e43]">
                    {["Product", "Brand", "Price", "Stock", "Actions"].map(
                      (heading) => (
                        <th
                          key={heading}
                          className="border-b border-[#34445c] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#b8c9e2]"
                        >
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="transition hover:bg-[#22334b]"
                    >
                      <td className="border-b border-[#303f56] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#344963] bg-[#29384e]">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                            ) : (
                              <Smartphone
                                size={23}
                                className="text-[#65aaff]"
                              />
                            )}
                          </div>
                          <strong className="text-[13px] text-white">
                            {product.name}
                          </strong>
                        </div>
                      </td>

                      <td className="border-b border-[#303f56] px-4 py-3 text-[13px]">
                        {product.brand}
                      </td>

                      <td className="border-b border-[#303f56] px-4 py-3 text-[13px] font-medium">
                        ₱{Number(product.price).toLocaleString("en-PH")}
                      </td>

                      <td className="border-b border-[#303f56] px-4 py-3">
                        <span
                          className={`inline-flex min-w-[40px] justify-center rounded-full border px-2.5 py-1 text-[12px] font-semibold ${
                            Number(product.stock) <= 5
                              ? "border-[#a14a35] bg-[#462d2a] text-[#ff987b]"
                              : "border-[#08764e] bg-[#123b35] text-[#39dca2]"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>

                      <td className="border-b border-[#303f56] px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditForm(product)}
                            aria-label="Edit product"
                            className="flex h-[34px] w-[38px] items-center justify-center rounded-lg bg-[#247fd5] text-white transition hover:bg-[#409dff]"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            onClick={() => deleteProduct(product.id)}
                            aria-label="Delete product"
                            className="flex h-[34px] w-[38px] items-center justify-center rounded-lg bg-[#c52f49] text-white transition hover:bg-[#ed4560]"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredProducts.length === 0 && (
                <div className="px-5 py-10 text-center">
                  <Smartphone
                    size={34}
                    className="mx-auto text-[#6f87a8]"
                  />
                  <h3 className="mt-3 text-base font-bold">
                    No Products Found
                  </h3>
                  <p className="mt-2 text-[13px] text-[#9eb1ce]">
                    Try another search or add a new smartphone.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        >
          <form
            onSubmit={handleFormSubmit}
            onClick={(e) => e.stopPropagation()}
            className="my-auto max-h-[92vh] w-full max-w-[480px] overflow-y-auto rounded-xl border border-[#405a7b] bg-[#19263a] p-6 shadow-2xl max-[500px]:p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-widest text-[#62aaff]">
                  PRODUCT MANAGEMENT
                </p>
                <h2 className="mt-2 text-xl font-bold">
                  {editingId ? "Edit Product" : "Add New Product"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2b3b53] text-white hover:bg-[#405573]"
              >
                <X size={20} />
              </button>
            </div>

            <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
              Product Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Enter smartphone name"
              className="mb-4 w-full rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
            />

            <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
              Brand *
            </label>
            <select
              value={form.brand}
              onChange={(e) =>
                setForm({ ...form, brand: e.target.value })
              }
              className="mb-4 w-full rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <div className="mb-4 grid grid-cols-2 gap-3 max-[450px]:grid-cols-1">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
                  Price (₱) *
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                  placeholder="Enter price"
                  className="w-full rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
                  Stock *
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={form.stock}
                  onChange={(e) =>
                    setForm({ ...form, stock: e.target.value })
                  }
                  placeholder="Quantity"
                  className="w-full rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
              Image Path
            </label>
            <input
              type="text"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
              placeholder="/image/phone.jpg"
              className="mb-4 w-full rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
            />

            <label className="mb-2 block text-[13px] font-semibold text-[#c2d0e3]">
              Description
            </label>
            <textarea
              rows="3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Enter product description"
              className="mb-4 w-full resize-y rounded-lg border border-[#3c506c] bg-[#101a2a] px-3.5 py-3 text-[13px] text-white outline-none focus:border-blue-400"
            />

            {error && (
              <p className="mb-3 text-[13px] text-red-400">{error}</p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2584e9] py-3 text-[13px] font-bold text-white transition hover:bg-[#409bff]"
            >
              <Plus size={18} />
              {editingId ? "SAVE CHANGES" : "ADD PRODUCT"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
