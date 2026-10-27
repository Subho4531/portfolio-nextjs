import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subho — Software developer",
  description: "Software developer. Minimal portfolio.",
};

const projects = [
  {
    title: "Interceptor",
    description: "AI workflow product — structured intent routing with versioned PRD pipeline and eval loop.",
  },
  {
    title: "Agent Workspace",
    description: "Multi-agent command centre — isolated profiles, live session routing, parallel coordination.",
  },
  {
    title: "MCP Toolkits",
    description: "Reusable MCP servers exposing local tooling to agents — typed schemas, sandboxing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="mx-auto max-w-[680px] px-6">
        <header className="flex items-center justify-between py-8 text-sm text-[#666]">
          <span className="font-medium text-[#111]">Subho</span>
          <nav className="flex gap-6">
            <a href="#work" className="hover:underline underline-offset-4">Work</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
        </header>

        <hr className="border-[#e5e5e5]" />

        <section className="border-b border-[#e5e5e5] py-24 text-center">
          <h1 className="text-[48px] font-light leading-none tracking-tight">
            Subho
          </h1>
          <p className="mt-3 text-[16px] text-[#666]">Software developer</p>
          <div className="mt-8 flex justify-center gap-6 text-[14px]">
            <a
              href="https://github.com/Subho4531"
              className="hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@subho.dev"
              className="hover:underline underline-offset-4"
            >
              Email
            </a>
          </div>
        </section>

        <section id="work" className="border-b border-[#e5e5e5] py-24">
          <h2 className="text-[14px] font-medium uppercase tracking-widest text-[#999]">
            Work
          </h2>
          <ul className="mt-8 divide-y divide-[#e5e5e5]">
            {projects.map((p) => (
              <li key={p.title} className="py-6">
                <h3 className="text-[16px] font-medium">{p.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#666]">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="border-b border-[#e5e5e5] py-24">
          <h2 className="text-[14px] font-medium uppercase tracking-widest text-[#999]">
            About
          </h2>
          <div className="mt-8 space-y-4 text-[16px] leading-[1.7]">
            <p>
              I build AI systems and developer tooling — agents, MCP servers, and the
              infrastructure that makes them reliable in production.
            </p>
            <p>I care about shipping small, measuring, and iterating.</p>
          </div>
        </section>

        <section id="contact" className="py-24">
          <h2 className="text-[14px] font-medium uppercase tracking-widest text-[#999]">
            Contact
          </h2>
          <p className="mt-8 text-[16px]">
            <a
              href="mailto:hello@subho.dev"
              className="hover:underline underline-offset-4"
            >
              hello@subho.dev
            </a>
          </p>
        </section>

        <footer className="py-12 text-[13px] text-[#999]">
          © 2026 Subho
        </footer>
      </div>
    </div>
  );
}
