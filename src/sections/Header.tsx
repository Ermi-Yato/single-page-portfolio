// ======================================================
// THE HEADER/NAVBAR COMPONENT
// ======================================================

export const Header = () => {
  const navStyle = "px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
  return (
    <div className="flex justify-center items-center relative z-50">
      <div className="fixed top-3 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
        <nav className="flex gap-1 p-0.5 text-white/70">
          <a href="#" className={navStyle}>Home</a>
          <a href="#projects" className={navStyle}>Projects</a>
          <a href="#about" className={navStyle}>About</a>
          <a href="#contact" className={`${navStyle} bg-white text-gray-950`}>Contact</a>
        </nav>
      </div>
    </div>
  )
}
