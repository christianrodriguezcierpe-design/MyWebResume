import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

// Reports the resolved language and exposes the toggle, so the tests can assert
// on initial resolution and on what a change writes back to storage.
const Probe = () => {
  const { lang, toggle } = useLanguage();
  return (
    <button type="button" onClick={toggle}>
      {lang}
    </button>
  );
};

const renderProbe = () => render(<LanguageProvider><Probe /></LanguageProvider>);
const shown = () => screen.getByRole("button").textContent;

const setBrowserLanguages = (languages: string[]) => {
  vi.spyOn(window.navigator, "languages", "get").mockReturnValue(languages);
  vi.spyOn(window.navigator, "language", "get").mockReturnValue(languages[0] ?? "en");
};

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.lang = "";
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("LanguageProvider", () => {
  it("prefers a previously saved choice over the browser preference", () => {
    window.localStorage.setItem("lang", "es");
    setBrowserLanguages(["en-CA", "en"]);

    renderProbe();

    expect(shown()).toBe("es");
  });

  it("falls back to the browser preference when nothing is saved", () => {
    setBrowserLanguages(["es-CL", "es"]);

    renderProbe();

    expect(shown()).toBe("es");
  });

  it("skips unsupported browser languages and lands on English", () => {
    setBrowserLanguages(["fr-CA", "de"]);

    renderProbe();

    expect(shown()).toBe("en");
  });

  it("ignores a corrupt stored value", () => {
    window.localStorage.setItem("lang", "klingon");
    setBrowserLanguages(["fr-CA"]);

    renderProbe();

    expect(shown()).toBe("en");
  });

  it("persists a change and syncs the document language", () => {
    setBrowserLanguages(["en"]);

    renderProbe();
    expect(document.documentElement.lang).toBe("en");

    act(() => screen.getByRole("button").click());

    expect(shown()).toBe("es");
    expect(window.localStorage.getItem("lang")).toBe("es");
    expect(document.documentElement.lang).toBe("es");
  });

  it("still renders when storage is unavailable", () => {
    // Private-browsing modes throw outright on localStorage access.
    const boom = () => {
      throw new Error("storage disabled");
    };
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(boom);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(boom);
    setBrowserLanguages(["es"]);

    expect(() => renderProbe()).not.toThrow();
    expect(shown()).toBe("es");
  });
});
