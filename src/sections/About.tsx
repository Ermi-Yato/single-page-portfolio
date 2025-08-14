// ======================================================
// ABOUT SECTION
// ======================================================

import { SectionHeader } from "@/components/SectionHeader";
import { CardComponent } from "@/components/CardComponent";
import Image from "next/image";
import bookCover from "@/assets/images/book-cover.png"
import mapImage from "@/assets/images/map.png"
import memojiSmile from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const personalHobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%"
  },
  {
    title: "Photography",
    emoji: "📸",
    top: "5%",
    left: "49%"
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "70px",
    left: "36%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "60px",
    left: "10%"
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "80px",
    left: "70%"
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    top: "115px",
    left: "5%"
  },
  {
    title: "Reading",
    emoji: "📚",
    top: "125px",
    left: "45%"
  },
]

export const AboutSection = () => {
  return (
    <div className="py-16 lg:py-32">

      <SectionHeader title="About Me"
        header="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me." />

      <div className="container lg:max-w-5xl mt-20 flex flex-col gap-8">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-10">
          <CardComponent className="h-[325px] overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <CardHeader cardHeader="My Reads" cardDescription="Explore the books shaping my perspectives." />

              <div className="w-40 mx-auto mt-8">
                <Image src={bookCover} alt="book cover preview" />
              </div>
            </div>
          </CardComponent>

          <CardComponent className="h-[325px] md:col-span-3 lg:col-span-2">
            <div>
              <CardHeader cardHeader="My Toolbox" cardDescription="Explore the technologies and tools I use to craft exceptional digital experiences." />

              {/* toolbox items goes here */}
              <ToolboxItems />
              <ToolboxItems className="-translate-x-1/2 pr-6" />

            </div>
          </CardComponent>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-10">
          <CardComponent className="h-[325px] md:col-span-3 lg:col-span-2">
            <div>
              <CardHeader cardHeader="Beyond the Code" cardDescription="Explore my interests and hobbies beyond the digital realm." />

              <div className="mt-8 relative">
                {personalHobbies.map((hobby) => (
                  <div key={hobby.title} className="px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-300 
                  inline-flex items-center gap-2 rounded-3xl absolute" style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}>
                    <span className="text-gray-900 font-semibold">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardComponent>

          <CardComponent className="overflow-hidden relative h-[325px] md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="w-full h-full object-cover" />
            <Image src={memojiSmile} alt="smiling memoji" className="size-20 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full 
            border-2 border-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </CardComponent>
        </div>
      </div>
    </div>
  )
};
