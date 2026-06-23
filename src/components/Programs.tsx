const programs = [
  {
    title: "Safe Online Habits",
    desc: "Practical lessons on building safe, lifelong habits online.",
    tag: "Beginner",
  },
  {
    title: "Phishing Awareness",
    desc: "Learn to recognize and avoid scams, phishing, and social engineering.",
    tag: "Beginner",
  },
  {
    title: "Privacy & Data Protection",
    desc: "Understand how your data is collected and how to protect it.",
    tag: "Intermediate",
  },
  {
    title: "Securing Your Accounts",
    desc: "Passwords, 2FA, and account recovery best practices.",
    tag: "Intermediate",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Programs built for <span className="text-cyan-400">real student life</span>
          </h2>
          <p className="mt-4 text-slate-300">
            Free, self-paced courses designed with students, for students.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-[#101a35] p-6 transition hover:border-cyan-400/40"
            >
              <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {p.tag}
              </span>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
