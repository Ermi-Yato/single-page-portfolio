// ======================================================
// ABOUT SECTION
// ======================================================

import { SectionHeader } from "@/components/SectionHeader";
import { CardComponent } from "@/components/CardComponent";
import Image from "next/image";
import bookCover from "@/assets/images/book-cover.png"
import mapImage from "@/assets/images/map.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const personalHobbies = [
  {
    title: "Painting",
    emoji: "🎨"
  },
  {
    title: "Photography",
    emoji: "🎨"
  },
  {
    title: "Gaming",
    emoji: "🎨"
  },
  {
    title: "Hiking",
    emoji: "🎨"
  },
  {
    title: "Music",
    emoji: "🎨"
  },
  {
    title: "Fitness",
    emoji: "🏋️"
  },
  {
    title: "Reading",
    emoji: "📚"
  },
]

export const AboutSection = () => {
  return (
    <div className="py-16">

      <SectionHeader title="About Me"
        header="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me." />

      <div className="container mt-20 flex flex-col gap-8">

        <CardComponent className="h-[325px] overflow-hidden">
          <div className="flex flex-col">
            <CardHeader cardHeader="My Reads" cardDescription="Explore the books shaping my perspectives." />

            <div className="w-40 mx-auto mt-8">
              <Image src={bookCover} alt="book cover preview" />
            </div>
          </div>
        </CardComponent>

        <CardComponent className="h-[325px]">
          <div>
            <CardHeader cardHeader="My Toolbox" cardDescription="Explore the technologies and tools I use to craft exceptional digital experiences." />

            {/* toolbox items goes here */}
            <ToolboxItems />
            <ToolboxItems className="-translate-x-1/2 pr-6" />

          </div>
        </CardComponent>

        <CardComponent className="h-[325px]">
          <div>
            <CardHeader cardHeader="Beyond the Code" cardDescription="Explore my interests and hobbies beyond the digital realm." />

            <div>
              {personalHobbies.map((hobby) => (
                <div>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </CardComponent>

        <CardComponent className=" overflow-hidden">
          <Image src={mapImage} alt="map" />
        </CardComponent>
      </div>
    </div>
  )
};
