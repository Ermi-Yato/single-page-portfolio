// ======================================================
// THE HEADER/NAVBAR COMPONENT
// ======================================================

export const Header = () => {
  const navStyle = "px-4 py-2 text-white/70 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
  return (
    <div className="flex justify-center items-center relative top-3 ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className={navStyle}>Home</a>
        <a href="#" className={navStyle}>Projects</a>
        <a href="#" className={navStyle}>About</a>
        <a href="#" className={`${navStyle} bg-white text-gray-900 hover:bg-white/70`}>Contact</a>
      </nav>
    </div>
  )
}
