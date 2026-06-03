import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID, REQUEST, computed, signal } from '@angular/core';

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LanguageCode,
  isSupportedLanguage,
} from './portfolio-content';
import { TRANSLATIONS } from './translations';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly _language = signal<LanguageCode>(DEFAULT_LANGUAGE);
  private readonly _isBrowser: boolean;

  readonly language = this._language.asReadonly();
  readonly translation = computed(() => TRANSLATIONS[this._language()]);

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
    @Optional() @Inject(REQUEST) private readonly request: Request | null,
  ) {
    this._isBrowser = isPlatformBrowser(platformId);

    const initialLanguage = this.resolveInitialLanguage();

    this.applyLanguage(initialLanguage, this._isBrowser);
  }

  setLanguage(language: LanguageCode) {
    if (language === this._language()) {
      return;
    }

    this.applyLanguage(language, true);
  }

  private applyLanguage(language: LanguageCode, persist: boolean) {
    this._language.set(language);
    this.document.documentElement.lang = language;

    if (!persist || !this._isBrowser) {
      return;
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  private resolveInitialLanguage(): LanguageCode {
    if (!this._isBrowser) {
      return this.resolveRequestLanguage() ?? DEFAULT_LANGUAGE;
    }

    const queryLanguage = this.resolveQueryLanguage();

    if (queryLanguage) {
      return queryLanguage;
    }

    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguage = this.resolveBrowserLanguage();

    if (browserLanguage) {
      return browserLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  private resolveRequestLanguage(): LanguageCode | null {
    const requestLanguage = this.resolveRequestQueryLanguage();

    if (requestLanguage) {
      return requestLanguage;
    }

    const acceptLanguage = this.request?.headers.get('accept-language');

    return this.resolveFromLanguageTags(acceptLanguage?.split(',') ?? []);
  }

  private resolveRequestQueryLanguage(): LanguageCode | null {
    const requestUrl = this.request?.url;

    if (!requestUrl) {
      return null;
    }

    const url = new URL(requestUrl, 'http://localhost');
    const language = url.searchParams.get('lang');

    return this.resolveFromLanguageTags(language ? [language] : []);
  }

  private resolveBrowserLanguage(): LanguageCode | null {
    if (typeof navigator === 'undefined') {
      return null;
    }

    const browserLanguages =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];

    return this.resolveFromLanguageTags(browserLanguages);
  }

  private resolveQueryLanguage(): LanguageCode | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const language = new URLSearchParams(window.location.search).get('lang');

    return this.resolveFromLanguageTags(language ? [language] : []);
  }

  private resolveFromLanguageTags(languageTags: ReadonlyArray<string>): LanguageCode | null {
    for (const languageTag of languageTags) {
      const normalizedLanguage = languageTag
        .split(';')[0]
        ?.trim()
        .toLowerCase();

      if (!normalizedLanguage) {
        continue;
      }

      if (normalizedLanguage.startsWith('pt')) {
        return 'pt-BR';
      }

      if (normalizedLanguage.startsWith('en')) {
        return 'en';
      }
    }

    return null;
  }
}
