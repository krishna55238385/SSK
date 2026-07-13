import React, { useState } from "react"
import { motion } from "framer-motion"
import image30Asset from "../assets/image30.png"
import image31Asset from "../assets/image31.png"
import image32Asset from "../assets/image32.png"
import image33Asset from "../assets/image33.png"
import image34Asset from "../assets/image34.png"

export const Collections: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Categories')
  
  const tabs = ['All Categories', 'Men', 'Women', 'Kids', 'Family Sets']

  const bestSellersList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree" },
    { id: 2, image: image32Asset, title: "Kasavu Saree" },
    { id: 3, image: image33Asset, title: "Kasavu Saree" },
    { id: 4, image: image34Asset, title: "Kasavu Saree" },
  ]
  const newArrivalsList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree" },
    { id: 2, image: image32Asset, title: "Kasavu Saree" },
    { id: 3, image: image33Asset, title: "Kasavu Saree" },
    { id: 4, image: image34Asset, title: "Kasavu Saree" },
  ]
  const collectionsList = [
    { id: 1, image: image31Asset, title: "Kasavu Saree", extraCount: "5+" },
    { id: 2, image: image32Asset, title: "Kasavu Saree", extraCount: "4+" },
    { id: 3, image: image33Asset, title: "Kasavu Saree", extraCount: "8+" },
    { id: 4, image: image34Asset, title: "Kasavu Saree", extraCount: "2+" },
    { id: 5, image: image32Asset, title: "Kasavu Saree", extraCount: "6+" },
    { id: 6, image: image31Asset, title: "Kasavu Saree", extraCount: "3+" },
    { id: 7, image: image34Asset, title: "Kasavu Saree", extraCount: "7+" },
    { id: 8, image: image33Asset, title: "Kasavu Saree", extraCount: "4+" },
  ]

  return (
    <div className="w-full pb-20 bg-[#fdfcf7]">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#1e170d] overflow-hidden">
        <img 
          src={image30Asset} 
          alt="All Categories Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-20">
          <div className="text-xs md:text-sm tracking-[0.3em] font-light uppercase text-white/90 mb-4 md:mb-6 select-none">
            HOME / ALL CATEGORIES
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight max-w-5xl select-none">
            Discover the Full <span className="italic font-light">Collection.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-14">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 md:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm md:text-base font-normal transition-colors rounded-xs ${
                activeTab === tab 
                  ? 'bg-[#3f2f11] text-white shadow-sm' 
                  : 'bg-[#f3f0ea] text-[#867c6f] hover:bg-[#e6e2db]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Best Sellers */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#36261c] font-normal tracking-tight mb-10 md:mb-14 text-left">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellersList.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#f3f0ea] rounded-xs mb-3.5 md:mb-4 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <h4 className="text-[#483d34] text-base md:text-lg font-normal tracking-wide text-left font-sans group-hover:text-[#3f2f11] transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#36261c] font-normal tracking-tight mb-10 md:mb-14 text-left">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {newArrivalsList.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#f3f0ea] rounded-xs mb-3.5 md:mb-4 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <h4 className="text-[#483d34] text-base md:text-lg font-normal tracking-wide text-left font-sans group-hover:text-[#3f2f11] transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#36261c] font-normal tracking-tight mb-10 md:mb-14 text-left">
            Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 gap-y-12 md:gap-y-16">
            {collectionsList.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#f3f0ea] rounded-xs mb-3.5 md:mb-4 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <h4 className="text-[#483d34] text-base md:text-lg font-normal tracking-wide text-left font-sans group-hover:text-[#3f2f11] transition-colors">
                  {item.title}
                </h4>

                {/* Row of square fabric thumbnails + count badge matching input_file_17.png */}
                <div className="flex items-center gap-1.5 mt-2.5">
                  {[image31Asset, image32Asset, image33Asset, image34Asset].map((swatchImg, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 md:w-7 md:h-7 overflow-hidden rounded-none border border-[#d4cdbd]/60 shrink-0"
                    >
                      <img src={swatchImg} alt="Swatch" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-[#b8a078] text-white text-[10px] md:text-xs font-semibold flex items-center justify-center shrink-0 select-none">
                    {item.extraCount}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-20 md:mb-28">
          <button className="border border-[#706454] text-[#483d34] px-12 py-3.5 text-xs tracking-[0.22em] uppercase hover:bg-[#3f2f11] hover:text-white transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>

      {/* Final CTA Box (Woven For Celebrations That Last A Lifetime) */}
      <section className="w-full pt-4 md:pt-8 pb-10 md:pb-14 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[2.5rem] bg-linear-to-br from-[#382613] via-[#24170b] to-[#170e06] border-[3px] md:border-4 border-white shadow-2xl p-10 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-normal leading-tight mb-6 max-w-3xl">
            Woven For Celebrations<br className="hidden sm:inline" /> That Last <span className="italic font-light">A Lifetime</span>
          </h2>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            From timeless kasavu classics to contemporary ethnic essentials, each piece is crafted to honor tradition while embracing modern elegance.
          </p>
          <button className="border border-white/80 px-8 py-3.5 tracking-[0.25em] text-xs uppercase text-white hover:bg-white hover:text-[#24170b] transition-colors">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </section>
    </div>
  )
}
