// ======================================================
// PROJECTS SECTION
// ======================================================

//WARNING: FIX THE Z-INDEX ON THE PROJECT CARDS

import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { calistoga } from "./Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CardComponent } from "@/components/CardComponent";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  const offset = 30
  return (
    <div className="container lg:max-w-5xl pb-10 lg:pt-24">

      <SectionHeader title="Real-world Results" header="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />

      <div className="flex flex-col gap-16 mt-10 md:mt-20 relative">
        {portfolioProjects.map((project, index) => (
          <div key={project.title} className="sticky" style={{
            top: `${80 + index * offset}px`
          }}>
            <CardComponent key={project.title}
              className="overflow-x-clip bg-gray-800 
            border border-gray-500 rounded-[25px] 
            px-8 pt-8 md:px-10 md:pt-12 lg:px-16 lg:pt-16 overflow-hidden">

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex max-w-fit gap-2 uppercase tracking-widest text-sm bg-gradient-to-r from-emerald-400 to-cyan-300 text-transparent bg-clip-text font-semibold">
                    <span>{project.company}</span>
                    <span className="">&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className={`${calistoga.className} text-2xl md:text-4xl mt-2 md:mt-5 lg:mt-8`}>{project.title}</h2>
                  <hr className="border-none h-px bg-gray-500/40 mt-4 lg:mt-8" />

                  <ul className="flex flex-col gap-4 text-white/50 mt-4 md:mt-6 md:gap-5">
                    {project.results.map((result => (
                      <li key={result.title} className="flex items-center gap-2 text-sm md:text-base">
                        <CheckIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    )))}
                  </ul>

                  <button className="w-full md:w-[190px] flex justify-center items-center gap-2 bg-white h-12 rounded-xl mt-8">
                    <span className="font-semibold text-gray-900">Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4 stroke-gray-900" />
                  </button>
                </div>
                <div className="relative">
                  <Image src={project.image} alt="Project preview image" className="mt-9 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>

            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  )
};
