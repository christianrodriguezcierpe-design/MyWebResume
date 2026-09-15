import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import PrintResume from "@/components/PrintResume";
import { content } from "@/lib/content";

// PrintResume builds its own JSX straight from `t` rather than reusing the
// section components (see the comment in PrintResume.tsx), so it can silently
// drift out of step with content.ts in a way the other sections can't. This
// just confirms every top-level block actually reaches the rendered output,
// in both languages.
describe("PrintResume", () => {
  it.each(["en", "es"] as const)("renders every section's content in %s", (lang) => {
    window.localStorage.setItem("lang", lang);
    const { container } = render(
      <LanguageProvider>
        <PrintResume />
      </LanguageProvider>,
    );
    const text = container.textContent ?? "";
    const t = content[lang];

    expect(text).toContain(t.hero.role);
    expect(text).toContain(t.contact.email);
    expect(text).toContain(t.competencies.heading);
    expect(text).toContain(t.competencies.items[0].title);
    expect(text).toContain(t.skills.items[0]);
    expect(text).toContain(t.experience.roles[0].title);
    expect(text).toContain(t.experience.roles[0].highlights[0]);
    expect(text).toContain(t.tools.categories[0].category);
    expect(text).toContain(t.education.items[0].title);
    expect(text).toContain(t.availability.items[0].label);

    window.localStorage.clear();
  });
});
