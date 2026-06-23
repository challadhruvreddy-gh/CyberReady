const tools = [
  {
    title: "Password Strength Checker",
    desc: "See how strong your password really is and get tips to improve it.",
  },
  {
    title: "Phishing Email Quiz",
    desc: "Test your skills spotting real phishing attempts vs. legit emails.",
  },
  {
    title: "Privacy Settings Guide",
    desc: "Step-by-step guides to lock down your favorite apps and platforms.",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="border-t border-white/10 bg-[#0e1730] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Free tools for <span className="text-cyan-400">staying safe online</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {tools.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-white/10 bg-[#101a35] p-6 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{t.desc}</p>
              <a
                href="#try"
                className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Try it →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
