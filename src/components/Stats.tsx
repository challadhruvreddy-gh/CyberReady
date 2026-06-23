const stats = [
  { value: "10k+", label: "Students Reached" },
  { value: "120+", label: "Schools Partnered" },
  { value: "95%", label: "Report Feeling Safer" },
  { value: "50+", label: "Free Resources" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
          Numbers that <span className="text-cyan-400">tell a story</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-[#101a35] p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-cyan-400">{s.value}</p>
              <p className="mt-2 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
