// ======================================================
// FOOTER SECTION
// ======================================================

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: "YouTube",
    href: "#"
  },
  {
    title: "Twitter",
    href: "#"
  },
  {
    title: "Instagram",
    href: "#"
  },
  {
    title: "Linkedln",
    href: "#"
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-0">

      <div className="h-[420px] w-[1500px] bg-emerald-300/30 absolute bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container">

        <div className="border-t border-white/15 flex flex-col md:flex-row md:justify-between items-center gap-8 py-6 text-sm">
          <span className="text-white/40">&copy; 2025. All rights reserved.</span>

          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <div className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </div>
            ))}
          </nav>
        </div>

      </div>

    </footer>
  )
};
