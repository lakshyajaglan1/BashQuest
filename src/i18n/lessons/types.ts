import type { SupportedLanguage } from "../languages";

export interface LocalizedCommandHelp {
  cmd: string;
  desc: string;
}

export interface LocalizedObjective {
  id: string;
  text: string;
}

export interface LessonTranslation {
  title: string;
  description: string;
  instructions: string;
  badge?: string;
  commandHelp?: LocalizedCommandHelp[];
  objectives?: LocalizedObjective[];
  hints?: string[];
}

export interface ModuleTranslation {
  id: string;
  title: string;
}
