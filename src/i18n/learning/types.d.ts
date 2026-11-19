/** Text-only translations; executable examples and quiz answer indices stay shared. */
export type ChapterTranslation = [
  title: string, summary: string, concepts: string[], explain: string,
  pitfall: string, question: string, options: string[], rationale: string,
];
export type LabTranslation = [
  title: string, level: string, goal: string, steps: string[], evidence: string, recovery: string,
];
