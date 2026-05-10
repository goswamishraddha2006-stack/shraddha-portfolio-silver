import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { CursorGlow } from "@/components/CursorGlow";
import { Particles } from "@/components/Particles";
import { TypingText } from "@/components/TypingText";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shraddha Goswami — Creative Tech Portfolio" },
      {
        name: "description",
        content:
          "IMSc-IT student at Silver Oak University. Creative Tech Explorer, IEEE Outreach Chair, AI & design enthusiast.",
      },
      { property: "og:title", content: "Shraddha Goswami — Creative Tech Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Shraddha Goswami — AI, web design, prompt engineering and creative technology.",
      },
    ],
  }),
});

const skills = {
  Technical: ["HTML", "CSS", "PHP", "Prompt Engineering", "AI Exploration"],
  Creative: ["Creative Writing", "Content Writing", "Designing", "Communication", "Adaptability"],
  Interests: ["Game Development", "AI & Emerging Tech", "Modern UI Design", "Cyberpunk Aesthetics"],
};

const education = [
  { year: "2024 – 2028", title: "Integrated Master of Science (IT)", place: "Silver Oak University", desc: "Exploring web design, PHP, prompt engineering & modern technologies." },
  { year: "2022 – 2024", title: "12th Science", place: "Hebron School, Maninagar", desc: "Foundation in science with focus on logic and problem solving." },
  { year: "2020 – 2022", title: "10th Standard", place: "Hebron School, Maninagar", desc: "Built academic foundation with a passion for creativity & tech." },
];

const projects = [
  {
    title: "Bhashametrics",
    tag: "Word Frequency Analyzer",
    desc: "An academic project that analyzes and computes word frequencies from text input — a beginner coding journey into linguistic analysis.",
    color: "from-neon-purple/30 to-neon-blue/10",
  },
  {
    title: "Portfolio Website",
    tag: "UI / UX",
    desc: "This very portfolio — built with a futuristic cyberpunk inspired interface, animated micro-interactions and smooth motion.",
    color: "from-neon-blue/30 to-neon-pink/10",
  },
  {
    title: "AI Explorations",
    tag: "Coming Soon",
    desc: "Upcoming experiments in retrieval augmented generation, prompt engineering and creative AI tools.",
    color: "from-neon-pink/30 to-neon-purple/10",
  },
  {
    title: "Game Dev Lab",
    tag: "Future Work",
    desc: "A planned series of small interactive game prototypes inspired by cyberpunk worlds and storytelling.",
    color: "from-neon-purple/30 to-neon-pink/10",
  },
];

const certs = [
  "Introduction to Retrieval-Augmented Generation",
  "IEEE Workshop & Session Participation",
  "Technical Workshop Participation",
  "Creative & Outreach Recognition — IEEE SOU SB",
];

