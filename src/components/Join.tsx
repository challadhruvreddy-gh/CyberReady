"use client";

export default function Join() {
  return (
    <section id="join" className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Join the <span className="text-cyan-400">CyberReady movement</span>
        </h2>
        <p className="mt-4 text-slate-300">
          Sign up to get free resources, webinar invites, and updates on new
          programs delivered straight to your inbox.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 rounded-full border border-white/20 bg-[#101a35] px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#0b1120] transition hover:bg-cyan-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
