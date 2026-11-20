
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Menu,
  Laptop as LaptopIcon,
  ArrowLeft,
  LogOut,
  X,
  Cpu,
  HardDrive,
  ChevronRight,
  MemoryStick,
  Home as HomeIcon,
  ShoppingBag,
  Sparkles,
  CalendarDays,
  Package,
} from "lucide-react";

// ==========================================
// 20 LAPTOP PRODUCTS
// ==========================================

const laptopData = [
  { id: 1, name: "MacBook Pro 16-inch M4 Max", brand: "Apple", price: 189990, processor: "Apple M4 Max", display: "16.2-inch Liquid Retina XDR", ram: "36GB", storage: "1TB SSD", image: "/image/laptop1.jpg" },
  { id: 2, name: "MacBook Pro 14-inch M4 Pro", brand: "Apple", price: 129990, processor: "Apple M4 Pro", display: "14.2-inch Liquid Retina XDR", ram: "24GB", storage: "512GB SSD", image: "/image/laptop2.jpg" },
  { id: 3, name: "MacBook Air 15-inch M3", brand: "Apple", price: 89990, processor: "Apple M3", display: "15.3-inch Retina", ram: "16GB", storage: "512GB SSD", image: "/image/laptop3.jpg" },
  { id: 4, name: "ROG Strix G16", brand: "ASUS", price: 109990, processor: "Intel Core i9", display: "16-inch QHD 240Hz", ram: "32GB", storage: "1TB SSD", image: "/image/laptop4.jpg" },
  { id: 5, name: "ROG Zephyrus G14", brand: "ASUS", price: 99990, processor: "AMD Ryzen 9", display: "14-inch OLED", ram: "16GB", storage: "1TB SSD", image: "/image/laptop5.jpg" },
  { id: 6, name: "ASUS TUF Gaming F15", brand: "ASUS", price: 59990, processor: "Intel Core i7", display: "15.6-inch FHD 144Hz", ram: "16GB", storage: "512GB SSD", image: "/image/laptop6.jpg" },
  { id: 7, name: "Acer Predator Helios Neo 16", brand: "Acer", price: 89990, processor: "Intel Core i7", display: "16-inch WQXGA 165Hz", ram: "16GB", storage: "1TB SSD", image: "/image/laptop7.jpg" },
  { id: 8, name: "Acer Nitro V 15", brand: "Acer", price: 49990, processor: "Intel Core i5", display: "15.6-inch FHD 144Hz", ram: "8GB", storage: "512GB SSD", image: "/image/laptop8.jpg" },
  { id: 9, name: "Acer Swift Go 14", brand: "Acer", price: 54990, processor: "Intel Core Ultra 5", display: "14-inch OLED", ram: "16GB", storage: "512GB SSD", image: "/image/laptop9.jpg" },
  { id: 10, name: "Lenovo Legion Pro 5", brand: "Lenovo", price: 99990, processor: "AMD Ryzen 7", display: "16-inch WQXGA 165Hz", ram: "32GB", storage: "1TB SSD", image: "/image/laptop10.jpg" },
  { id: 11, name: "Lenovo LOQ 15", brand: "Lenovo", price: 52990, processor: "Intel Core i5", display: "15.6-inch FHD 144Hz", ram: "16GB", storage: "512GB SSD", image: "/image/laptop11.jpg" },
  { id: 12, name: "Lenovo Yoga 7", brand: "Lenovo", price: 69990, processor: "AMD Ryzen 7", display: "14-inch OLED Touchscreen", ram: "16GB", storage: "1TB SSD", image: "/image/laptop12.jpg" },
  { id: 13, name: "HP Omen 16", brand: "HP", price: 94990, processor: "Intel Core i7", display: "16.1-inch FHD 165Hz", ram: "16GB", storage: "1TB SSD", image: "/image/laptop13.jpg" },
  { id: 14, name: "HP Victus 15", brand: "HP", price: 49990, processor: "AMD Ryzen 5", display: "15.6-inch FHD 144Hz", ram: "8GB", storage: "512GB SSD", image: "/image/laptop14.jpg" },
  { id: 15, name: "HP Pavilion Plus 14", brand: "HP", price: 57990, processor: "Intel Core Ultra 5", display: "14-inch OLED", ram: "16GB", storage: "512GB SSD", image: "/image/laptop15.jpg" },
  { id: 16, name: "Dell XPS 15", brand: "Dell", price: 119990, processor: "Intel Core i7", display: "15.6-inch OLED", ram: "32GB", storage: "1TB SSD", image: "/image/laptop16.jpg" },
  { id: 17, name: "Dell G15 Gaming", brand: "Dell", price: 64990, processor: "Intel Core i7", display: "15.6-inch FHD 165Hz", ram: "16GB", storage: "512GB SSD", image: "/image/laptop17.jpg" },
  { id: 18, name: "MSI Katana 15", brand: "MSI", price: 69990, processor: "Intel Core i7", display: "15.6-inch FHD 144Hz", ram: "16GB", storage: "1TB SSD", image: "/image/laptop18.jpg" },
  { id: 19, name: "MSI Thin 15", brand: "MSI", price: 45990, processor: "Intel Core i5", display: "15.6-inch FHD 144Hz", ram: "8GB", storage: "512GB SSD", image: "/image/laptop19.jpg" },
  { id: 20, name: "Huawei MateBook X Pro", brand: "Huawei", price: 89990, processor: "Intel Core Ultra 7", display: "14.2-inch OLED Touchscreen", ram: "16GB", storage: "1TB SSD", image: "/image/laptop20.jpg" },
];