const interests = [
  { icon: "✦", title: "AI Exploration", desc: "Diving into emerging models, prompts, and creative AI tools." },
  { icon: "◈", title: "Game Development", desc: "Designing interactive worlds inspired by cyberpunk aesthetics." },
  { icon: "❖", title: "Creative Tech", desc: "Blending art with code to craft expressive digital experiences." },
  { icon: "✺", title: "Modern UI Design", desc: "Crafting immersive, futuristic and elegant interfaces." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CursorGlow />
      <Nav />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, oklch(0.3 0.2 290 / 60%), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.3 0.2 240 / 50%), transparent 60%), linear-gradient(to bottom, transparent 60%, var(--background))",
          }}
        />
        <Particles count={40} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-8">
            <Reveal>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-neon-blue glow-text">
                — Hello, I&apos;m
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Shraddha
                <br />
                <span className="text-gradient animate-gradient">Goswami</span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <div className="text-xl font-medium text-muted-foreground md:text-2xl">
                I&apos;m a{" "}
                <TypingText
                  words={[
                    "Creative Tech Explorer",
                    "IMSc-IT Student",
                    "IEEE Outreach Chair",
                    "AI Enthusiast",
                    "UI Designer",
                  ]}
                />
              </div>
            </Reveal>
            <Reveal delay={450}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Passionate about AI, creativity, modern technologies, web design and
                interactive digital experiences. Building at the intersection of art,
                code and curiosity.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-neon"
                >
                  View Projects
                </button>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-neon btn-neon-blue"
                >
                  Contact Me
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
              <div className="absolute -inset-4 animate-pulse-glow rounded-full bg-gradient-to-br from-neon-purple to-neon-blue opacity-60 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-neon-purple/60 animate-float shadow-[0_0_40px_oklch(0.65_0.27_300/0.6)]">
                <img
                  src={profileImg}
                  alt="Shraddha Goswami"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              {/* corner accents */}
              <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-neon-pink" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-neon-blue" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 / About" title="The Story Behind The Code">
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass rounded-2xl p-8 neon-border">
              <p className="text-lg leading-relaxed text-foreground/90">
                I&apos;m a <span className="text-neon-purple font-semibold">second-year IMSc-IT student</span> at Silver Oak University,
                exploring the worlds of web design, PHP, prompt engineering and AI. I currently serve as the{" "}
                <span className="text-neon-blue font-semibold">Chair of the Outreach Core Committee</span> at IEEE SOU SB —
                where I get to blend creativity with community.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I&apos;m endlessly curious about emerging technologies, game development and modern UI design.
                Adaptable, eager and a little obsessed with making digital things feel alive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "2024+", v: "Years coding" },
                { k: "10+", v: "Workshops attended" },
                { k: "IEEE", v: "Outreach Chair" },
                { k: "∞", v: "Curiosity" },
              ].map((s) => (
                <div key={s.v} className="glass neon-border rounded-xl p-5 text-center">
                  <div className="font-display text-3xl font-black text-gradient">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="02 / Education" title="Academic Timeline">
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neon-purple via-neon-blue to-transparent md:left-1/2 md:block" />
          <div className="space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-neon-purple shadow-[0_0_20px_oklch(0.65_0.27_300)] md:left-1/2 md:block" />
                  <div className="md:w-1/2 md:px-8">
                    <div className="glass neon-border rounded-2xl p-6">
                      <div className="font-display text-xs uppercase tracking-widest text-neon-blue">{e.year}</div>
                      <h3 className="mt-2 text-2xl font-bold">{e.title}</h3>
                      <div className="text-sm text-neon-purple">{e.place}</div>
                      <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="03 / Skills" title="Tools & Talents">
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 150}>
              <div className="glass neon-border h-full rounded-2xl p-6">
                <h3 className="font-display text-sm uppercase tracking-widest text-neon-blue">{cat}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1.5 text-sm font-medium transition-all hover:border-neon-purple hover:bg-neon-purple/20 hover:shadow-[0_0_20px_oklch(0.65_0.27_300/0.5)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" eyebrow="04 / Leadership" title="Beyond The Classroom">
        <Reveal>
          <div className="glass neon-border rounded-2xl p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue text-3xl font-black text-background animate-pulse-glow">
                ⚡
              </div>
              <div className="flex-1">
                <div className="font-display text-xs uppercase tracking-widest text-neon-blue">2024 — Present</div>
                <h3 className="mt-1 text-2xl font-bold">Chair, Outreach Core Committee</h3>
                <div className="text-neon-purple">IEEE SOU SB · IEEE Gujarat Section</div>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-3"><span className="text-neon-blue">▸</span> Driving outreach initiatives across student communities.</li>
                  <li className="flex gap-3"><span className="text-neon-blue">▸</span> Coordinating and promoting events with the core team.</li>
                  <li className="flex gap-3"><span className="text-neon-blue">▸</span> Designing creative content for IEEE social media campaigns.</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="05 / Projects" title="Things I've Built & Building">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className={`group glass neon-border relative h-full overflow-hidden rounded-2xl p-7`}>
                <div className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${p.color} opacity-40 blur-3xl transition-all duration-500 group-hover:scale-150`} />
                <div className="relative">
                  <div className="font-display text-xs uppercase tracking-widest text-neon-blue">{p.tag}</div>
                  <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-neon-purple">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <button className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-neon-purple transition-all hover:gap-3 hover:text-neon-pink">
                    View Project <span>→</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="06 / Achievements" title="Certificates & Activities">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <Reveal key={c} delay={i * 80}>
              <div className="glass neon-border h-full rounded-2xl p-5 text-center animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-blue text-xl">
                  ✦
                </div>
                <div className="text-sm font-medium leading-snug">{c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CREATIVE WORK */}
      <Section id="creative" eyebrow="07 / Creative" title="Design Showcase">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Earth Day Story", sub: "IEEE Instagram Design", grad: "from-emerald-500/30 to-neon-blue/30" },
            { title: "World No Tobacco Day", sub: "Upcoming Awareness Design", grad: "from-neon-pink/30 to-neon-purple/30" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 150}>
              <div className={`glass neon-border group relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${c.grad}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <div className="font-display text-xs uppercase tracking-widest text-neon-blue">{c.sub}</div>
                  <h3 className="mt-1 text-2xl font-bold">{c.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INTERESTS */}
      <Section id="interests" eyebrow="08 / Exploration" title="What Excites Me">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="glass neon-border h-full rounded-2xl p-6">
                <div className="text-3xl text-gradient">{it.icon}</div>
                <h3 className="mt-3 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="09 / Contact" title="Let's Build Something">
        <Reveal>
          <div className="glass neon-border rounded-3xl p-10 text-center md:p-14">
            <h3 className="text-3xl font-bold md:text-5xl">
              Got an idea? <span className="text-gradient">Let&apos;s talk.</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to collaborations, learning opportunities, and creative tech adventures.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:shraddha.goswami@example.com" className="btn-neon">
                Email Me
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-neon btn-neon-blue">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="relative border-t border-border/50 py-10 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Designed & developed with <span className="text-neon-pink">creativity</span> and{" "}
          <span className="text-neon-blue">curiosity</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">© {new Date().getFullYear()} Shraddha Goswami</p>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <div className="font-display text-xs uppercase tracking-[0.4em] text-neon-blue">
              {eyebrow}
            </div>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
