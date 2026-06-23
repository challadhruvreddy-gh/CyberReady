export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0e1730] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} CyberReady. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#programs" className="hover:text-cyan-400">
            Programs
          </a>
          <a href="#tools" className="hover:text-cyan-400">
            Tools
          </a>
          <a href="mailto:hello@cyberready.org" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
