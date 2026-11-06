import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Node 25+ ships its own Web Storage globals. Without --localstorage-file,
// `localStorage` is undefined and hides jsdom's. Put jsdom's storage back.
const dom = (globalThis as { jsdom?: { window: Window } }).jsdom;
for (const key of ["localStorage", "sessionStorage"] as const) {
  if (dom && typeof window[key]?.clear !== "function") {
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value: dom.window[key] });
  }
}
