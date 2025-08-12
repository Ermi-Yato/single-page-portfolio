// ======================================================
// REUSABLE CARD COMPONENT
// ======================================================

import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import grainImage from "@/assets/images/grain.jpg"

export const CardComponent = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={twMerge("bg-gray-800 border border-gray-500 rounded-[25px] relative overflow-x-clip", className)}>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}>
      </div>
      {children}

    </div>
  )
}
