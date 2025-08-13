// ======================================================
// CARD HEADER COMPONENT
// ======================================================

import { calistoga } from "@/sections/Hero"
import StarIcon from "@/assets/icons/star.svg"

export const CardHeader = ({ cardHeader, cardDescription }: {
  cardHeader: string,
  cardDescription: string
}) => {
  return (
    <div className="px-6 pt-6 md:px-8 md:pt-8">
      <div className="flex gap-2">
        <StarIcon className="size-10 text-emerald-300" />
        <h2 className={`${calistoga.className} text-3xl font-semibold`}>{cardHeader}</h2>
      </div>
      <p className="text-white/50 text-sm mt-2 max-w-full lg:text-base lg:max-w-xs lg:mt-3">{cardDescription}</p>
    </div>
  )
}
