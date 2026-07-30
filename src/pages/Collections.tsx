import React, { useState } from "react"
import { motion } from "framer-motion"
import image30Asset from "../assets/image30.webp"
import image31Asset from "../assets/image31.webp"
import image32Asset from "../assets/image32.webp"
import image33Asset from "../assets/image33.webp"
import image34Asset from "../assets/image34.webp"

/* ─── Shared product card ─────────────────────────────────────────── */
interface ProductCardProps {
  image: string
  title: string
  swatches: string[]
  badge: string
  delay: number
}

const swatchImages = [image31Asset, image32Asset, image33Asset, image34Asset]

const ProductCard: React.FC<ProductCardProps> = ({ image, title, swatches, badge, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col group cursor-pointer"
  >
    {/* Main image */}
    <div className="w-full aspect-[4/5] overflow-hidden bg-[#f3f0ea] mb-[10px] sm:mb-[12px] md:mb-[14px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Product title — Satoshi 20px / 500 / #534654 */}
    <h4 className="font-satoshi text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-medium leading-[150%] text-[#534654] text-left group-hover:text-[#43252F] transition-colors">
      {title}
    </h4>

    {/* Swatch row */}
    <div className="flex items-center gap-[5px] sm:gap-[6px] mt-[8px]">
      {swatches.map((src, idx) => (
        <div
          key={idx}
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 overflow-hidden border border-[#d4cdbd]/60 shrink-0"
        >
          <img src={src} alt="Swatch" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-[#b8a078] text-white text-[9px] sm:text-[10px] md:text-xs font-semibold flex items-center justify-center shrink-0 select-none font-satoshi">
        {badge}
      </div>
    </div>
  </motion.div>
)

/* ─── Collections page ────────────────────────────────────────────── */
export const Collections: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Categories")

  const tabs = ["All Categories", "Men", "Women", "Kids", "Family Sets"]

  const bestSellersList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree", badge: "5+" },
    { id: 2, image: image32Asset, title: "Kasavu Saree", badge: "4+" },
    { id: 3, image: image33Asset, title: "Kasavu Saree", badge: "6+" },
    { id: 4, image: image34Asset, title: "Kasavu Saree", badge: "3+" },
  ]
  const newArrivalsList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree", badge: "4+" },
    { id: 2, image: image32Asset, title: "Kasavu Saree", badge: "2+" },
    { id: 3, image: image33Asset, title: "Kasavu Saree", badge: "7+" },
    { id: 4, image: image34Asset, title: "Kasavu Saree", badge: "3+" },
  ]
  const collectionsList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree", badge: "5+" },
    { id: 2, image: image32Asset, title: "Kasavu Saree", badge: "4+" },
    { id: 3, image: image33Asset, title: "Kasavu Saree", badge: "8+" },
    { id: 4, image: image34Asset, title: "Kasavu Saree", badge: "2+" },
    { id: 5, image: image32Asset, title: "Kasavu Saree", badge: "6+" },
    { id: 6, image: image31Asset, title: "Kasavu Saree", badge: "3+" },
    { id: 7, image: image34Asset, title: "Kasavu Saree", badge: "7+" },
    { id: 8, image: image33Asset, title: "Kasavu Saree", badge: "4+" },
  ]

  return (
    <div className="w-full pb-10 sm:pb-14 md:pb-20 bg-[#fdfcf7]">

      {/* ══ Hero Banner ══════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[640px] flex items-center justify-center bg-[#1e170d] overflow-hidden">
        <img
          src={image30Asset}
          alt="All Categories Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-[100px] sm:pt-[110px] md:pt-[120px] pb-10 sm:pb-14 md:pb-16">

          {/* Breadcrumb */}
          <div className="font-satoshi text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-[150%] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.8px] uppercase text-white/80 mb-4 sm:mb-5 md:mb-6 select-none">
            HOME / ALL CATEGORIES
          </div>

          {/* Hero Heading — 64px desktop, scales to mobile */}
          <h1
            className="font-medium text-white leading-[120%] select-none max-w-[280px] sm:max-w-[420px] md:max-w-[620px] lg:max-w-5xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 6vw, 64px)",
            }}
          >
            Discover the Full{" "}
            <span className="italic">Collection.</span>
          </h1>
        </div>
      </div>

      {/* ══ Main content ═════════════════════════════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-8 sm:pt-10 md:pt-14">

        {/* ── Category Filter Tabs ─────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-satoshi px-[14px] sm:px-[18px] md:px-[24px] py-[8px] sm:py-[9px] md:py-[10px] text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[150%] tracking-[0.5px] transition-colors ${
                activeTab === tab
                  ? "bg-[#3D2600] text-white"
                  : "bg-[#EDECE3] text-[#534654] hover:bg-[#e0ddd5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Best Sellers ──────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <h2
            className="font-medium leading-[120%] text-[#43252F] mb-[20px] sm:mb-[28px] md:mb-[40px] lg:mb-[48px] text-left"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3.5vw, 44px)",
            }}
          >
            Best Sellers
          </h2>

          {/* 2 cols on mobile → 3 on md → 4 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {bestSellersList.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                swatches={swatchImages}
                badge={item.badge}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>

        {/* ── New Arrivals ──────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <h2
            className="font-medium leading-[120%] text-[#43252F] mb-[20px] sm:mb-[28px] md:mb-[40px] lg:mb-[48px] text-left"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3.5vw, 44px)",
            }}
          >
            New Arrivals
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {newArrivalsList.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                swatches={swatchImages}
                badge={item.badge}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>

        {/* ── Collections ───────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <h2
            className="font-medium leading-[120%] text-[#43252F] mb-[20px] sm:mb-[28px] md:mb-[40px] lg:mb-[48px] text-left"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3.5vw, 44px)",
            }}
          >
            Collections
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-16">
            {collectionsList.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                swatches={swatchImages}
                badge={item.badge}
                delay={(i % 4) * 0.08}
              />
            ))}
          </div>
        </div>

        {/* ── Load More ────────────────────────────────────────────── */}
        <div className="flex justify-center mb-10 sm:mb-14 md:mb-20 lg:mb-28">
          <button className="font-satoshi border border-[#735C00] text-[#735C00] px-[32px] sm:px-[40px] md:px-[48px] py-[12px] md:py-[14px] text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[150%] tracking-[1.6px] uppercase hover:bg-[#735C00] hover:text-[#EDECE3] transition-colors duration-300">
            LOAD MORE
          </button>
        </div>
      </div>

      {/* ══ CTA Section ══════════════════════════════════════════════ */}
      <section className="w-full pt-2 sm:pt-4 md:pt-8 pb-8 sm:pb-10 md:pb-14 px-4 sm:px-6 md:px-16 lg:px-24">
        <div
          className="max-w-[920px] mx-auto rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border-[4px] sm:border-[5px] md:border-[6px] border-white shadow-[0px_4px_34px_rgba(70,44,0,0.20)] p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #462C00 0%, #1F1911 100%)" }}
        >
          {/* CTA Heading — 54px desktop */}
          <h2
            className="font-medium leading-[120%] text-white mb-4 sm:mb-5 md:mb-6 max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 5vw, 54px)",
            }}
          >
            Woven For Celebrations
            <br className="hidden sm:inline" /> That Last{" "}
            <span className="italic font-light">A Lifetime</span>
          </h2>

          {/* CTA Body — Satoshi 16px */}
          <p className="font-satoshi text-[13px] sm:text-[14px] md:text-[16px] font-normal leading-[150%] text-white/90 max-w-[551px] mx-auto mb-6 sm:mb-8 md:mb-10">
            From timeless kasavu classics to contemporary ethnic essentials, each piece is crafted to honor tradition while embracing modern elegance.
          </p>

          {/* CTA Button */}
          <button className="font-satoshi border border-white px-[28px] sm:px-[36px] md:px-[40px] py-[11px] sm:py-[13px] md:py-[14px] text-[11px] sm:text-[13px] md:text-[15px] font-normal leading-[24px] tracking-[1.4px] sm:tracking-[1.6px] uppercase text-white hover:bg-white hover:text-[#1F1911] transition-colors duration-300 whitespace-nowrap">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </section>

    </div>
  )
}
