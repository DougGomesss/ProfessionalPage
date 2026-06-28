export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'] as const;
export const DEFAULT_LANGUAGE: LanguageCode = 'pt-BR';
export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number];

export type { PortfolioContent } from '../../interface/portfolio-content';

export function isSupportedLanguage(value: string | null | undefined): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}