const brands = [
  "All Brands",
  "Apple",
  "ASUS",
  "Acer",
  "Lenovo",
  "HP",
  "Dell",
  "MSI",
  "Huawei",
];

// ==========================================
// LAPTOP IMAGE
// ==========================================

function LaptopImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <LaptopIcon size={75} className="text-sky-500" />
      )}
    </div>
  );
}

// ==========================================
// MAIN LAPTOP COMPONENT
// ==========================================

export default function Laptop({
  onBack,
  onHome,
  onLogout,
  isAdmin = false,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortOption, setSortOption] = useState("default");
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const [laptops, setLaptops] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("smokinLaptopStock") || "[]"
      );

      return laptopData.map((item) => {
        const savedItem = saved.find((x) => x.id === item.id);
        return {
          ...item,
          stock:
            Number.isInteger(savedItem?.stock) && savedItem.stock >= 0
              ? savedItem.stock
              : 10,
        };
      });
    } catch {
      return laptopData.map((item) => ({ ...item, stock: 10 }));
    }
  });

  const [reservations, setReservations] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("smokinLaptopReservations") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [showReservationForm, setShowReservationForm] = useState(false);
  const [showReservations, setShowReservations] = useState(false);
  const [reservationLaptop, setReservationLaptop] = useState(null);
  const [reservationMessage, setReservationMessage] = useState("");

  const [customerForm, setCustomerForm] = useState({
    name: "",
    email: "",
    contact: "",
    quantity: 1,
    date: "",
  });

  useEffect(() => {
    localStorage.setItem("smokinLaptopStock", JSON.stringify(laptops));
  }, [laptops]);

  useEffect(() => {
    localStorage.setItem(
      "smokinLaptopReservations",
      JSON.stringify(reservations)
    );
  }, [reservations]);

  const brandCounts = useMemo(() => {
    const counts = { "All Brands": laptops.length };

    brands.slice(1).forEach((brand) => {
      counts[brand] = laptops.filter((item) => item.brand === brand).length;
    });

    return counts;
  }, [laptops]);

  const filteredLaptops = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    let result = laptops.filter((laptop) => {
      const matchesSearch =
        laptop.name.toLowerCase().includes(search) ||
        laptop.brand.toLowerCase().includes(search) ||
        laptop.processor.toLowerCase().includes(search);

      const matchesBrand =
        selectedBrand === "All Brands" ||
        laptop.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });

    if (sortOption === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [laptops, searchTerm, selectedBrand, sortOption]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);

  const getStockStatus = (stock) => {
    if (stock <= 0) {
      return {
        label: "Out of Stock",
        style: "bg-red-100 text-red-600 border-red-200",
      };
    }

    if (stock <= 5) {
      return {
        label: "Low Stock",
        style: "bg-amber-100 text-amber-700 border-amber-200",
      };
    }

    return {
      label: "In Stock",
      style: "bg-green-100 text-green-700 border-green-200",
    };
  };

  const liveReservationLaptop = reservationLaptop
    ? laptops.find((item) => item.id === reservationLaptop.id)
    : null;

  const openReservation = (laptop) => {
    const currentLaptop = laptops.find((item) => item.id === laptop.id);

    if (!currentLaptop || currentLaptop.stock <= 0) {
      alert("Sorry, this laptop is currently out of stock.");
      return;
    }

    setReservationLaptop(currentLaptop);
    setCustomerForm({
      name: "",
      email: "",
      contact: "",
      quantity: 1,
      date: "",
    });
    setReservationMessage("");
    setSelectedLaptop(null);
    setShowReservationForm(true);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    if (!reservationLaptop) return;

    const quantity = Number(customerForm.quantity);
    const currentLaptop = laptops.find(
      (item) => item.id === reservationLaptop.id
    );

    if (
      !customerForm.name.trim() ||
      !customerForm.email.trim() ||
      !customerForm.contact.trim() ||
      !customerForm.date
    ) {
      setReservationMessage("Please complete all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(customerForm.email)) {
      setReservationMessage("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9+\-\s]{7,20}$/.test(customerForm.contact)) {
      setReservationMessage("Please enter a valid contact number.");
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      setReservationMessage("Please enter a valid quantity.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(`${customerForm.date}T00:00:00`);

    if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
      setReservationMessage("Please select today or a future date.");
      return;
    }

    if (!currentLaptop || quantity > currentLaptop.stock) {
      setReservationMessage(
        `Not enough stock. Available stock: ${currentLaptop?.stock ?? 0}`
      );
      return;
    }

    const newReservation = {
      id: Date.now(),
      laptopId: currentLaptop.id,
      laptopName: currentLaptop.name,
      brand: currentLaptop.brand,
      customerName: customerForm.name.trim(),
      email: customerForm.email.trim(),
      contact: customerForm.contact.trim(),
      quantity,
      date: customerForm.date,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    setReservations((previous) => [newReservation, ...previous]);
    setShowReservationForm(false);
    setReservationLaptop(null);
    setReservationMessage("");

    alert("Reservation submitted! Please wait for admin approval.");
  };

  const approveReservation = (reservationId) => {
    const reservation = reservations.find(
      (item) => item.id === reservationId
    );

    if (!reservation || reservation.status !== "Pending") return;

    const currentLaptop = laptops.find(
      (item) => item.id === reservation.laptopId
    );

    if (!currentLaptop) {
      alert("Laptop product was not found.");
      return;
    }

    if (currentLaptop.stock < reservation.quantity) {
      alert(`Not enough stock. Available: ${currentLaptop.stock}`);
      return;
    }

    setLaptops((previous) =>
      previous.map((item) =>
        item.id === reservation.laptopId
          ? { ...item, stock: item.stock - reservation.quantity }
          : item
      )
    );

    setReservations((previous) =>
      previous.map((item) =>
        item.id === reservationId
          ? {
              ...item,
              status: "Approved",
              approvedAt: new Date().toISOString(),
            }
          : item
      )
    );

    alert("Reservation approved. Stock has been deducted.");
  };

  const rejectReservation = (reservationId) => {
    setReservations((previous) =>
      previous.map((item) =>
        item.id === reservationId && item.status === "Pending"
          ? {
              ...item,
              status: "Rejected",
              rejectedAt: new Date().toISOString(),
            }
          : item
      )
    );

    alert("Reservation rejected. Stock was not deducted.");
  };

  const pendingCount = reservations.filter(
    (item) => item.status === "Pending"
  ).length;

  const availableSelectedStock = selectedLaptop
    ? laptops.find((item) => item.id === selectedLaptop.id)?.stock ?? 0
    : 0;

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-[#dff3ff] via-[#f1f9ff] to-[#d9f1ff] font-sans text-slate-900">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute -left-24 top-10 h-[380px] w-[380px] rounded-full bg-sky-300/35 blur-[110px]" />
        <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-300/35 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-sky-200/80 bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-white text-slate-700 hover:bg-sky-50"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300 bg-sky-100 text-sky-600">
                <LaptopIcon size={20} />
              </div>
              <div>
                <h1 className="text-base font-black sm:text-lg">
                  SMOKIN <span className="text-sky-600">ANDROIDS</span>
                </h1>
                <p className="text-[8px] font-bold tracking-[0.22em] text-slate-500">
                  LAPTOP COLLECTION
                </p>
              </div>
            </div>
          </div>

          <div className="hidden flex-1 justify-center px-4 md:flex">
            <div className="relative w-full max-w-md">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search laptops..."
                className="h-10 w-full rounded-xl border border-sky-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {isAdmin && (
              <button
                onClick={() => setShowReservations(true)}
                className="relative flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-3 py-2 text-sm font-bold text-sky-800 hover:bg-sky-100"
              >
                <ShoppingBag size={16} />
                Reservations
                {pendingCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
                    {pendingCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={onHome || onBack}
              className="flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-sky-50"
            >
              <HomeIcon size={15} />
              Home
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-white md:hidden"
          >
            {showMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {showMenu && (
          <div className="space-y-3 border-t border-sky-200 bg-white p-4 md:hidden">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search laptops..."
              className="h-10 w-full rounded-xl border border-sky-200 px-3 text-sm outline-none"
            />

            {isAdmin && (
              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowReservations(true);
                }}
                className="flex w-full items-center justify-between rounded-xl bg-sky-50 px-3 py-3 text-sm font-bold text-sky-800"
              >
                Reservations ({pendingCount})
                <ShoppingBag size={17} />
              </button>
            )}

            <button
              onClick={() => {
                setShowMenu(false);
                (onHome || onBack)?.();
              }}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold"
            >
              <HomeIcon size={16} /> Home
            </button>

            <button
              onClick={() => {
                setShowMenu(false);
                onLogout?.();
              }}
              className="flex w-full items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 py-7 sm:px-8 lg:px-10">
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-sky-200 bg-white/70 px-6 py-10 text-center shadow-lg backdrop-blur-xl sm:py-12">
          <div className="relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-[11px] font-extrabold tracking-widest text-sky-700">
              <Sparkles size={13} /> PREMIUM LAPTOPS
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#071936] sm:text-5xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                Perfect Laptop.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Explore laptops from Apple, ASUS, Acer, Lenovo, HP, Dell, MSI,
              and Huawei. Find the right device for work, study, gaming, and
              everyday use.
            </p>

            <p className="mt-4 text-xs font-extrabold tracking-wider text-sky-700">
              Quality • Performance • Innovation
            </p>
          </div>
        </section>

        <section className="mb-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-black text-[#071936] sm:text-3xl">
                Laptop Collection
              </h3>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Showing {filteredLaptops.length} of {laptops.length} laptops
              </p>
            </div>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-semibold outline-none"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                  selectedBrand === brand
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-sky-200 bg-white/80 text-slate-700 hover:bg-sky-50"
                }`}
              >
                {brand} ({brandCounts[brand] ?? 0})
              </button>
            ))}
          </div>
        </section>

        {/* LAPTOP GRID */}
        {filteredLaptops.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredLaptops.map((laptop) => {
              const stockStatus = getStockStatus(laptop.stock);

              return (
                <div
                  key={laptop.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-sky-200 bg-white/75 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
                >
                  <div className="relative flex h-52 items-center justify-center bg-gradient-to-b from-sky-100/60 to-transparent p-5">
                    <span className="absolute left-3 top-3 rounded-lg border border-sky-200 bg-white px-3 py-1 text-[11px] font-bold text-sky-700">
                      {laptop.brand}
                    </span>
                    <LaptopImage src={laptop.image} alt={laptop.name} />
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        {laptop.brand}
                      </p>
                      <h4 className="mt-1 min-h-[2.75rem] text-base font-extrabold leading-snug text-[#071936]">
                        {laptop.name}
                      </h4>

                      <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                        <p className="flex items-center gap-2">
                          <Cpu size={13} className="text-sky-600" />
                          {laptop.processor}
                        </p>
                        <p className="flex items-center gap-2">
                          <MemoryStick size={13} className="text-sky-600" />
                          {laptop.ram} RAM
                        </p>
                        <p className="flex items-center gap-2">
                          <HardDrive size={13} className="text-sky-600" />
                          {laptop.storage}
                        </p>
                      </div>

                      <p className="mt-3 text-lg font-black text-blue-700">
                        {formatPrice(laptop.price)}
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-slate-500">
                          Available Stock
                        </span>
                        <span className="text-sm font-black text-slate-800">
                          {laptop.stock} Units
                        </span>
                      </div>

                      <span
                        className={`mt-2 inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-bold ${stockStatus.style}`}
                      >
                        {stockStatus.label}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedLaptop(laptop)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#189ad3] to-[#23b5e8] py-2.5 text-sm font-bold text-white shadow-md transition hover:brightness-105"
                    >
                      View Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          <div className="rounded-2xl border border-sky-200 bg-white/80 py-16 text-center">
            <LaptopIcon size={46} className="mx-auto mb-3 text-sky-500" />
            <h3 className="text-lg font-extrabold">No Laptops Found</h3>
            <p className="mt-2 text-sm text-slate-600">
              Try another laptop model or brand.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All Brands");
              }}
              className="mt-5 rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-bold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* LAPTOP DETAILS MODAL */}
      {selectedLaptop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedLaptop(null)}
        >
          <div
            className="relative my-auto w-full max-w-lg rounded-3xl border border-sky-200 bg-white p-6 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLaptop(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-slate-600 hover:bg-red-50 hover:text-red-600"
            >
              <X size={18} />
            </button>

            <div className="flex h-52 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <LaptopImage
                src={selectedLaptop.image}
                alt={selectedLaptop.name}
              />
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-sky-600">
              {selectedLaptop.brand}
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#071936]">
              {selectedLaptop.name}
            </h2>
            <p className="mt-2 text-2xl font-black text-blue-700">
              {formatPrice(selectedLaptop.price)}
            </p>

            <div className="my-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Processor", selectedLaptop.processor],
                ["Display", selectedLaptop.display],
                ["Memory (RAM)", selectedLaptop.ram],
                ["Storage", selectedLaptop.storage],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-sky-200 bg-sky-50 p-3"
                >
                  <p className="text-[11px] font-bold text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-5 rounded-xl border border-sky-200 bg-sky-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">
                    Available Stock
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900">
                    {availableSelectedStock} Units
                  </p>
                </div>
                <span
                  className={`rounded-lg border px-3 py-1 text-xs font-bold ${getStockStatus(availableSelectedStock).style}`}
                >
                  {getStockStatus(availableSelectedStock).label}
                </span>
              </div>
            </div>

            {!isAdmin && (
              <button
                onClick={() => openReservation(selectedLaptop)}
                disabled={availableSelectedStock <= 0}
                className="w-full rounded-xl bg-gradient-to-r from-[#189ad3] to-[#23b5e8] py-3 text-sm font-bold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {availableSelectedStock > 0
                  ? "Reserve Now"
                  : "Out of Stock"}
              </button>
            )}

            <button
              onClick={() => setSelectedLaptop(null)}
              className="mt-3 w-full rounded-xl border border-sky-200 bg-white py-3 text-sm font-bold text-slate-700 hover:bg-sky-50"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CUSTOMER RESERVATION FORM */}
      {showReservationForm && reservationLaptop && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm">
          <form
            onSubmit={handleReservationSubmit}
            className="my-auto w-full max-w-lg rounded-3xl border border-sky-200 bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Laptop Reservation
                </p>
                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Reserve Your Laptop
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowReservationForm(false);
                  setReservationLaptop(null);
                  setReservationMessage("");
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-5 rounded-xl border border-sky-200 bg-sky-50 p-3">
              <p className="text-xs font-bold text-sky-700">Selected Laptop</p>
              <p className="mt-1 font-extrabold text-slate-900">
                {reservationLaptop.name}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Available stock: {liveReservationLaptop?.stock ?? 0} Units
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Full Name *
                </label>
                <input
                  required
                  value={customerForm.name}
                  onChange={(e) =>
                    setCustomerForm({ ...customerForm, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-sky-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={customerForm.email}
                  onChange={(e) =>
                    setCustomerForm({ ...customerForm, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-sky-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Contact Number *
                </label>
                <input
                  required
                  type="tel"
                  value={customerForm.contact}
                  onChange={(e) =>
                    setCustomerForm({
                      ...customerForm,
                      contact: e.target.value,
                    })
                  }
                  placeholder="09XXXXXXXXX"
                  className="w-full rounded-xl border border-sky-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    Quantity to Reserve *
                  </label>
                  <input
                    required
                    type="number"
                    min="1"
                    max={liveReservationLaptop?.stock ?? 0}
                    value={customerForm.quantity}
                    onChange={(e) =>
                      setCustomerForm({
                        ...customerForm,
                        quantity: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-sky-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    Reservation Date *
                  </label>
                  <input
                    required
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={customerForm.date}
                    onChange={(e) =>
                      setCustomerForm({
                        ...customerForm,
                        date: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-sky-200 px-3 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </div>
              </div>
            </div>

            {reservationMessage && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-600">
                {reservationMessage}
              </p>
            )}

            <div className="mt-5 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              Your reservation will be marked as Pending. Stock will only be
              deducted after the admin approves your request.
            </div>

            <button
              type="submit"
              disabled={!liveReservationLaptop || liveReservationLaptop.stock <= 0}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#189ad3] to-[#23b5e8] py-3 text-sm font-bold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      )}

      {/* ADMIN RESERVATIONS PANEL */}
      {isAdmin && showReservations && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="my-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-sky-200 bg-white p-5 shadow-2xl sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Admin Management
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-900">
                  Laptop Reservations
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Review and manage customer reservation requests.
                </p>
              </div>
              <button
                onClick={() => setShowReservations(false)}
                className="flex h-10 w-10 items-center justify-center self-end rounded-xl border border-sky-200 bg-sky-50 hover:bg-red-50 hover:text-red-600 sm:self-auto"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-xs font-bold text-slate-500">
                  Total Reservations
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {reservations.length}
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-bold text-amber-700">Pending</p>
                <p className="mt-1 text-2xl font-black text-amber-700">
                  {pendingCount}
                </p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                <p className="text-xs font-bold text-green-700">Approved</p>
                <p className="mt-1 text-2xl font-black text-green-700">
                  {reservations.filter((item) => item.status === "Approved").length}
                </p>
              </div>
            </div>

            {reservations.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-sky-300 bg-sky-50/50 py-16 text-center">
                <ShoppingBag size={42} className="mx-auto mb-3 text-sky-500" />
                <h3 className="font-extrabold text-slate-900">
                  No Reservations Yet
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Customer reservation requests will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {reservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-extrabold text-slate-900">
                          {reservation.laptopName}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-sky-700">
                          {reservation.brand}
                        </p>
                      </div>
                      <span
                        className={`w-fit rounded-full px-3 py-1 text-[10px] font-extrabold ${
                          reservation.status === "Pending"
                            ? "bg-amber-100 text-amber-700"
                            : reservation.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <p className="font-bold text-slate-400">Customer</p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {reservation.customerName}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">Email</p>
                        <p className="mt-1 break-all font-semibold text-slate-800">
                          {reservation.email}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">Contact</p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {reservation.contact}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">
                          Quantity to Reserve
                        </p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {reservation.quantity}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">
                          Reservation Date
                        </p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {reservation.date}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400">
                          Date Submitted
                        </p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {new Date(reservation.createdAt).toLocaleString("en-PH")}
                        </p>
                      </div>
                    </div>

                    {reservation.status === "Pending" && (
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <button
                          onClick={() => approveReservation(reservation.id)}
                          className="flex-1 rounded-xl bg-green-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-green-600"
                        >
                          Approve Reservation
                        </button>
                        <button
                          onClick={() => rejectReservation(reservation.id)}
                          className="flex-1 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-100"
                        >
                          Reject Reservation
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-12 border-t border-sky-200 bg-white/75 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-300 bg-sky-100 text-sky-600">
              <LaptopIcon size={17} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900">
                SMOKIN ANDROIDS
              </p>
              <p className="text-[8px] font-semibold tracking-widest text-slate-500">
                LAPTOP COLLECTION
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-600">
            © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600">
            Your Ultimate Laptop Destination.
          </p>
        </div>
      </footer>
    </div>
  );
}
