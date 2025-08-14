// ======================================================
// CONTACT SECTION
// ======================================================

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { calistoga } from "./Hero"

export const ContactSection = () => {
  return (
    <div className="container py-20 lg:max-w-5xl lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-[25px] px-9 py-8 text-center relative overflow-hidden z-0 md:text-left">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>

        <div className="flex flex-col items-center md:flex-row md:gap-20">
          <div className="flex flex-col gap-2">
            <h2 className={`${calistoga.className} text-gray-950 text-2xl md:text-3xl`}>Let&apos;s create something amazing together</h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold">Ready to bring your next project to life?
              Let&apos;s connect and discuss how I can help you achieve your goals.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-gray-900 px-6 h-12 rounded-2xl mt-8 md:mt-0">
            <span className="font-semibold text-lg w-max">Contact Me</span>
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
};
