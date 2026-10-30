/** Preserve navigation context when following a statically generated locale link. */
export function getLanguageHref(currentHref, targetPath, state) {
  const current = new URL(currentHref);
  const target = new URL(targetPath, current);
  target.search = current.search;
  target.hash = current.hash;

  // Only the application homepage has client-side views. Other pages must keep
  // their own route and query, regardless of previously saved application state.
  const isAppHome = /^\/(?:en|es|ja|fr|de|pt|ko|it)?\/?$/.test(current.pathname);
  if (isAppHome && state?.activeView) {
    target.searchParams.set("view", state.activeView);
    target.searchParams.delete("quest");
    if (state.activeView === "sandbox" && state.activeLessonId) {
      target.searchParams.set("quest", String(state.activeLessonId));
    }
    // A custom quest parameter takes precedence over `view` during app startup.
    if (state.activeView !== "sandbox" || state.activeLessonId !== 9999) {
      target.searchParams.delete("custom");
    }
  }

  return target.pathname + target.search + target.hash;
}
