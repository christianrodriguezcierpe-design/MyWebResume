import { useLanguage } from "@/contexts/LanguageContext";

// A one-column, print-only resume. Kept as its own render tree rather than
// reformatting the interactive sections for print: the web layout (cards,
// grids, an alternating timeline) has no clean paper equivalent, and fighting
// that with @media print overrides on every section's classes would be far
// more fragile than a small dedicated layout built directly from `t`.
//
// It stays out of the accessibility tree and the normal viewport (hidden),
// and only appears when printing (print:block) — so "Download PDF" is really
// just window.print() targeting this component instead of the page.
//
// Plain black-on-white classes are used throughout, deliberately not the
// site's --foreground/--background tokens: those flip with the dark-mode
// toggle, and printing a dark theme wastes ink and can render oddly in some
// PDF viewers.
const PrintResume = () => {
  const { t } = useLanguage();
  const { hero, competencies, skills, experience, tools, education, availability, contact } = t;

  return (
    <div className="hidden print:block bg-white text-black">
      <div className="mx-auto max-w-[720px] px-2 py-4 text-[10.5px] leading-snug">
        <header className="mb-3 border-b border-black/30 pb-2 break-inside-avoid">
          <h1 className="text-2xl font-bold">Christian Rodriguez</h1>
          <p className="text-sm font-semibold">{hero.role}</p>
          <p className="mt-1 text-[9.5px] text-black/70">
            {hero.location} · {contact.email} · {contact.github.replace("https://", "")}
          </p>
          <p className="mt-1.5 text-black/80">{hero.summary}</p>
        </header>

        <section className="mb-2.5 break-inside-avoid">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {competencies.heading}
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 list-disc pl-4">
            {competencies.items.map((c) => (
              <li key={c.title}>
                <span className="font-semibold">{c.title}:</span> {c.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-2.5 break-inside-avoid">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {skills.heading}
          </h2>
          <p>{skills.items.join(" · ")}</p>
        </section>

        <section className="mb-2.5">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {experience.heading}
          </h2>
          {experience.roles.map((role, i) => (
            <div key={`${role.company}-${i}`} className="mb-1.5 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-2 font-semibold">
                <span>
                  {role.title} — {role.company}
                </span>
                <span className="shrink-0 text-black/70">{role.period}</span>
              </div>
              <div className="text-black/60">{role.location}</div>
              <ul className="mt-0.5 list-disc pl-4">
                {role.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-2.5 break-inside-avoid">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {tools.heading}
          </h2>
          {tools.categories.map((cat) => (
            <p key={cat.category}>
              <span className="font-semibold">{cat.category}:</span> {cat.tools.join(", ")}
            </p>
          ))}
        </section>

        <section className="mb-2.5 break-inside-avoid">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {education.heading}
          </h2>
          {education.items.map((edu) => (
            <div key={edu.title} className="flex items-baseline justify-between gap-2">
              <span>
                <span className="font-semibold">{edu.title}</span> — {edu.subtitle},{" "}
                {edu.institution}
              </span>
              <span className="shrink-0 text-black/70">{edu.year}</span>
            </div>
          ))}
          <p className="mt-1">
            <span className="font-semibold">{education.languagesHeading}:</span>{" "}
            {education.languages
              .map((l) => `${l.language} (${l.level.replace(/\n/g, ", ")})`)
              .join(" · ")}
          </p>
        </section>

        <section className="break-inside-avoid">
          <h2 className="mb-1 border-b border-black/20 pb-0.5 text-[10.5px] font-bold uppercase tracking-wide">
            {availability.heading}
          </h2>
          <p>
            {availability.items
              .map((item) => `${item.label}: ${item.value.replace(/\n/g, ", ")}`)
              .join(" · ")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrintResume;
