
import { useMemo, useState } from "react";
import {
  Search,
  Menu,
  Tablet as TabletIcon,
  ArrowLeft,
  Star,
  LogOut,
  X,
  Cpu,
  Monitor,
  Battery,
  HardDrive,
  ChevronRight,
  MemoryStick,
} from "lucide-react";

// ==========================================
// TABLET DATA
// ==========================================

const tabletData = [
  // APPLE
  {
    id: 1,
    name: "iPad Pro 13-inch M4",
    brand: "Apple",
    price: 99990,
    image: "https://tse4.mm.bing.net/th/id/OIP.90D5YypdeskgVhnkfXx-EAHaEK?r=0&pid=Api&h=220&P=0",
    processor: "Apple M4",
    display: "13-inch Ultra Retina XDR OLED",
    ram: "8GB",
    storage: "256GB",
    battery: "Up to 10 hours",
  },
  {
    id: 2,
    name: "iPad Pro 11-inch M4",
    brand: "Apple",
    price: 79990,
    image: "https://tse3.mm.bing.net/th/id/OIP.1pO1YmRM3GJ-7ieR-49y0QHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Apple M4",
    display: "11-inch Ultra Retina XDR OLED",
    ram: "8GB",
    storage: "256GB",
    battery: "Up to 10 hours",
  },
  {
    id: 3,
    name: "iPad Air 13-inch M3",
    brand: "Apple",
    price: 54990,
    image: "https://tse4.mm.bing.net/th/id/OIP.LRjbbzuvX3qeqxhUMRlQ7gHaIw?r=0&pid=Api&h=220&P=0",
    processor: "Apple M3",
    display: "13-inch Liquid Retina",
    ram: "8GB",
    storage: "128GB",
    battery: "Up to 10 hours",
  },
  {
    id: 4,
    name: "iPad Air 11-inch M3",
    brand: "Apple",
    price: 39990,
    image: "https://tse1.mm.bing.net/th/id/OIP.-VOafAiTvYZZYiAa6o4_7QHaIZ?r=0&pid=Api&h=220&P=0",
    processor: "Apple M3",
    display: "11-inch Liquid Retina",
    ram: "8GB",
    storage: "128GB",
    battery: "Up to 10 hours",
  },
  {
    id: 5,
    name: "iPad mini A17 Pro",
    brand: "Apple",
    price: 34990,
    image: "https://tse1.mm.bing.net/th/id/OIP.0eypmwVI-bsRerQ-J8TOIgHaI3?r=0&pid=Api&h=220&P=0",
    processor: "Apple A17 Pro",
    display: "8.3-inch Liquid Retina",
    ram: "8GB",
    storage: "128GB",
    battery: "Up to 10 hours",
  },
  {
    id: 6,
    name: "iPad 11th Generation",
    brand: "Apple",
    price: 21990,
    image: "https://tse4.mm.bing.net/th/id/OIP.dtSV4urzL3-MWoBwoEf_SAHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Apple A16",
    display: "11-inch Liquid Retina",
    ram: "6GB",
    storage: "128GB",
    battery: "Up to 10 hours",
  },
  {
    id: 25,
    name: "iPad Air 11-inch M4 (2026)",
    brand: "Apple",
    price: 42990,
    image: "https://tse4.mm.bing.net/th/id/OIP.Pb5nqX8oSxmL7kLmiEygdQHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Apple M4",
    display: "11-inch Liquid Retina",
    ram: "TBA",
    storage: "128GB",
    battery: "Up to 10 hours",
  },
  {
    id: 26,
    name: "iPad Air 13-inch M4 (2026)",
    brand: "Apple",
    price: 54990,
    image: "https://tse4.mm.bing.net/th/id/OIP.lLm5OGyyHZk9eVIqEH2kygHaID?r=0&pid=Api&h=220&P=0",
    processor: "Apple M4",
    display: "13-inch Liquid Retina",
    ram: "TBA",
    storage: "128GB",
    battery: "Up to 10 hours",
  },

  // SAMSUNG
  {
    id: 7,
    name: "Samsung Galaxy Tab S10 Ultra",
    brand: "Samsung",
    price: 84990,
    image: "https://tse4.mm.bing.net/th/id/OIP.afym1LxFzU8eBLt2mzzHCQHaD_?r=0&pid=Api&h=220&P=0",
    processor: "MediaTek Dimensity 9300+",
    display: "14.6-inch Dynamic AMOLED 2X",
    ram: "12GB",
    storage: "256GB",
    battery: "11200mAh",
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S10+",
    brand: "Samsung",
    price: 69990,
    image: "https://tse2.mm.bing.net/th/id/OIF.CT75E31HesVUjiceJFBaGQ?r=0&pid=Api&h=220&P=0",
    processor: "MediaTek Dimensity 9300+",
    display: "12.4-inch Dynamic AMOLED 2X",
    ram: "12GB",
    storage: "256GB",
    battery: "10090mAh",
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S10 FE+",
    brand: "Samsung",
    price: 39990,
    image: "https://tse3.mm.bing.net/th?id=OIF.ECp7%2bUZqXQuBX0CDlNgG8A&r=0&pid=Api&h=220&P=0",
    processor: "Exynos 1580",
    display: "13.1-inch LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "10090mAh",
  },
  {
    id: 10,
    name: "Samsung Galaxy Tab S10 FE",
    brand: "Samsung",
    price: 32990,
    image: "https://tse1.mm.bing.net/th/id/OIP.xJg3lm3U6qZSO9mfGdw-iQHaEK?r=0&pid=Api&h=220&P=0",
    processor: "Exynos 1580",
    display: "10.9-inch LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "8000mAh",
  },
  {
    id: 11,
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    price: 79990,
    image: "https://tse3.mm.bing.net/th/id/OIP.ELCbKzqe8iiurmk6ewaMgQHaFE?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 8 Gen 2",
    display: "14.6-inch Dynamic AMOLED 2X",
    ram: "12GB",
    storage: "256GB",
    battery: "11200mAh",
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab A9+",
    brand: "Samsung",
    price: 15990,
    image: "https://tse1.mm.bing.net/th?id=OIF.S%2fVuicFSVgFRbhUUKFKXvw&r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 695",
    display: "11-inch TFT LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "7040mAh",
  },
  {
    id: 27,
    name: "Galaxy Tab S12 Ultra (2026)",
    brand: "Samsung",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.vh1g9zCBCnC4yKYo6R43yQHaEK?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 28,
    name: "Galaxy Tab S12+ (2026)",
    brand: "Samsung",
    price: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.0C9u-04clI4tPWFkqXVcKAHaFj?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 29,
    name: "Galaxy Tab A11+",
    brand: "Samsung",
    price: null,
    image: "https://tse1.mm.bing.net/th/id/OIP._qXM3Ixh3tIhuryB3dLaIAHaFj?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },

  // LENOVO
  {
    id: 13,
    name: "Lenovo Tab Extreme",
    brand: "Lenovo",
    price: 69990,
    image: "https://tse4.mm.bing.net/th/id/OIP.bD0YGFw89glyzW7MA3q46AHaFo?r=0&pid=Api&h=220&P=0",
    processor: "MediaTek Dimensity 9000",
    display: "14.5-inch OLED",
    ram: "12GB",
    storage: "256GB",
    battery: "12300mAh",
  },
  {
    id: 14,
    name: "Lenovo Tab P12",
    brand: "Lenovo",
    price: 24990,
    image: "https://tse2.mm.bing.net/th/id/OIP.mWwxSHspvKxT1c3gYbhuogHaEK?r=0&pid=Api&h=220&P=0",
    processor: "MediaTek Dimensity 7050",
    display: "12.7-inch LTPS LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "10200mAh",
  },
  {
    id: 15,
    name: "Lenovo Tab M11",
    brand: "Lenovo",
    price: 11990,
    image: "https://tse3.mm.bing.net/th/id/OIF.0p4hs6JCHEOunMhZ2xvTkg?r=0&pid=Api&h=220&P=0",
    processor: "MediaTek Helio G88",
    display: "11-inch IPS LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "7040mAh",
  },
  {
    id: 16,
    name: "Lenovo Legion Tab",
    brand: "Lenovo",
    price: 29990,
    image: "https://tse3.mm.bing.net/th/id/OIP.XXWC1ds0b0erQCceY1FCOgHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 8 Gen 3",
    display: "8.8-inch LCD",
    ram: "12GB",
    storage: "256GB",
    battery: "6550mAh",
  },
  {
    id: 30,
    name: "Lenovo Idea Tab Pro Gen 2 (2026)",
    brand: "Lenovo",
    price: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.oFh6PN-VUjJ6SnU_S8FUTgHaFj?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 31,
    name: "Lenovo Legion Tab Gen 5 (2026)",
    brand: "Lenovo",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.wOlDgc5r9gCTD4eQZJ4_GwHaEo?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 32,
    name: "Lenovo Yoga Tab Plus Gen 2",
    brand: "Lenovo",
    price: null,
    image: "https://tse2.mm.bing.net/th/id/OIF.QieSMazZsXVtueft98kUxQ?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },

  // XIAOMI
  {
    id: 17,
    name: "Xiaomi Pad 7 Pro",
    brand: "Xiaomi",
    price: 32990,
    image: "https://tse3.mm.bing.net/th/id/OIP.lI1u8yZ0jfhBCigsj9K5PQHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 8s Gen 3",
    display: "11.2-inch 3.2K LCD",
    ram: "12GB",
    storage: "256GB",
    battery: "8850mAh",
  },
  {
    id: 18,
    name: "Xiaomi Pad 7",
    brand: "Xiaomi",
    price: 22990,
    image: "https://tse2.mm.bing.net/th/id/OIP.Ej-Ve9ouJIZHFsLHP6RlIAHaE7?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 7+ Gen 3",
    display: "11.2-inch 3.2K LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "8850mAh",
  },
  {
    id: 19,
    name: "Redmi Pad Pro",
    brand: "Xiaomi",
    price: 16990,
    image: "https://tse4.mm.bing.net/th/id/OIF.TRentAPrVAT5e0QvoQWdOg?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 7s Gen 2",
    display: "12.1-inch LCD",
    ram: "8GB",
    storage: "256GB",
    battery: "10000mAh",
  },
  {
    id: 20,
    name: "Redmi Pad SE",
    brand: "Xiaomi",
    price: 10990,
    image: "https://tse4.mm.bing.net/th/id/OIP.jxIgo9pr24KOvXLYGQEIcQHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 680",
    display: "11-inch LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "8000mAh",
  },
  {
    id: 33,
    name: "Xiaomi Pad 8",
    brand: "Xiaomi",
    price: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.EVsKXyzr7V_-R-GwaVzI0gHaHa?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 34,
    name: "Xiaomi Pad 8 Pro",
    brand: "Xiaomi",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.mtbGTSS9SZ7DvCUt5ztz3QHaHa?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 35,
    name: "Redmi Pad 2",
    brand: "Xiaomi",
    price: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.uYkjt6STBzNc8AUEeqL8dQHaHa?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },

  // HUAWEI
  {
    id: 21,
    name: "Huawei MatePad Pro 13.2",
    brand: "Huawei",
    price: 59999,
    image: "https://tse1.mm.bing.net/th/id/OIP.SjlaORL_RRYWsv016BBLegHaGB?r=0&pid=Api&h=220&P=0",
    processor: "Kirin 9000S",
    display: "13.2-inch OLED",
    ram: "12GB",
    storage: "256GB",
    battery: "10100mAh",
  },
  {
    id: 22,
    name: "Huawei MatePad 11.5 S",
    brand: "Huawei",
    price: 29999,
    image: "https://tse2.mm.bing.net/th/id/OIP.eck-YtsAt-OsVrkCU3p4aQHaFT?r=0&pid=Api&h=220&P=0",
    processor: "Kirin 9000WL",
    display: "11.5-inch PaperMatte",
    ram: "8GB",
    storage: "256GB",
    battery: "8800mAh",
  },
  {
    id: 23,
    name: "Huawei MatePad SE 11",
    brand: "Huawei",
    price: 11999,
    image: "https://tse1.mm.bing.net/th/id/OIF.5D3mHkKED5JpH5rBWefohQ?r=0&pid=Api&h=220&P=0",
    processor: "Kirin 710A",
    display: "11-inch IPS LCD",
    ram: "8GB",
    storage: "128GB",
    battery: "7700mAh",
  },
  {
    id: 36,
    name: "Huawei MatePad 11.5 (2026)",
    brand: "Huawei",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.DVqH3v5m0sJpDQ-XZRsvygHaGB?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "11.5-inch Display",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 37,
    name: "Huawei MatePad 11.5 S (2026)",
    brand: "Huawei",
    price: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.Wl_orfLPOijhL0W5xRakYAEsC0?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "11.5-inch PaperMatte",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 38,
    name: "Huawei MatePad Air (2026)",
    brand: "Huawei",
    price: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.pc012afMrusSk6989aL3pAHaGD?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
  {
    id: 39,
    name: "Huawei MatePad 12 X (2026)",
    brand: "Huawei",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.qf1MYaEkvaY7mmo564b--QHaGq?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "12-inch PaperMatte",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },

  // ONEPLUS
  {
    id: 24,
    name: "OnePlus Pad 2",
    brand: "OnePlus",
    price: 39990,
    image: "https://tse2.mm.bing.net/th/id/OIP.SBaHyPew7A4xUnWAibuaQQHaHa?r=0&pid=Api&h=220&P=0",
    processor: "Snapdragon 8 Gen 3",
    display: "12.1-inch LCD",
    ram: "12GB",
    storage: "256GB",
    battery: "9510mAh",
  },
  {
    id: 40,
    name: "OnePlus Pad Go 2",
    brand: "OnePlus",
    price: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.0fuVsGvxB9WQFfy8qfCgogHaHa?r=0&pid=Api&h=220&P=0",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
    battery: "TBA",
  },
];

const brands = [
  "All Brands",
  "Apple",
  "Samsung",
  "Lenovo",
  "Xiaomi",
  "Huawei",
  "OnePlus",
];

// ==========================================
// TABLET COMPONENT
// ==========================================

export default function TabletPage({ onBack, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedTablet, setSelectedTablet] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredTablets = useMemo(() => {
    let result = tabletData.filter((tablet) => {
      const matchesSearch =
        tablet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tablet.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All Brands" ||
        tablet.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });

    if (sortOrder === "low") {
      result = [...result].sort((a, b) => {
        if (a.price == null) return 1;
        if (b.price == null) return -1;
        return a.price - b.price;
      });
    } else if (sortOrder === "high") {
      result = [...result].sort((a, b) => {
        if (a.price == null) return 1;
        if (b.price == null) return -1;
        return b.price - a.price;
      });
    } else if (sortOrder === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [searchTerm, selectedBrand, sortOrder]);

  const formatPrice = (price) => {
    if (price === null || price === undefined) {
      return "Price TBA";
    }

    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All Brands");
    setSortOrder("default");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf5ff] via-[#cfe5ff] to-[#3984ed] text-[#102a5e]">

      {/* HEADER */}
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
                PREMIUM TABLETS
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

      {/* MAIN CONTENT */}
      <main className="mx-auto min-h-screen max-w-7xl px-5 py-10">

        {/* TITLE */}
        <div className="mb-9 flex flex-col items-center justify-center text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[4px] text-blue-700">
            Explore Our Collection
          </p>

          <h2 className="text-3xl font-black text-[#102a5e] sm:text-5xl">
            Tablet{" "}
            <span className="text-blue-600">Collection</span>
          </h2>

          <p className="mt-3 text-sm text-blue-800 sm:text-base">
            Discover tablets from different brands.
          </p>
        </div>

        {/* SEARCH AND SORT */}
        <div className="mb-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-blue-200 bg-white px-4 py-3 shadow-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
            <Search className="shrink-0 text-blue-600" size={20} />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tablet or brand..."
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

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full max-w-[220px] rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-[#102a5e] shadow-md outline-none focus:border-blue-500"
          >
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
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

        {/* RESULTS */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-blue-900">
            <span className="font-black text-blue-700">
              {filteredTablets.length}
            </span>{" "}
            tablet units found
          </p>

          <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
            <TabletIcon size={16} />
            Tablets
          </div>
        </div>

        {/* TABLET GRID */}
        {filteredTablets.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTablets.map((tablet) => (
              <div
                key={tablet.id}
                className="group overflow-hidden rounded-2xl border border-white bg-white/95 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative flex h-60 items-center justify-center overflow-hidden bg-blue-50 p-5">
                  <img
                    src={tablet.image}
                    alt={tablet.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    {tablet.brand}
                  </span>
                </div>

                {/* INFORMATION */}
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}

                    <span className="ml-1 text-xs text-slate-500">
                      Featured
                    </span>
                  </div>

                  <h3 className="min-h-12 text-lg font-bold text-[#102a5e]">
                    {tablet.name}
                  </h3>

                  <p className="mt-2 text-xl font-black text-blue-600">
                    {formatPrice(tablet.price)}
                  </p>

                  <button
                    onClick={() => setSelectedTablet(tablet)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
                  >
                    View Details
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-white/90 py-20 text-center shadow-lg">
            <TabletIcon
              size={45}
              className="mx-auto mb-4 text-blue-400"
            />

            <h3 className="text-xl font-black text-[#102a5e]">
              No Tablet Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another tablet name or brand.
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

      {/* TABLET DETAILS MODAL */}
      {selectedTablet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#071b40]/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTablet(null)}
        >
          <div
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTablet(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-blue-100 p-2 text-blue-800 transition hover:bg-red-100 hover:text-red-600"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* MODAL IMAGE */}
              <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <img
                  src={selectedTablet.image}
                  alt={selectedTablet.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="max-h-72 w-full object-contain"
                />
              </div>

              {/* MODAL INFORMATION */}
              <div className="p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[3px] text-blue-600">
                  {selectedTablet.brand}
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#102a5e] sm:text-3xl">
                  {selectedTablet.name}
                </h2>

                <p className="mt-3 text-2xl font-black text-blue-600">
                  {formatPrice(selectedTablet.price)}
                </p>

                <div className="my-6 h-px bg-blue-100" />

                <h3 className="mb-4 font-black text-[#102a5e]">
                  Specifications
                </h3>

                <div className="space-y-4 text-sm">

                  <div className="flex items-center gap-3">
                    <Cpu className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Processor</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedTablet.processor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Monitor className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Display</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedTablet.display}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MemoryStick className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">RAM</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedTablet.ram}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <HardDrive className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Storage</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedTablet.storage}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Battery className="text-blue-600" size={20} />
                    <div>
                      <p className="text-slate-500">Battery</p>
                      <p className="font-bold text-[#102a5e]">
                        {selectedTablet.battery}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTablet(null)}
                  className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Close Details
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
