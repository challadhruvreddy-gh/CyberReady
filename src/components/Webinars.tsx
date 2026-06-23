const webinars = [
  {
    title: "Spotting Deepfakes & AI Scams in 2026",
    date: "Jul 8, 2026 · 4:00 PM EST",
  },
  {
    title: "Locking Down Your Social Media Privacy",
    date: "Jul 15, 2026 · 4:00 PM EST",
  },
  {
    title: "Staying Safe on School & Public Wi-Fi",
    date: "Jul 22, 2026 · 4:00 PM EST",
  },
];

export default function Webinars() {
  return (
    <section id="webinars" className="border-t border-white/10 bg-[#0e1730] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
          Upcoming Webinars
        </h2>
        <div className="space-y-4">
          {webinars.map((w) => (
            <div
              key={w.title}
              className="flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-[#101a35] p-5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-semibold text-white">{w.title}</p>
                <p className="text-sm text-slate-400">{w.date}</p>
              </div>
              <a
                href="#register"
                className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-[#0b1120] transition hover:bg-cyan-400"
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
