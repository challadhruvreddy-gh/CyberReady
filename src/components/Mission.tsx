export default function Mission() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#0e1730] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 sm:h-80">
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            Volunteers protecting students
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Algorithms protecting <span className="text-cyan-400">people</span>
          </h2>
          <p className="mt-5 text-slate-300">
            We believe every student deserves to understand the digital world
            they live in. CyberReady partners with schools and communities to
            deliver hands-on cybersecurity education, free safety tools, and
            mentorship from peers who&apos;ve been there.
          </p>
        </div>
      </div>
    </section>
  );
}
