// ======================================================
// TOOLBOX ITEMS COMPONENT
// ======================================================

import JsIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import { twMerge } from "tailwind-merge"
import { Fragment } from "react"

const toolboxItems = [
  {
    title: "Javascript",
    icon: JsIcon
  },
  {
    title: "HTML5",
    icon: HTMLIcon
  },
  {
    title: "CSS3",
    icon: CssIcon
  },
  {
    title: "React",
    icon: ReactIcon
  },
  {
    title: "Chrome",
    icon: ChromeIcon
  },
  {
    title: "Github",
    icon: GithubIcon
  },
]

export const ToolboxItems = ({ className }: { className?: string }) => {
  const dummyArray = new Array(2)
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-1.5">

      <div className={twMerge("mt-6 flex flex-none gap-6", className)}>
        {dummyArray.fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item) => (

              <div key={item.title} className="inline-flex gap-2 items-center border-2 border-white/15 rounded-lg px-3 py-2">
                <span><item.icon className="size-10 fill-[url(#icons-gradient)]" /></span>
                {/* SVG icon gradient  */}
                <svg className="size-0">
                  <linearGradient id="icons-gradient">
                    <stop offset="0%" stopColor="rgb(110,231,183)"></stop>
                    <stop offset="100%" stopColor="rgb(125, 211, 252)"></stop>
                  </linearGradient>
                </svg>

                <span className="font-semibold">{item.title}</span>
              </div>

            ))}
          </Fragment>
        ))}

      </div>

    </div>

  )
}
