export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            A youth-led movement
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Empowering Teens to{" "}
            <span className="text-cyan-400">Own Their Digital Safety</span>
          </h1>
          <p className="mt-6 max-w-md text-slate-300">
            CyberReady gives students the knowledge, tools, and confidence to
            recognize threats, protect their data, and navigate the internet
            safely — built by teens, for teens.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-[#0b1120] transition hover:bg-cyan-400"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 sm:h-96">
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            Students learning cybersecurity together
          </div>
        </div>
      </div>
    </section>
  );
}
