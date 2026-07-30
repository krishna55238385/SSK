import React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface CardProps {
  imageSrc: string
  title: string
  subtitle?: string
  swatches?: string[]
  className?: string
  bordered?: boolean
  alignText?: 'center' | 'left'
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  swatches,
  className,
  bordered = false,
  alignText = 'center'
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <motion.div 
      className={cn(
        "group flex flex-col items-center bg-white",
        bordered ? "border border-[#e5e5e5] p-2" : "",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-hidden w-full bg-[#f4f4f4] relative pb-[125%] mb-4">
        <img 
          src={imageSrc} 
          alt={title} 
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out",
            isLoaded ? "opacity-100 scale-100 group-hover:scale-[1.03]" : "opacity-0 scale-105"
          )}
          loading="lazy"
        />
      </div>
      <div className={cn("w-full px-1", alignText === 'center' ? "text-center" : "text-left")}>
        {subtitle && (
          <div className="text-[10px] tracking-widest text-[#888] uppercase mb-1">
            {subtitle}
          </div>
        )}
        <h3 className="font-serif text-lg text-brand-text mb-3">{title}</h3>
      </div>
      {swatches && swatches.length > 0 && (
        <div className="flex space-x-1 mt-auto">
          {swatches.map((swatch, idx) => (
            <div key={idx} className="w-6 h-6 overflow-hidden">
              <img src={swatch} alt={`swatch-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
