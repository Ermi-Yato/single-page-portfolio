import { calistoga } from "@/sections/Hero"

export const SectionHeader = ({ title, header, description }: {
  title: string,
  header: string,
  description: string
}) => {
  return (
    <>

      <p className="flex max-w-fit mx-auto uppercase tracking-widest text-center bg-gradient-to-r from-emerald-400 to-cyan-300 text-transparent bg-clip-text font-semibold">{title}</p>
      <h2 className={`${calistoga.className} text-center text-3xl md:text-5xl lg:text-6xl mt-6`}>{header}</h2>
      <p className="text-white/50 text-center text-sm md:text-lg lg:text-xl max-w-[90%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-5">{description}</p>

    </>
  )
}
