
import { useMemo, useState } from "react";
import {
  Search,
  Menu,
  Smartphone,
  ArrowLeft,
  Star,
  LogOut,
  X,
  Cpu,
  Camera,
  Battery,
  HardDrive,
  ChevronRight,
} from "lucide-react";

// ==========================================
// CELLPHONE DATA
// ==========================================

const phoneData = [
  // APPLE
  { id: 1, name: "iPhone 17 Pro Max", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.xevXDJ4yPdFMTfjfLGKS8QHaHa?r=0&pid=Api&h=220&P=0", processor: "A19 Pro", camera: "48MP", battery: "Not specified", storage: "256GB" },
  { id: 2, name: "iPhone 17 Pro", brand: "Apple", price: 0, image: "https://d1erhn8sljv386.cloudfront.net/3exXp7izmtnoVvCtUIRwEbAwvoE=/fit-in/800x0/https://s3.amazonaws.com/lmbucket0/media/product/boost-iphone-17-pro-512-gb-all-image-link.6098fc07fd80.png", processor: "A19 Pro", camera: "48MP", battery: "Not specified", storage: "256GB" },
  { id: 3, name: "iPhone 17", brand: "Apple", price: 0, image: "https://applescoop.org/image/product/iphone-17-hero.jpg?v=toepdb", processor: "A19", camera: "48MP", battery: "Not specified", storage: "256GB" },
  { id: 4, name: "iPhone Air", brand: "Apple", price: 0, image: "https://applescoop.org/image/product/iphone-air-hero.jpg", processor: "A19 Pro", camera: "48MP", battery: "Not specified", storage: "256GB" },
  { id: 5, name: "iPhone 16 Pro Max", brand: "Apple", price: 0, image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large_2x.jpg", processor: "A18 Pro", camera: "48MP", battery: "Not specified", storage: "256GB" },
  { id: 6, name: "iPhone 16 Pro", brand: "Apple", price: 0, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/991db1cb-72ce-4bb8-99e5-9929b355cc07.jpg;maxHeight=1920;maxWidth=900?format=webp", processor: "A18 Pro", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 7, name: "iPhone 16 Plus", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.MnavCuSOKH0OYl2P9jRrBw?r=0&pid=Api&h=220&P=0", processor: "A18", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 8, name: "iPhone 16", brand: "Apple", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.Ri6TbkvjODZNtw9rlQ6Opg?r=0&pid=Api&h=220&P=0", processor: "A18", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 9, name: "iPhone 15 Pro Max", brand: "Apple", price: 84990, image: "https://tse4.mm.bing.net/th/id/OIP.MCgJTRE0KP290O0vaf_F9QHaJM?r=0&pid=Api&h=220&P=0", processor: "A17 Pro", camera: "48MP", battery: "4422 mAh", storage: "256GB" },
  { id: 10, name: "iPhone 15 Pro", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.uD%2fkCx2gynVvvme%2bp2wnFg&r=0&pid=Api&h=220&P=0", processor: "A17 Pro", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 11, name: "iPhone 15 Plus", brand: "Apple", price: 0, image: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large_2x.jpg", processor: "A16 Bionic", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 12, name: "iPhone 15", brand: "Apple", price: 0, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525421_sd.jpg", processor: "A16 Bionic", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 13, name: "iPhone 14 Pro Max", brand: "Apple", price: 69990, image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg.large_2x.jpg", processor: "A16 Bionic", camera: "48MP", battery: "4323 mAh", storage: "128GB" },
  { id: 14, name: "iPhone 14 Pro", brand: "Apple", price: 0, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487403_sd.jpg", processor: "A16 Bionic", camera: "48MP", battery: "Not specified", storage: "128GB" },
  { id: 15, name: "iPhone 14 Plus", brand: "Apple", price: 0, image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907-geo_inline.jpg.large_2x.jpg", processor: "A15 Bionic", camera: "12MP Dual", battery: "Not specified", storage: "128GB" },
  { id: 16, name: "iPhone 14", brand: "Apple", price: 45990, image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg", processor: "A15 Bionic", camera: "12MP Dual", battery: "3279 mAh", storage: "128GB" },
  { id: 17, name: "iPhone 13 Pro Max", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.PVxbux3dvpvmdwsyGG9wXAHaOf?r=0&pid=Api&h=220&P=0", processor: "A15 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "128GB" },
  { id: 18, name: "iPhone 13 Pro", brand: "Apple", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.Nn11JQqBQ3A9o24ybh4AiAHaJc?r=0&pid=Api&h=220&P=0", processor: "A15 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "128GB" },
  { id: 19, name: "iPhone 13 mini", brand: "Apple", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.QTGXp862yEyyWCAwSD-Y_AHaOd?r=0&pid=Api&h=220&P=0", processor: "A15 Bionic", camera: "12MP Dual", battery: "Not specified", storage: "128GB" },
  { id: 20, name: "iPhone 13", brand: "Apple", price: 35990, image: "https://cellucity.co.za/wp-content/uploads/2024/11/iPhone_13_Midnight.jpg", processor: "A15 Bionic", camera: "12MP Dual", battery: "3240 mAh", storage: "128GB" },
  { id: 21, name: "iPhone 12 Pro Max", brand: "Apple", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.NfgPsu0DDW6i4ShcDLTR4gHaHa?r=0&pid=Api&h=220&P=0", processor: "A14 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "128GB" },
  { id: 22, name: "iPhone 12 Pro", brand: "Apple", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.E_stXDsy-nMkSADx9wpeLAHaHa?r=0&pid=Api&h=220&P=0", processor: "A14 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "128GB" },
  { id: 23, name: "iPhone 12 mini", brand: "Apple", price: 0, image: "https://d1eh9yux7w8iql.cloudfront.net/product_images/412291_4ddc3c20-8800-4bb5-8765-84d60b0aa3d1.jpg", processor: "A14 Bionic", camera: "12MP Dual", battery: "Not specified", storage: "64GB" },
  { id: 24, name: "iPhone 12", brand: "Apple", price: 25990, image: "https://tse1.mm.bing.net/th/id/OIP._iH83Gs5DQJCCfRrpRMyXQHaHa?r=0&pid=Api&h=220&P=0", processor: "A14 Bionic", camera: "12MP Dual", battery: "2815 mAh", storage: "64GB" },
  { id: 25, name: "iPhone 11 Pro Max", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.joKG0_VeKo73ttaYPBgVjwHaHa?r=0&pid=Api&h=220&P=0", processor: "A13 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "64GB" },
  { id: 26, name: "iPhone 11 Pro", brand: "Apple", price: 0, image: "https://www.mobiledokan.com/media/1710758871SA7nS.webp", processor: "A13 Bionic", camera: "12MP Triple", battery: "Not specified", storage: "64GB" },
  { id: 27, name: "iPhone 11", brand: "Apple", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.rdcYuV1EKBG6BASF6_s4TAHaIw?r=0&pid=Api&h=220&P=0", processor: "A13 Bionic", camera: "12MP Dual", battery: "Not specified", storage: "64GB" },
  { id: 28, name: "iPhone SE (3rd Gen)", brand: "Apple", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.fIpndgopoQTYWaeYwosqWgAAAA?r=0&pid=Api&h=220&P=0", processor: "A15 Bionic", camera: "12MP", battery: "Not specified", storage: "64GB" },

  // SAMSUNG GALAXY S SERIES
  { id: 29, name: "Samsung Galaxy S25 Ultra", brand: "Samsung", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.8sFaYbZHFM6Wqlyj_GuvtQHaHf?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Elite", camera: "200MP", battery: "5000 mAh", storage: "256GB" },
  { id: 30, name: "Samsung Galaxy S25+", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.Z7N7VDtIHMSSh8409yY70gHaI8?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Elite", camera: "50MP", battery: "4900 mAh", storage: "256GB" },
  { id: 31, name: "Samsung Galaxy S25", brand: "Samsung", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.Z4ODohEVkTQfXfhqPdFnuQHaHa?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Elite", camera: "50MP", battery: "4000 mAh", storage: "256GB" },
  { id: 32, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.AkTRY4hO2linlklCk1K20A?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 3", camera: "200MP", battery: "5000 mAh", storage: "256GB" },
  { id: 33, name: "Samsung Galaxy S24+", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th?id=OIF.Vyj%2fDd%2b0GOCP6Zr9nIo6Wg&r=0&pid=Api&h=220&P=0", processor: "Exynos 2400", camera: "50MP", battery: "4900 mAh", storage: "256GB" },
  { id: 34, name: "Samsung Galaxy S24", brand: "Samsung", price: 0, image: "https://www.mobileflow.shop/cdn/shop/files/samsung_galaxy_s24_onyx_black.jpg?v=1776333182&width=832", processor: "Exynos 2400", camera: "50MP", battery: "4000 mAh", storage: "128GB" },
  { id: 35, name: "Samsung Galaxy S23 Ultra", brand: "Samsung", price: 69990, image: "https://tse4.mm.bing.net/th/id/OIP.k-pTmRfwqxDi1uQgoSGypwHaHk?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 2", camera: "200MP", battery: "5000 mAh", storage: "256GB" },
  { id: 36, name: "Samsung Galaxy S23+", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.1MisM2GXKyqEL9bGMF32XwHaI8?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 2", camera: "50MP", battery: "4700 mAh", storage: "256GB" },
  { id: 37, name: "Samsung Galaxy S23", brand: "Samsung", price: 45990, image: "https://tse4.mm.bing.net/th/id/OIP.k-pTmRfwqxDi1uQgoSGypwHaHk?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 2", camera: "50MP", battery: "3900 mAh", storage: "128GB" },
  { id: 38, name: "Samsung Galaxy S22 Ultra", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.wieoKJXvZ5BhrvGSahQ8jAHaHa?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 1", camera: "108MP", battery: "5000 mAh", storage: "128GB" },
  { id: 39, name: "Samsung Galaxy S22+", brand: "Samsung", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.DkzO7rQpQ_alCUwm5gL3tgHaI5?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 1", camera: "50MP", battery: "4500 mAh", storage: "128GB" },
  { id: 40, name: "Samsung Galaxy S22", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.Ke3x5W05IsO5vGB0mmhuSQHaHa?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 1", camera: "50MP", battery: "3700 mAh", storage: "128GB" },

  // SAMSUNG Z SERIES
  { id: 41, name: "Samsung Galaxy Z Fold7", brand: "Samsung", price: 0, image: "https://images.hotukdeals.com/threads/raw/k8ic3/5030437_1/re/1024x1024/qt/60/5030437_1.jpg", processor: "Snapdragon 8 Elite", camera: "200MP", battery: "4400 mAh", storage: "256GB" },
  { id: 42, name: "Samsung Galaxy Z Flip7", brand: "Samsung", price: 0, image: "https://cdn.media.amplience.net/i/xcite/554260-01", processor: "Exynos 2500", camera: "50MP", battery: "4300 mAh", storage: "256GB" },
  { id: 43, name: "Samsung Galaxy Z Fold6", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.AghFmWSUGOGHC23xp%2fyc6Q&r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 3", camera: "50MP", battery: "4400 mAh", storage: "256GB" },
  { id: 44, name: "Samsung Galaxy Z Flip6", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.b3-p5ehCmOnamDPU21naaQHaHa?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 3", camera: "50MP", battery: "4000 mAh", storage: "256GB" },
  { id: 45, name: "Samsung Galaxy Z Fold5", brand: "Samsung", price: 0, image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/07/galaxy-z-fold-5-icy-blue-render-square.jpg", processor: "Snapdragon 8 Gen 2", camera: "50MP", battery: "4400 mAh", storage: "256GB" },
  { id: 46, name: "Samsung Galaxy Z Flip5", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.6XHYpPcY-3sA5BIsLinBOAHaIi?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 8 Gen 2", camera: "12MP", battery: "3700 mAh", storage: "256GB" },
  { id: 47, name: "Samsung Galaxy Z Fold4", brand: "Samsung", price: 89990, image: "https://m.media-amazon.com/images/I/81rCIc3xUhL.jpg", processor: "Snapdragon 8+ Gen 1", camera: "50MP", battery: "4400 mAh", storage: "256GB" },
  { id: 48, name: "Samsung Galaxy Z Flip4", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.2qH2WugNo1O58q-yJcvw5QHaHa?r=0&pid=Api&h=220&P=0  ", processor: "Snapdragon 8+ Gen 1", camera: "12MP", battery: "3700 mAh", storage: "128GB" },

  // SAMSUNG A SERIES
  { id: 49, name: "Samsung Galaxy A56 5G", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.-JpE8zVN8XA2a3DKZGgYcgHaHa?r=0&pid=Api&h=220&P=0", processor: "Exynos 1580", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 50, name: "Samsung Galaxy A55 5G", brand: "Samsung", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.dwkNNrJS6dr7AqaCDKZMgA?r=0&pid=Api&h=220&P=0", processor: "Exynos 1480", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 51, name: "Samsung Galaxy A36 5G", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.ekKdbFibx49NOCQ7FYidOw?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 6 Gen 3", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 52, name: "Samsung Galaxy A35 5G", brand: "Samsung", price: 0, image: "https://m.media-amazon.com/images/I/71MBDTglV4L.jpg", processor: "Exynos 1380", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 53, name: "Samsung Galaxy A26 5G", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.u5VOjCKm5NOgEIpBCvdd_wHaHa?r=0&pid=Api&h=220&P=0", processor: "Exynos 1380", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 54, name: "Samsung Galaxy A25 5G", brand: "Samsung", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.G7IACw8oYySBi0WOm8mHXwHaHa?r=0&pid=Api&h=220&P=0", processor: "Exynos 1280", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 55, name: "Samsung Galaxy A16 5G", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.UvdqATJTnQP_65KSc3ZUEAHaFA?r=0&pid=Api&h=220&P=0", processor: "Exynos 1330", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 56, name: "Samsung Galaxy A15 5G", brand: "Samsung", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.MHWfbmvReKJIZE%2bNSOMY6A&r=0&pid=Api&h=220&P=0", processor: "Dimensity 6100+", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 57, name: "Samsung Galaxy A06", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th?id=OIF.uobCkZO9d4GVhR%2b0j0%2fceg&r=0&pid=Api&h=220&P=0", processor: "Helio G85", camera: "50MP", battery: "5000 mAh", storage: "64GB" },
  { id: 58, name: "Samsung Galaxy A05s", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th?id=OIF.I5xPlSYzyJ%2fKNzK6CBjq4w&r=0&pid=Api&h=220&P=0", processor: "Snapdragon 680", camera: "50MP", battery: "5000 mAh", storage: "128GB" },

  // SAMSUNG M SERIES
  { id: 59, name: "Samsung Galaxy M56 5G", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.juVhoR8RBaT_Z9WdoPTd4wHaJC?r=0&pid=Api&h=220&P=0", processor: "Exynos 1480", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 60, name: "Samsung Galaxy M55 5G", brand: "Samsung", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.GTY329jWyLyhcXB6WN3WmQHaF6?r=0&pid=Api&h=220&P=0", processor: "Snapdragon 7 Gen 1", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 61, name: "Samsung Galaxy M35 5G", brand: "Samsung", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.wL_Xjn9nMvtPvPXboqA50gHaJ3?r=0&pid=Api&h=220&P=0", processor: "Exynos 1380", camera: "50MP", battery: "6000 mAh", storage: "128GB" },
  { id: 62, name: "Samsung Galaxy M15 5G", brand: "Samsung", price: 0, image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m156bdbgins/gallery/in-galaxy-m-sm-m156bdbgins-front-dark-blue-541582144?$650_519_PNG$", processor: "Dimensity 6100+", camera: "50MP", battery: "6000 mAh", storage: "128GB" },

  // INFINIX NOTE SERIES
  { id: 67, name: "Infinix NOTE 50 Pro+", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.aPyXjjbVU0kingpQoU06gwAAAA?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8350 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 68, name: "Infinix NOTE 50 Pro", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.6brEaXBx9gInhTWxaNF_8AHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G100 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 69, name: "Infinix NOTE 50", brand: "Infinix", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.UfXpAIFSAi153IRWHOVxww?r=0&pid=Api&h=220&P=0", processor: "Helio G100 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 70, name: "Infinix NOTE 40 Pro+", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.HXQ_oGl9w-VLJ5lyHAXcRwHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 7020", camera: "108MP", battery: "4600 mAh", storage: "256GB" },
  { id: 71, name: "Infinix NOTE 40 Pro", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.z3hMVHGgVN78tA6XamtknQHaIW?r=0&pid=Api&h=220&P=0", processor: "Helio G99 Ultimate", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 72, name: "Infinix NOTE 40", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th/id/OIF.QnO3e0NRF6m2LunHPVmAQw?r=0&pid=Api&h=220&P=0", processor: "Helio G99 Ultimate", camera: "108MP", battery: "5000 mAh", storage: "256GB" },

  // INFINIX ZERO SERIES
  { id: 73, name: "Infinix ZERO 40 5G", brand: "Infinix", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.2qEYnRxfs3GVIjFFwngLVg?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8200 Ultimate", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 74, name: "Infinix ZERO 40", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.68OgAdZeLQSZRKPdQ0KNWwHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G100", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 75, name: "Infinix ZERO 30 5G", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.egprCKpjSRiCBtdO5a0woQHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8020", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 76, name: "Infinix ZERO 30", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.44SflIB1RdZkqbu99ZLtSwHaI0?r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 77, name: "Infinix ZERO 20", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.l4ygRjodPrOcuCRFOo8jAQHaJ3?r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "108MP", battery: "4500 mAh", storage: "256GB" },

  // INFINIX HOT SERIES
  { id: 78, name: "Infinix HOT 50 Pro+", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.0cj8SIXsYefDfXQQMcg8Sg?r=0&pid=Api&h=220&P=0", processor: "Helio G100", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 79, name: "Infinix HOT 50 Pro", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.PihI4aCby44Ra2E9rwRv7g?r=0&pid=Api&h=220&P=0", processor: "Helio G100", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 80, name: "Infinix HOT 50", brand: "Infinix", price: 0, image: "https://tse3.mm.bing.net/th?id=OIF.wsXlL%2fq%2fzbQvbnhFjdHNyA&r=0&pid=Api&h=220&P=0", processor: "Helio G100", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 81, name: "Infinix HOT 40 Pro", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th?id=OIF.qWx%2fV9nqLD4Qw9UP0nEVoA&r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 82, name: "Infinix HOT 40", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.0JexbzPNy1oNa1EYTPZYWwHaJK?r=0&pid=Api&h=220&P=0", processor: "Helio G88", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 83, name: "Infinix HOT 30", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.m38h0vd158WkPUn1N0GgMgHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G88", camera: "50MP", battery: "5000 mAh", storage: "128GB" },

  // INFINIX GT SERIES
  { id: 84, name: "Infinix GT 30 Pro", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.zLT4BiIwDoXiuQnyzxCl9w?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8350 Ultimate", camera: "108MP", battery: "5500 mAh", storage: "256GB" },
  { id: 85, name: "Infinix GT 30", brand: "Infinix", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.2ST2ihvAVB-2-JLE1I7z4QHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 7400", camera: "64MP", battery: "5500 mAh", storage: "256GB" },
  { id: 86, name: "Infinix GT 20 Pro", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.Zztk8JpssFxWyJKQtVc2Tg?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8200 Ultimate", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 87, name: "Infinix GT 10 Pro", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.uQ5cpaPm8onDzhYSSOoUGg?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8050", camera: "108MP", battery: "5000 mAh", storage: "256GB" },

  // INFINIX SMART SERIES
  { id: 88, name: "Infinix SMART 9", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.hNSXS%2bbPDLR2ApKOMmXouQ&r=0&pid=Api&h=220&P=0", processor: "Helio G81", camera: "13MP", battery: "5000 mAh", storage: "128GB" },
  { id: 89, name: "Infinix SMART 8 Pro", brand: "Infinix", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.hNSXS%2bbPDLR2ApKOMmXouQ&r=0&pid=Api&h=220&P=0", processor: "Helio G36", camera: "50MP", battery: "5000 mAh", storage: "128GB" },
  { id: 90, name: "Infinix SMART 8", brand: "Infinix", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.yE4OlZo1iA9LkVxA5rOS1A?r=0&pid=Api&h=220&P=0", processor: "Unisoc T606", camera: "13MP", battery: "5000 mAh", storage: "128GB" },
  { id: 91, name: "Infinix SMART 7", brand: "Infinix", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.23p1JSfmlCoqATttjnf5jwHaHa?r=0&pid=Api&h=220&P=0", processor: "Unisoc SC9863A", camera: "13MP", battery: "5000 mAh", storage: "64GB" },

  // TECNO CAMON SERIES
  { id: 92, name: "TECNO CAMON 40 Premier 5G", brand: "TECNO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.9BXMaWJUme7pJic43HxzrgHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8350 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "512GB" },
  { id: 93, name: "TECNO CAMON 40 Pro 5G", brand: "TECNO", price: 0, image: "https://tse1.mm.bing.net/th?id=OIF.fgtGVg%2frHOqPNGVU%2fDIf3Q&r=0&pid=Api&h=220&P=0", processor: "Dimensity 7300", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 94, name: "TECNO CAMON 40 Pro", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th?id=OIF.%2fVobZLfj466c8LCKzxvwzw&r=0&pid=Api&h=220&P=0", processor: "Helio G100 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 95, name: "TECNO CAMON 40", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.Fs3A6lYIWSBv78MaS3HZJA?r=0&pid=Api&h=220&P=0", processor: "Helio G100 Ultimate", camera: "50MP", battery: "5200 mAh", storage: "256GB" },
  { id: 96, name: "TECNO CAMON 30 Premier 5G", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.-AqhPcuhAMwcTQms2UKjxwHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8200 Ultimate", camera: "50MP", battery: "5000 mAh", storage: "512GB" },
  { id: 97, name: "TECNO CAMON 30 Pro 5G", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.RySo6UyhS606u-TedSvqIwHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8200 Ultimate", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 98, name: "TECNO CAMON 30 5G", brand: "TECNO", price: 0, image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-premier-5g-03.jpg", processor: "Dimensity 7020", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 99, name: "TECNO CAMON 30", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.JzhMb9ttkmCeIDm7GLBumQHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G99 Ultimate", camera: "50MP", battery: "5000 mAh", storage: "256GB" },

  // TECNO PHANTOM SERIES
  { id: 100, name: "TECNO PHANTOM V Fold2 5G", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.gn3cMxfigyY82DyJWokb2AHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 9000+", camera: "50MP", battery: "5750 mAh", storage: "512GB" },
  { id: 101, name: "TECNO PHANTOM V Flip2 5G", brand: "TECNO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.zvED_fQUkOv5az9Fnapx5gHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8020", camera: "50MP", battery: "4720 mAh", storage: "256GB" },
  { id: 102, name: "TECNO PHANTOM V Fold", brand: "TECNO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.-HWfgZSUKmVHXnDuWNSWdgHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 9000+", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 103, name: "TECNO PHANTOM V Flip", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.6kv5RY9hp09kWooE91mRkgHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 8050", camera: "64MP", battery: "4000 mAh", storage: "256GB" },

  // TECNO POVA SERIES
  { id: 104, name: "TECNO POVA 7 Pro 5G", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.RoPP9kG3w4PSgfimSobGVgHaJH?r=0&pid=Api&h=220&P=0", processor: "Dimensity Series", camera: "64MP", battery: "6000 mAh", storage: "256GB" },
  { id: 105, name: "TECNO POVA 7 5G", brand: "TECNO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.iT49D1RObBMfKuLpiEsM6AHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity Series", camera: "50MP", battery: "6000 mAh", storage: "128GB" },
  { id: 106, name: "TECNO POVA 7", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.j%2bWMES35eqOW7CqFlgfIZA&r=0&pid=Api&h=220&P=0", processor: "Helio Series", camera: "50MP", battery: "7000 mAh", storage: "128GB" },
  { id: 107, name: "TECNO POVA 6 Pro 5G", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.rbTq8wAhRObXcBJ7-GFLNQHaHa?r=0&pid=Api&h=220&P=0", processor: "Dimensity 6080", camera: "108MP", battery: "6000 mAh", storage: "256GB" },
  { id: 108, name: "TECNO POVA 6", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.xf4xoCjk_qySdah0Q1z9MwHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G99 Ultimate", camera: "108MP", battery: "6000 mAh", storage: "256GB" },
  { id: 109, name: "TECNO POVA 5 Pro 5G", brand: "TECNO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.OGRl6s6CRHSQ3sKdBivtQQHaJO?r=0&pid=Api&h=220&P=0", processor: "Dimensity 6080", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 110, name: "TECNO POVA 5", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.RIhcZ6mgCqi4Mwernixy6wHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "50MP", battery: "6000 mAh", storage: "128GB" },

  // TECNO SPARK SERIES
  { id: 111, name: "TECNO SPARK 30 Pro", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.nkfBkC374QjJsumpv0lGpw?r=0&pid=Api&h=220&P=0", processor: "Helio G100", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 112, name: "TECNO SPARK 30 5G", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.G4fzvd1Fw-_PfyPz1-O4MwHaIR?r=0&pid=Api&h=220&P=0", processor: "Dimensity 6300", camera: "108MP", battery: "5000 mAh", storage: "128GB" },
  { id: 113, name: "TECNO SPARK 30", brand: "TECNO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIF.nkfBkC374QjJsumpv0lGpw?r=0&pid=Api&h=220&P=0", processor: "Helio G91", camera: "64MP", battery: "5000 mAh", storage: "128GB" },
  { id: 114, name: "TECNO SPARK 20 Pro+", brand: "TECNO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.nCGk7jTrv5cbehg14v5WzQ?r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 115, name: "TECNO SPARK 20 Pro", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP._h5WxmgTcEtPw3PzjJuXBAHaHa?r=0&pid=Api&h=220&P=0", processor: "Helio G99", camera: "108MP", battery: "5000 mAh", storage: "256GB" },
  { id: 116, name: "TECNO SPARK 20", brand: "TECNO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.3Lcj1nUQUFSfzhkHHcrgoAHaJ3?r=0&pid=Api&h=220&P=0", processor: "Helio G85", camera: "50MP", battery: "5000 mAh", storage: "256GB" },
  { id: 117, name: "TECNO SPARK Go 1", brand: "TECNO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.w8GDVSpo-CEcEbWdiNvDPQHaHa?r=0&pid=Api&h=220&P=0", processor: "Unisoc T615", camera: "13MP", battery: "5000 mAh", storage: "128GB" },

  // TECNO POP SERIES
  { id: 118, name: "TECNO POP 9", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.TJxwOrlPlnAbeCP2-UGtzAHaHa?r=0&pid=Api&h=220&P=0", processor: "Unisoc T615", camera: "13MP", battery: "5000 mAh", storage: "128GB" },
  { id: 119, name: "TECNO POP 8", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.8LbAnJzCtaA5f7pS_4OkrgHaHa?r=0&pid=Api&h=220&P=0", processor: "Unisoc T606", camera: "13MP", battery: "5000 mAh", storage: "64GB" },
  { id: 120, name: "TECNO POP 7", brand: "TECNO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.9JfJ0W6-mNOvpKJk18RYcAHaKf?r=0&pid=Api&h=220&P=0", processor: "Unisoc SC9863A", camera: "8MP", battery: "5000 mAh", storage: "64GB" },

  // OPPO FIND SERIES
  { id: 121, name: "OPPO Find X9 Ultra", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.p-t8jJXcLUSvQwfadkn5DgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 122, name: "OPPO Find X9", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.y4gMCoAykH3u0ueMONddAAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 123, name: "OPPO Find X8", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.y4gMCoAykH3u0ueMONddAAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 124, name: "OPPO Find N5", brand: "OPPO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.PqbDx3Ll9M4T5YYX1TbEOwAAAA?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 125, name: "OPPO Find N3 Flip", brand: "OPPO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.4W2tp7jusT3sIDHsV0SS0QHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },

  // OPPO RENO SERIES
  { id: 126, name: "OPPO Reno16 Pro 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.BNPJsUW9UarNhlmsc15_awHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 127, name: "OPPO Reno16 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.M2-IzVgaanJqydjkGPfj7wHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 128, name: "OPPO Reno16 F 5G", brand: "OPPO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.65B_-tRKU-4ITYMWN2bjVQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 129, name: "OPPO Reno15 Pro 5G", brand: "OPPO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.sj5oYkTxjXiVerPSqgsP7gAAAA?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 130, name: "OPPO Reno15 5G", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.-dpCY64j0EExFt9hux9zMgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 131, name: "OPPO Reno15 F 5G", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.-dpCY64j0EExFt9hux9zMgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 132, name: "OPPO Reno14 Pro 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.KP8Y26inD6XY4PVBj5vwSAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 133, name: "OPPO Reno14 5G", brand: "OPPO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.spdGRRqPdSiWfaY4WH8atQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 134, name: "OPPO Reno14 F 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIF.RGFnkHyEkDQJRN6idLNx2g?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 135, name: "OPPO Reno13 Pro 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.AU7ciNPeWdzDY0dE8_xBcQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 136, name: "OPPO Reno13 5G", brand: "OPPO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.45Bpa-xlFD21otDY4lO93QHaJF?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },

  // OPPO A SERIES
  { id: 137, name: "OPPO A7 Pro 5G", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th?id=OIF.PPoX60tFzEBLRDqUuzs%2fbA&r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 138, name: "OPPO A6 Pro 5G", brand: "OPPO", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.nQNriBrBcXlz07QLJq4kGQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 139, name: "OPPO A6", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.Y7hA2Y9HNNAWnbP_A12qXwHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 140, name: "OPPO A5 Pro 5G", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIF.X5alnGYUb8caLIdZJ4usYw?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 141, name: "OPPO A5 5G", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.Svv-syA0uhsSWJpCsfV93AHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 142, name: "OPPO A3", brand: "OPPO", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.oEqmsEw0BfKddJ7scrkuggHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 143, name: "OPPO A3x", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.TBJUFl-OF9404MIarv7dbgHaIC?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 144, name: "OPPO A60", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.uSJtTS0iswyScGh-cpTa8gHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 145, name: "OPPO A58", brand: "OPPO", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.OxbvUdJfE3RJN_-NISiJfwHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 146, name: "OPPO A38", brand: "OPPO", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.R6NwFR1OIyf0J1Q2v3LDiAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },

  // VIVO X SERIES
  { id: 147, name: "vivo X300 Ultra", brand: "vivo", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.hDR3cFsfW00zhwj8q1Am8gHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 148, name: "vivo X300 Pro", brand: "vivo", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.eEtD7on5H_fsVaWsffljyQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 149, name: "vivo X300", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.asiFXOw0Dfrsu2MzO7WPDAAAAA?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 150, name: "vivo X300 FE", brand: "vivo", price: 0, image: "https://tse4.mm.bing.net/th/id/OIP.ufEJZ6li_IpSXhb5S14qHwHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 151, name: "vivo X200 FE", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIF.tnyHdMq8gDqYX0Ro5Z7VPg?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 152, name: "vivo X200 Pro", brand: "vivo", price: 0, image: "https://tse4.mm.bing.net/th/id/OIF.a9h6aj5LmZhiRMN5iUFHng?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 153, name: "vivo X200", brand: "vivo", price: 0, image: "https://tse2.mm.bing.net/th?id=OIF.r8yGxZO%2fk63XVrAU0F8guQ&r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },

  // VIVO V SERIES
  { id: 154, name: "vivo V70", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.paFoGSVgrQ5_cizIBvJZFgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 155, name: "vivo V70 FE", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP._4P5tN5xsbPWM5eDWApoPAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 156, name: "vivo V60", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th?id=OIF.MR%2fNSjNnD2pWSSBEtoX6wQ&r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 157, name: "vivo V60 Lite", brand: "vivo", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.jjTxiF70ggiu7oTnJ7YUkgHaEK?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 158, name: "vivo V50", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.u25DW8YCEfIuvQlxgbseMQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 159, name: "vivo V50 Lite 5G", brand: "vivo", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.4-iDzr58eow7I0v6amHLTQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 160, name: "vivo V40", brand: "vivo", price: 0, image: "https://static.toiimg.com/thumb/resizemode-4,msid-135303225,width-1070/135303225.jpg", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 161, name: "vivo V40 Lite", brand: "vivo", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.-wO4bxokYx0Wql_L1Yav8AHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },

  // VIVO Y SERIES
  { id: 162, name: "vivo Y31d", brand: "vivo", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.I-wOAB4KGjDrP9qAmtxjsgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 163, name: "vivo Y29", brand: "vivo", price: 0, image: "https://tse1.mm.bing.net/th/id/OIP.wcZF0ziqVZ5LZ3M84WjzIwHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 164, name: "vivo Y28", brand: "vivo", price: 0, image: "https://tse4.mm.bing.net/th?id=OIF.O2tR%2bwOrozzLFpx4mOK5Sg&r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 165, name: "vivo Y19s", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.KQiUkE8b2WoXRirygc6tyQHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 166, name: "vivo Y18", brand: "vivo", price: 0, image: "https://tse1.mm.bing.net/th?id=OIF.mT8hTwc59Eq%2fCh8XzI6%2bfA&r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 167, name: "vivo Y05", brand: "vivo", price: 0, image: "https://tse3.mm.bing.net/th/id/OIP.HNPsnn547YGwS9GBaGLSqAHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
  { id: 168, name: "vivo Y11d", brand: "vivo", price: 0, image: "https://tse2.mm.bing.net/th/id/OIP.ROTw6tr_LPvT3AU8_P8dkgHaHa?r=0&pid=Api&h=220&P=0", processor: "Not specified", camera: "Not specified", battery: "Not specified", storage: "Not specified" },
];

const brands = [
  "All Brands",
  "Apple",
  "Samsung",
  "Infinix",
  "TECNO",
  "OPPO",
  "vivo",
];

// ==========================================
// CELLPHONE COMPONENT
// ==========================================

export default function Cellphone({ onBack, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  // FILTER AND SEARCH
  const filteredPhones = useMemo(() => {
    let result = phoneData.filter((phone) => {
      const matchesSearch =
        phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phone.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All Brands" ||
        phone.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });

    if (sortOrder === "low") {
      result = [...result].sort((a, b) => {
        if (a.price === 0) return 1;
        if (b.price === 0) return -1;
        return a.price - b.price;
      });
    } else if (sortOrder === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [searchTerm, selectedBrand, sortOrder]);

  const formatPrice = (price) =>
    price > 0
      ? `₱${price.toLocaleString("en-PH")}`
      : "Price not set";

  // RESET FILTERS
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All Brands");
    setSortOrder("default");
  };

  // ==========================================
  // UI
  // ==========================================

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
                <span className="text-blue-600">
                  ANDROIDS
                </span>
              </h1>

              <p className="text-[10px] tracking-[3px] text-blue-600">
                PREMIUM SMARTPHONES
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="rounded-lg p-2 text-blue-800 hover:bg-blue-50 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
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
            Smartphone{" "}
            <span className="text-blue-600">
              Collection
            </span>
          </h2>

          <p className="mt-3 text-sm text-blue-800 sm:text-base">
            Discover smartphones from different brands.
          </p>
        </div>

        {/* SEARCH AND SORT - CENTERED */}
        <div className="mb-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* SEARCH */}
          <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-blue-200 bg-white px-4 py-3 shadow-md transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">

            <Search
              className="shrink-0 text-blue-600"
              size={20}
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search cellphone or brand..."
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

          {/* SORT */}
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

        {/* CENTERED BRAND FILTER */}
        <div className="mb-9 flex flex-wrap items-center justify-center gap-3">

          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm transition duration-200 ${
                selectedBrand === brand
                  ? "border-blue-600 bg-blue-600 text-white shadow-md"
                  : "border-blue-200 bg-white/90 text-blue-900 hover:border-blue-400 hover:bg-blue-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* RESULTS INFORMATION */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          <p className="text-sm font-medium text-blue-900">
            <span className="font-black text-blue-700">
              {filteredPhones.length}
            </span>{" "}
            cellphone units found
          </p>

          <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
            <Smartphone size={16} />
            Smartphones
          </div>
        </div>

        {/* PRODUCT GRID */}
        {filteredPhones.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredPhones.map((phone) => (

              <div
                key={phone.id}
                className="group overflow-hidden rounded-2xl border border-white bg-white/95 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative flex h-60 items-center justify-center overflow-hidden bg-blue-50 p-5">

                  <img
                    src={phone.image}
                    alt={phone.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  {/* BRAND BADGE */}
                  <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    {phone.brand}
                  </span>
                </div>

                {/* PRODUCT INFORMATION */}
                <div className="p-5">

                  {/* STARS */}
                  <div className="mb-2 flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                      />
                    ))}

                    <span className="ml-1 text-xs text-slate-500">
                      Featured
                    </span>
                  </div>

                  {/* PHONE NAME */}
                  <h3 className="min-h-12 text-lg font-bold text-[#102a5e]">
                    {phone.name}
                  </h3>

                  {/* PRICE */}
                  <p className="mt-2 text-xl font-black text-blue-600">
                    {formatPrice(phone.price)}
                  </p>

                  {/* DETAILS BUTTON */}
                  <button
                    onClick={() => setSelectedPhone(phone)}
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

          /* NO RESULTS */
          <div className="rounded-2xl border border-blue-100 bg-white/90 py-20 text-center shadow-lg">

            <Smartphone
              size={45}
              className="mx-auto mb-4 text-blue-400"
            />

            <h3 className="text-xl font-black text-[#102a5e]">
              No Cellphone Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another cellphone name or brand.
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

      {/* ========================================
          PRODUCT DETAILS MODAL
      ======================================== */}

      {selectedPhone && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#071b40]/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhone(null)}
        >

          <div
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPhone(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-blue-100 p-2 text-blue-800 transition hover:bg-red-100 hover:text-red-600"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* MODAL IMAGE */}
              <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">

                <img
                  src={selectedPhone.image}
                  alt={selectedPhone.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="max-h-72 w-full object-contain"
                />
              </div>

              {/* MODAL DETAILS */}
              <div className="p-7 sm:p-9">

                <p className="text-xs font-black uppercase tracking-[3px] text-blue-600">
                  {selectedPhone.brand}
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#102a5e] sm:text-3xl">
                  {selectedPhone.name}
                </h2>

                <p className="mt-3 text-2xl font-black text-blue-600">
                  {formatPrice(selectedPhone.price)}
                </p>

                <div className="my-6 h-px bg-blue-100" />

                <h3 className="mb-4 font-black text-[#102a5e]">
                  Specifications
                </h3>

                <div className="space-y-4 text-sm">

                  {/* PROCESSOR */}
                  <div className="flex items-center gap-3">
                    <Cpu
                      className="text-blue-600"
                      size={20}
                    />

                    <div>
                      <p className="text-slate-500">
                        Processor
                      </p>

                      <p className="font-bold text-[#102a5e]">
                        {selectedPhone.processor}
                      </p>
                    </div>
                  </div>

                  {/* CAMERA */}
                  <div className="flex items-center gap-3">
                    <Camera
                      className="text-blue-600"
                      size={20}
                    />

                    <div>
                      <p className="text-slate-500">
                        Camera
                      </p>

                      <p className="font-bold text-[#102a5e]">
                        {selectedPhone.camera}
                      </p>
                    </div>
                  </div>

                  {/* BATTERY */}
                  <div className="flex items-center gap-3">
                    <Battery
                      className="text-blue-600"
                      size={20}
                    />

                    <div>
                      <p className="text-slate-500">
                        Battery
                      </p>

                      <p className="font-bold text-[#102a5e]">
                        {selectedPhone.battery}
                      </p>
                    </div>
                  </div>

                  {/* STORAGE */}
                  <div className="flex items-center gap-3">
                    <HardDrive
                      className="text-blue-600"
                      size={20}
                    />

                    <div>
                      <p className="text-slate-500">
                        Storage
                      </p>

                      <p className="font-bold text-[#102a5e]">
                        {selectedPhone.storage}
                      </p>
                    </div>
                  </div>

                </div>

                {/* CLOSE DETAILS */}
                <button
                  onClick={() => setSelectedPhone(null)}
                  className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Close Details
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="mt-10 border-t border-blue-900 bg-[#102a5e] px-5 py-7 text-center text-sm text-white">
        © {new Date().getFullYear()} SMOKIN ANDROIDS. All Rights Reserved.
      </footer>

    </div>
  );
}
