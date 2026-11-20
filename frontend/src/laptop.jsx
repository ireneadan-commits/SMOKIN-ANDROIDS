
import { useMemo, useState } from "react";
import {
  Search,
  Menu,
  Laptop as LaptopIcon,
  ArrowLeft,
  Star,
  LogOut,
  X,
  Cpu,
  Monitor,
  HardDrive,
  ChevronRight,
  MemoryStick,
} from "lucide-react";

// ==========================================
// LAPTOP DATA - 95 CATALOG ENTRIES
// Original 37 + 58 listed 2026 entries
// ==========================================

const laptopData = [
  // ==========================================
  // APPLE (1-12)
  // ==========================================

  {
    id: 1,
    name: "MacBook Pro 16-inch M4 Max",
    brand: "Apple",
    price: 189990,
    image: "/image/macbook-pro-m4-max.jpg",
    processor: "Apple M4 Max",
    display: "16.2-inch Liquid Retina XDR",
    ram: "36GB",
    storage: "1TB SSD",
  },
  {
    id: 2,
    name: "MacBook Pro 16-inch M4 Pro",
    brand: "Apple",
    price: 169990,
    image: "/image/macbook-pro-16-m4-pro.jpg",
    processor: "Apple M4 Pro",
    display: "16.2-inch Liquid Retina XDR",
    ram: "24GB",
    storage: "512GB SSD",
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch M4 Pro",
    brand: "Apple",
    price: 129990,
    image: "/image/macbook-pro-m4-pro.jpg",
    processor: "Apple M4 Pro",
    display: "14.2-inch Liquid Retina XDR",
    ram: "24GB",
    storage: "512GB SSD",
  },
  {
    id: 4,
    name: "MacBook Pro 14-inch M4",
    brand: "Apple",
    price: 99990,
    image: "/image/macbook-pro-14-m4.jpg",
    processor: "Apple M4",
    display: "14.2-inch Liquid Retina XDR",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 5,
    name: "MacBook Air 15-inch M4",
    brand: "Apple",
    price: 89990,
    image: "/image/macbook-air-15-m4.jpg",
    processor: "Apple M4",
    display: "15.3-inch Liquid Retina",
    ram: "16GB",
    storage: "256GB SSD",
  },
  {
    id: 6,
    name: "MacBook Air 13-inch M4",
    brand: "Apple",
    price: 69990,
    image: "/image/macbook-air-13-m4.jpg",
    processor: "Apple M4",
    display: "13.6-inch Liquid Retina",
    ram: "16GB",
    storage: "256GB SSD",
  },
  {
    id: 7,
    name: "MacBook Air 15-inch M3",
    brand: "Apple",
    price: 79990,
    image: "/image/macbook-air-15-m3.jpg",
    processor: "Apple M3",
    display: "15.3-inch Liquid Retina",
    ram: "8GB",
    storage: "256GB SSD",
  },
  {
    id: 8,
    name: "MacBook Air 13-inch M3",
    brand: "Apple",
    price: 59990,
    image: "/image/macbook-air-13-m3.jpg",
    processor: "Apple M3",
    display: "13.6-inch Liquid Retina",
    ram: "8GB",
    storage: "256GB SSD",
  },
  {
    id: 9,
    name: "MacBook Pro 16-inch M3 Max",
    brand: "Apple",
    price: 179990,
    image: "/image/macbook-pro-16-m3-max.jpg",
    processor: "Apple M3 Max",
    display: "16.2-inch Liquid Retina XDR",
    ram: "36GB",
    storage: "1TB SSD",
  },
  {
    id: 10,
    name: "MacBook Pro 14-inch M3 Pro",
    brand: "Apple",
    price: 119990,
    image: "/image/macbook-pro-14-m3-pro.jpg",
    processor: "Apple M3 Pro",
    display: "14.2-inch Liquid Retina XDR",
    ram: "18GB",
    storage: "512GB SSD",
  },
  {
    id: 11,
    name: "MacBook Air 13-inch M2",
    brand: "Apple",
    price: 49990,
    image: "/image/macbook-air-13-m2.jpg",
    processor: "Apple M2",
    display: "13.6-inch Liquid Retina",
    ram: "8GB",
    storage: "256GB SSD",
  },
  {
    id: 12,
    name: "MacBook Air 13-inch M1",
    brand: "Apple",
    price: 39990,
    image: "/image/macbook-air-13-m1.jpg",
    processor: "Apple M1",
    display: "13.3-inch Retina",
    ram: "8GB",
    storage: "256GB SSD",
  },

  // ==========================================
  // ASUS ORIGINAL MODELS (13-17)
  // ==========================================

  {
    id: 13,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    price: 129990,
    image: "/image/asus-rog-zephyrus-g16.jpg",
    processor: "Intel Core Ultra 9",
    display: "16-inch OLED",
    ram: "32GB",
    storage: "1TB SSD",
  },
  {
    id: 14,
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    price: 99990,
    image: "/image/asus-rog-strix-g16.jpg",
    processor: "Intel Core i9",
    display: "16-inch FHD+",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 15,
    name: "ASUS TUF Gaming A15",
    brand: "ASUS",
    price: 59990,
    image: "/image/asus-tuf-a15.jpg",
    processor: "AMD Ryzen 7",
    display: "15.6-inch FHD",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 16,
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    price: 69990,
    image: "/image/asus-zenbook-14.jpg",
    processor: "Intel Core Ultra 7",
    display: "14-inch OLED",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 17,
    name: "ASUS Vivobook 16",
    brand: "ASUS",
    price: 42990,
    image: "/image/asus-vivobook-16.jpg",
    processor: "Intel Core i5",
    display: "16-inch WUXGA",
    ram: "8GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // ACER ORIGINAL MODELS (18-21)
  // ==========================================

  {
    id: 18,
    name: "Acer Predator Helios Neo 16",
    brand: "Acer",
    price: 89990,
    image: "/image/acer-predator-helios-neo-16.jpg",
    processor: "Intel Core i7",
    display: "16-inch WQXGA",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 19,
    name: "Acer Nitro V 15",
    brand: "Acer",
    price: 49990,
    image: "/image/acer-nitro-v15.jpg",
    processor: "Intel Core i5",
    display: "15.6-inch FHD",
    ram: "8GB",
    storage: "512GB SSD",
  },
  {
    id: 20,
    name: "Acer Swift Go 14",
    brand: "Acer",
    price: 54990,
    image: "/image/acer-swift-go-14.jpg",
    processor: "Intel Core Ultra 5",
    display: "14-inch OLED",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 21,
    name: "Acer Aspire 5",
    brand: "Acer",
    price: 36990,
    image: "/image/acer-aspire-5.jpg",
    processor: "Intel Core i5",
    display: "15.6-inch FHD",
    ram: "8GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // LENOVO ORIGINAL MODELS (22-25)
  // ==========================================

  {
    id: 22,
    name: "Lenovo Legion Pro 7i",
    brand: "Lenovo",
    price: 149990,
    image: "/image/lenovo-legion-pro-7i.jpg",
    processor: "Intel Core i9",
    display: "16-inch OLED",
    ram: "32GB",
    storage: "1TB SSD",
  },
  {
    id: 23,
    name: "Lenovo LOQ 15",
    brand: "Lenovo",
    price: 54990,
    image: "/image/lenovo-loq-15.jpg",
    processor: "Intel Core i5",
    display: "15.6-inch FHD",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 24,
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    price: 119990,
    image: "/image/lenovo-thinkpad-x1-carbon.jpg",
    processor: "Intel Core Ultra 7",
    display: "14-inch WUXGA",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 25,
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    price: 44990,
    image: "/image/lenovo-ideapad-slim-5.jpg",
    processor: "AMD Ryzen 5",
    display: "14-inch WUXGA",
    ram: "16GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // HP ORIGINAL MODELS (26-29)
  // ==========================================

  {
    id: 26,
    name: "HP OMEN 16",
    brand: "HP",
    price: 99990,
    image: "/image/hp-omen-16.jpg",
    processor: "Intel Core i7",
    display: "16.1-inch FHD",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 27,
    name: "HP Victus 15",
    brand: "HP",
    price: 52990,
    image: "/image/hp-victus-15.jpg",
    processor: "AMD Ryzen 5",
    display: "15.6-inch FHD",
    ram: "8GB",
    storage: "512GB SSD",
  },
  {
    id: 28,
    name: "HP Pavilion Plus 14",
    brand: "HP",
    price: 64990,
    image: "/image/hp-pavilion-plus-14.jpg",
    processor: "Intel Core Ultra 5",
    display: "14-inch OLED",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 29,
    name: "HP Envy x360 14",
    brand: "HP",
    price: 74990,
    image: "/image/hp-envy-x360-14.jpg",
    processor: "Intel Core Ultra 7",
    display: "14-inch Touchscreen",
    ram: "16GB",
    storage: "1TB SSD",
  },

  // ==========================================
  // DELL ORIGINAL MODELS (30-32)
  // ==========================================

  {
    id: 30,
    name: "Dell XPS 16",
    brand: "Dell",
    price: 159990,
    image: "/image/dell-xps-16.jpg",
    processor: "Intel Core Ultra 9",
    display: "16.3-inch OLED",
    ram: "32GB",
    storage: "1TB SSD",
  },
  {
    id: 31,
    name: "Dell Inspiron 15",
    brand: "Dell",
    price: 42990,
    image: "/image/dell-inspiron-15.jpg",
    processor: "Intel Core i5",
    display: "15.6-inch FHD",
    ram: "8GB",
    storage: "512GB SSD",
  },
  {
    id: 32,
    name: "Dell G15 Gaming",
    brand: "Dell",
    price: 69990,
    image: "/image/dell-g15.jpg",
    processor: "Intel Core i7",
    display: "15.6-inch FHD",
    ram: "16GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // MSI ORIGINAL MODELS (33-35)
  // ==========================================

  {
    id: 33,
    name: "MSI Raider GE78 HX",
    brand: "MSI",
    price: 169990,
    image: "/image/msi-raider-ge78.jpg",
    processor: "Intel Core i9",
    display: "17-inch QHD+",
    ram: "32GB",
    storage: "2TB SSD",
  },
  {
    id: 34,
    name: "MSI Katana 15",
    brand: "MSI",
    price: 59990,
    image: "/image/msi-katana-15.jpg",
    processor: "Intel Core i7",
    display: "15.6-inch FHD",
    ram: "16GB",
    storage: "512GB SSD",
  },
  {
    id: 35,
    name: "MSI Thin 15",
    brand: "MSI",
    price: 44990,
    image: "/image/msi-thin-15.jpg",
    processor: "Intel Core i5",
    display: "15.6-inch FHD",
    ram: "8GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // HUAWEI ORIGINAL MODELS (36-37)
  // ==========================================

  {
    id: 36,
    name: "Huawei MateBook X Pro",
    brand: "Huawei",
    price: 99990,
    image: "/image/huawei-matebook-x-pro.jpg",
    processor: "Intel Core Ultra 9",
    display: "14.2-inch OLED",
    ram: "16GB",
    storage: "1TB SSD",
  },
  {
    id: 37,
    name: "Huawei MateBook D 16",
    brand: "Huawei",
    price: 49990,
    image: "/image/huawei-matebook-d16.jpg",
    processor: "Intel Core i5",
    display: "16-inch FHD+",
    ram: "16GB",
    storage: "512GB SSD",
  },

  // ==========================================
  // ASUS - 2026 CATALOG (38-44)
  // ==========================================

  {
    id: 38,
    name: "ASUS ExpertBook Ultra",
    brand: "ASUS",
    price: null,
    image: "/image/asus-expertbook-ultra.jpg",
    processor: "Intel Core Ultra Series 3",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 39,
    name: "ASUS Expert P Series",
    brand: "ASUS",
    price: null,
    image: "/image/asus-expert-p-series.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 40,
    name: "ASUS Expert B Series",
    brand: "ASUS",
    price: null,
    image: "/image/asus-expert-b-series.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 41,
    name: "ASUS Zenbook 14 (2026 refresh)",
    brand: "ASUS",
    price: null,
    image: "/image/asus-zenbook-14-2026.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 42,
    name: "ASUS Vivobook S Series (2026 refresh)",
    brand: "ASUS",
    price: null,
    image: "/image/asus-vivobook-s-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 43,
    name: "ASUS ProArt P16 RTX Spark",
    brand: "ASUS",
    price: null,
    image: "/image/asus-proart-p16-2026.jpg",
    processor: "NVIDIA RTX Spark platform",
    display: "16-inch 4K OLED 120Hz",
    ram: "Up to 128GB LPDDR5X",
    storage: "Up to 2TB SSD",
  },
  {
    id: 44,
    name: "ASUS ProArt P14 RTX Spark",
    brand: "ASUS",
    price: null,
    image: "/image/asus-proart-p14-2026.jpg",
    processor: "NVIDIA RTX Spark platform",
    display: "14-inch 3K OLED 120Hz",
    ram: "Up to 128GB LPDDR5X",
    storage: "Up to 1TB SSD",
  },

  // ==========================================
  // ACER - 2026 CATALOG (45-56)
  // ==========================================

  {
    id: 45,
    name: "Acer Swift 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-swift-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 46,
    name: "Acer Swift Edge 14 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-swift-edge-14-ai.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 47,
    name: "Acer Swift Edge 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-swift-edge-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 48,
    name: "Acer Swift Go 14 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-swift-go-14-ai.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 49,
    name: "Acer Swift Go 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-swift-go-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 50,
    name: "Acer Predator Helios Neo 16S AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-predator-helios-neo-16s-ai.jpg",
    processor: "Intel Core Ultra Series 3",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 51,
    name: "Acer Nitro V 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-nitro-v-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 52,
    name: "Acer Nitro V 16S AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-nitro-v-16s-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 53,
    name: "Acer Aspire 14 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-aspire-14-ai.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 54,
    name: "Acer Aspire 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-aspire-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 55,
    name: "Acer Aspire X 16 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-aspire-x-16-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 56,
    name: "Acer Aspire 18 AI",
    brand: "Acer",
    price: null,
    image: "/image/acer-aspire-18-ai.jpg",
    processor: "TBA",
    display: "18-inch",
    ram: "TBA",
    storage: "TBA",
  },

  // ==========================================
  // LENOVO - 2026 CATALOG (57-63)
  // ==========================================

  {
    id: 57,
    name: "Lenovo Yoga 9i 2-in-1 Aura Edition",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-yoga-9i-aura-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 58,
    name: "Lenovo Yoga Pro 7a",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-yoga-pro-7a-2026.jpg",
    processor: "AMD Ryzen AI Max+",
    display: "OLED 2.5K",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 59,
    name: "Lenovo IdeaPad Slim 5i Ultra",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-ideapad-slim-5i-ultra.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 60,
    name: "Lenovo Legion 7a",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-legion-7a-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 61,
    name: "Lenovo ThinkPad X1 Carbon Gen 14 Aura Edition",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-thinkpad-x1-carbon-gen14.jpg",
    processor: "Intel Core Ultra 7 365",
    display: "TBA",
    ram: "32GB LPDDR5X",
    storage: "512GB SSD",
  },
  {
    id: 62,
    name: "Lenovo Legion Pro 7i Gen 10 (2026)",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-legion-pro-7i-gen10.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 63,
    name: "Lenovo IdeaPad 5a 2-in-1 (2026)",
    brand: "Lenovo",
    price: null,
    image: "/image/lenovo-ideapad-5a-2in1.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },

  // ==========================================
  // HP - 2026 CATALOG (64-71)
  // ==========================================

  {
    id: 64,
    name: "HP OmniBook Ultra 16",
    brand: "HP",
    price: null,
    image: "/image/hp-omnibook-ultra-16.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 65,
    name: "HP OmniBook X 14",
    brand: "HP",
    price: null,
    image: "/image/hp-omnibook-x-14.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 66,
    name: "HP OmniBook 5 (2026)",
    brand: "HP",
    price: null,
    image: "/image/hp-omnibook-5-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 67,
    name: "HP OmniBook 3 (2026)",
    brand: "HP",
    price: null,
    image: "/image/hp-omnibook-3-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 68,
    name: "HP EliteBook 6 G2i",
    brand: "HP",
    price: null,
    image: "/image/hp-elitebook-6-g2i.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 69,
    name: "HP EliteBook 8 Series",
    brand: "HP",
    price: null,
    image: "/image/hp-elitebook-8-series.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 70,
    name: "HP ZBook Fury G1i",
    brand: "HP",
    price: null,
    image: "/image/hp-zbook-fury-g1i.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 71,
    name: "HP HyperX OMEN 16 (2026)",
    brand: "HP",
    price: null,
    image: "/image/hp-hyperx-omen-16-2026.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },

  // ==========================================
  // DELL - 2026 CATALOG (72-78)
  // ==========================================

  {
    id: 72,
    name: "Dell XPS 14 (2026)",
    brand: "Dell",
    price: null,
    image: "/image/dell-xps-14-2026.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 73,
    name: "Dell XPS 16 (2026)",
    brand: "Dell",
    price: null,
    image: "/image/dell-xps-16-2026.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 74,
    name: "Dell XPS 13 (2026)",
    brand: "Dell",
    price: null,
    image: "/image/dell-xps-13-2026.jpg",
    processor: "TBA",
    display: "13-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 75,
    name: "Dell XPS 16 Creator Edition",
    brand: "Dell",
    price: null,
    image: "/image/dell-xps-16-creator.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 76,
    name: "Dell Alienware 2026 Gaming Laptop",
    brand: "Dell",
    price: null,
    image: "/image/dell-alienware-2026.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 77,
    name: "Dell 14S",
    brand: "Dell",
    price: null,
    image: "/image/dell-14s-2026.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 78,
    name: "Dell XPS Googlebook",
    brand: "Dell",
    price: null,
    image: "/image/dell-xps-googlebook.jpg",
    processor: "TBA",
    display: "TBA",
    ram: "TBA",
    storage: "TBA",
  },

  // ==========================================
  // MSI - 2026 CATALOG (79-92)
  // ==========================================

  {
    id: 79,
    name: "MSI Prestige 14 (2026)",
    brand: "MSI",
    price: null,
    image: "/image/msi-prestige-14-2026.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 80,
    name: "MSI Prestige 16 (2026)",
    brand: "MSI",
    price: null,
    image: "/image/msi-prestige-16-2026.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 81,
    name: "MSI Prestige 14 Flip AI+",
    brand: "MSI",
    price: null,
    image: "/image/msi-prestige-14-flip-ai.jpg",
    processor: "Intel Core Ultra X9 388H",
    display: "14-inch FHD+ OLED Touchscreen",
    ram: "Up to 64GB LPDDR5X",
    storage: "TBA",
  },
  {
    id: 82,
    name: "MSI Prestige 16 Flip AI+",
    brand: "MSI",
    price: null,
    image: "/image/msi-prestige-16-flip-ai.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 83,
    name: "MSI Stealth 16 AI+",
    brand: "MSI",
    price: null,
    image: "/image/msi-stealth-16-ai-plus.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 84,
    name: "MSI Raider 16 Max HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-raider-16-max-hx.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 85,
    name: "MSI Raider 16 HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-raider-16-hx.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 86,
    name: "MSI Crosshair 16 Max HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-crosshair-16-max-hx.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 87,
    name: "MSI Crosshair 16 HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-crosshair-16-hx.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 88,
    name: "MSI Titan 18 HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-titan-18-hx-2026.jpg",
    processor: "TBA",
    display: "18-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 89,
    name: "MSI Raider 18 Max",
    brand: "MSI",
    price: null,
    image: "/image/msi-raider-18-max.jpg",
    processor: "TBA",
    display: "18-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 90,
    name: "MSI Stealth 18",
    brand: "MSI",
    price: null,
    image: "/image/msi-stealth-18.jpg",
    processor: "TBA",
    display: "18-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 91,
    name: "MSI Cyborg 15 Max",
    brand: "MSI",
    price: null,
    image: "/image/msi-cyborg-15-max.jpg",
    processor: "TBA",
    display: "15.6-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 92,
    name: "MSI Katana 15 HX",
    brand: "MSI",
    price: null,
    image: "/image/msi-katana-15-hx.jpg",
    processor: "TBA",
    display: "15.6-inch",
    ram: "TBA",
    storage: "TBA",
  },

  // ==========================================
  // HUAWEI - 2026 CATALOG (93-95)
  // ==========================================

  {
    id: 93,
    name: "Huawei MateBook GT 14 (2026)",
    brand: "Huawei",
    price: null,
    image: "/image/huawei-matebook-gt-14-2026.jpg",
    processor: "Intel Core Ultra 5 125H / Ultra 7 155H",
    display: "14.2-inch OLED 2880 x 1920",
    ram: "16GB / 32GB",
    storage: "1TB NVMe SSD",
  },
  {
    id: 94,
    name: "Huawei MateBook 14 (2026)",
    brand: "Huawei",
    price: null,
    image: "/image/huawei-matebook-14-2026.jpg",
    processor: "TBA",
    display: "14-inch",
    ram: "TBA",
    storage: "TBA",
  },
  {
    id: 95,
    name: "Huawei MateBook D 16 (2026)",
    brand: "Huawei",
    price: null,
    image: "/image/huawei-matebook-d16-2026.jpg",
    processor: "TBA",
    display: "16-inch",
    ram: "TBA",
    storage: "TBA",
  },
];

// ==========================================
// BRAND FILTER
// ==========================================

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
// IMAGE COMPONENT WITH FALLBACK
// ==========================================

function LaptopImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-100 text-blue-500">
        <LaptopIcon size={70} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );
}

// ==========================================
// MAIN LAPTOP COMPONENT
// ==========================================

export default function Laptop({ onBack, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortOption, setSortOption] = useState("default");
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  // FILTER AND SORT
  const filteredLaptops = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    let result = laptopData.filter((laptop) => {
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
      result = [...result].sort((a, b) => {
        if (a.price == null) return 1;
        if (b.price == null) return -1;
        return a.price - b.price;
      });
    } else if (sortOption === "price-high") {
      result = [...result].sort((a, b) => {
        if (a.price == null) return 1;
        if (b.price == null) return -1;
        return b.price - a.price;
      });
    } else if (sortOption === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [searchTerm, selectedBrand, sortOption]);

  // PRICE FORMAT
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="rounded-full p-2 transition hover:bg-blue-100"
              title="Back"
            >
              <ArrowLeft size={22} />
            </button>

            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <LaptopIcon size={24} />
              </div>

              <div>
                <h1 className="text-xl font-black tracking-wide text-blue-900">
                  SMOKIN ANDROIDS
                </h1>
                <p className="text-xs font-semibold tracking-widest text-blue-500">
                  LAPTOP COLLECTION
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden flex-1 items-center justify-center px-8 md:flex">
            <div className="relative w-full max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search laptops..."
                className="w-full rounded-full border border-blue-100 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* DESKTOP LOGOUT */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-semibold text-red-500 transition hover:bg-red-100"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-lg p-2 hover:bg-blue-50 md:hidden"
            aria-label="Toggle menu"
          >
            {showMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {showMenu && (
          <div className="border-t border-blue-100 bg-white p-4 md:hidden">
            <div className="relative mb-3">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search laptops..."
                className="w-full rounded-xl border border-blue-100 bg-slate-50 py-3 pl-10 pr-3 outline-none focus:border-blue-400"
              />
            </div>

            <button
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-semibold text-red-500"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 p-8 text-white shadow-xl md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
            Premium Laptop Collection
          </p>

          <h2 className="mb-4 text-3xl font-black md:text-5xl">
            Find Your Perfect Laptop
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-blue-50 md:text-base">
            Explore laptops from Apple, ASUS, Acer, Lenovo, HP, Dell, MSI,
            and Huawei. Find the right device for work, study, gaming, and
            everyday use.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
            <Star size={18} className="fill-current" />
            Quality • Performance • Innovation
          </div>
        </div>
      </section>

      {/* MOBILE SEARCH */}
      <section className="mx-auto max-w-7xl px-5 md:hidden">
        <div className="relative">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search laptops..."
            className="w-full rounded-full border border-blue-100 bg-white py-3 pl-11 pr-4 shadow-sm outline-none focus:border-blue-400"
          />
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-8">

        {/* TITLE AND SORT */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-black text-blue-950 md:text-3xl">
              Laptop Collection
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredLaptops.length} of {laptopData.length} laptops
            </p>
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-blue-400"
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* BRAND FILTER */}
        <div className="mb-8 flex flex-wrap gap-2">
          {brands.map((brand) => {
            const count =
              brand === "All Brands"
                ? laptopData.length
                : laptopData.filter(
                    (laptop) => laptop.brand === brand
                  ).length;

            return (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  selectedBrand === brand
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "border border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {brand} ({count})
              </button>
            );
          })}
        </div>

        {/* LAPTOP GRID */}
        {filteredLaptops.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredLaptops.map((laptop) => (
              <div
                key={laptop.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-56 shrink-0 items-center justify-center overflow-hidden bg-slate-50 p-5">
                  <LaptopImage
                    src={laptop.image}
                    alt={laptop.name}
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    {laptop.brand}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                    {laptop.brand}
                  </p>

                  <h3 className="mb-3 min-h-12 text-lg font-extrabold text-slate-800">
                    {laptop.name}
                  </h3>

                  <p className="mb-4 text-xl font-black text-blue-700">
                    {formatPrice(laptop.price)}
                  </p>

                  <div className="mb-5 space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="shrink-0 text-blue-500" />
                      <span>{laptop.processor}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MemoryStick size={16} className="shrink-0 text-blue-500" />
                      <span>{laptop.ram} RAM</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <HardDrive size={16} className="shrink-0 text-blue-500" />
                      <span>{laptop.storage}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedLaptop(laptop)}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
                  >
                    View Details
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-white px-5 py-16 text-center">
            <LaptopIcon
              size={55}
              className="mx-auto mb-4 text-slate-300"
            />

            <h3 className="text-xl font-bold text-slate-700">
              No laptops found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try another search or select a different brand.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All Brands");
              }}
              className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* LAPTOP DETAILS MODAL */}
      {selectedLaptop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedLaptop(null)}
        >
          <div
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLaptop(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-600 shadow-md transition hover:bg-red-50 hover:text-red-500"
              aria-label="Close details"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="flex min-h-64 items-center justify-center bg-slate-50 p-8">
                <div className="h-64 w-full">
                  <LaptopImage
                    src={selectedLaptop.image}
                    alt={selectedLaptop.name}
                  />
                </div>
              </div>

              <div className="p-7 md:p-9">
                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  {selectedLaptop.brand}
                </span>

                <h2 className="mb-3 mt-4 text-2xl font-black text-slate-900">
                  {selectedLaptop.name}
                </h2>

                <p className="mb-7 text-2xl font-black text-blue-700">
                  {formatPrice(selectedLaptop.price)}
                </p>

                <h3 className="mb-4 font-bold text-slate-800">
                  Technical Specifications
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <Cpu className="text-blue-600" size={21} />
                    <div>
                      <p className="text-xs text-slate-400">Processor</p>
                      <p className="font-semibold text-slate-700">
                        {selectedLaptop.processor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <Monitor className="text-blue-600" size={21} />
                    <div>
                      <p className="text-xs text-slate-400">Display</p>
                      <p className="font-semibold text-slate-700">
                        {selectedLaptop.display}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <MemoryStick className="text-blue-600" size={21} />
                    <div>
                      <p className="text-xs text-slate-400">Memory</p>
                      <p className="font-semibold text-slate-700">
                        {selectedLaptop.ram} RAM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <HardDrive className="text-blue-600" size={21} />
                    <div>
                      <p className="text-xs text-slate-400">Storage</p>
                      <p className="font-semibold text-slate-700">
                        {selectedLaptop.storage}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLaptop(null)}
                  className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-blue-100 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-black tracking-wider text-blue-900">
              SMOKIN ANDROIDS
            </h3>
            <p className="text-xs text-slate-400">
              Premium Technology Collection
            </p>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SMOKIN ANDROIDS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
