// ======================================================
// HERO SECTION
// ======================================================

import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'
import { Calistoga } from 'next/font/google'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit'

export const calistoga = Calistoga({ subsets: ['latin'], weight: ['400'] })
const heroRingStyle = 'absolute inset-0 border border-emerald-400/5 shadow-[0_0_80px_inset] shadow-emerald-400/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-50'

export const HeroSection = () => {
  return (
    <div className='py-[120px] md:py-40 lg:py-52 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        {/* ring containers */}
        <div className={`${heroRingStyle} size-[600px]`}></div>
        <div className={`${heroRingStyle} size-[800px]`}></div>
        <div className={`${heroRingStyle} size-[1000px]`}></div>
        <div className={`${heroRingStyle} size-[1200px]`}></div>

        {/* Hero stars and sparkles */}
        <HeroOrbit size={800} rotationAngle={-72}>
          <StarIcon className='size-20 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={530} rotationAngle={20}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={570} rotationAngle={90}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit size={700} rotationAngle={150}>
          <SparkleIcon className='size-12 text-emerald-300/15' />
        </HeroOrbit>
        <HeroOrbit size={510} rotationAngle={180}>
          <SparkleIcon className='size-7 text-emerald-300/15' />
        </HeroOrbit>
        <HeroOrbit size={420} rotationAngle={90}>
          <SparkleIcon className='size-5 text-emerald-300/15' />
        </HeroOrbit>
        <HeroOrbit size={425} rotationAngle={-15}>
          <SparkleIcon className='size-7 text-emerald-300/15' />
        </HeroOrbit>

        <HeroOrbit size={705} rotationAngle={85}>
          <div className='size-3 bg-emerald-300/15 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotationAngle={-40}>
          <div className='size-2 bg-emerald-300/15 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotationAngle={-5}>
          <div className='size-2 bg-emerald-300/15 rounded-full'></div>
        </HeroOrbit>
      </div>


      <div className="container">

        <div className='flex flex-col items-center'>
          <Image src={memojiImage} alt='a person looking at a laptop' className='size-[100px]' />

          <div className='bg-gray-950 px-4 py-1.5 flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-3 rounded-full relative'>
              <div className='absolute inset-0 bg-green-500 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <div className='flex flex-col gap-4 text-center mt-8'>
            <h1 className={`${calistoga.className} text-3xl md:text-5xl tracking-wide`}>Building Exceptional User Experiences</h1>
            <p className='text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing
              web applications. Let's discuss your next project.</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center gap-4 mt-8'>
          <button className='inline-flex gap-2 items-center border border-white/15 px-6 h-12 rounded-xl font-semibold'>
            <span>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex gap-2 items-center border border-white/15 px-6 h-12 rounded-xl bg-white text-gray-800 font-semibold'>
            👋
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
