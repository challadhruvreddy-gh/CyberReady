const links = ["Home", "About", "Programs", "Tools", "Webinars", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-white">
          Cyber<span className="text-cyan-400">Ready</span>
        </a>
        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-cyan-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#login" className="hidden text-sm text-slate-300 hover:text-white sm:block">
            Log in
          </a>
          <a
            href="#join"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#0b1120] transition hover:bg-cyan-400"
          >
            Join
          </a>
        </div>
      </nav>
    </header>
  );
}
