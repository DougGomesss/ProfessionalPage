import { Project } from '../models/project';

export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'] as const;
export const DEFAULT_LANGUAGE: LanguageCode = 'pt-BR';
export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number];

export interface ExperienceItem {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  variant?: 'default' | 'github' | 'instagram' | 'whatsapp';
}

export interface SkillGroup {
  title: string;
  value: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
  };
  languageSwitcher: {
    label: string;
    languages: Record<LanguageCode, string>;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    secondaryAction: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    openProjectPrefix: string;
    items: Project[];
  };
  presentation: {
    title: string;
    highlight: string;
    impactTitle: string;
    impactIntro: string;
    impactItems: ExperienceItem[];
    educationTitle: string;
    educationCourse: string;
    educationInstitution: string;
    languageBadge: string;
    summaryPrefix: string;
    summaryHighlight: string;
    summarySuffix: string;
    skills: SkillGroup[];
    socialLinks: SocialLink[];
    cta: string;
  };
  modal: {
    closeAriaLabel: string;
    imageAltLabel: string;
    browserNoVideo: string;
  };
}

export function isSupportedLanguage(value: string | null | undefined): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}
