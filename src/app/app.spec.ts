import { TestBed } from '@angular/core/testing';

import { LANGUAGE_STORAGE_KEY } from './i18n/portfolio-content';
import { App } from './app';

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '0px';
  readonly thresholds = [0];

  constructor(private readonly callback: IntersectionObserverCallback) {}

  disconnect() {}

  observe(target: Element) {
    this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {}
}

describe('App', () => {
  beforeEach(async () => {
    globalThis.IntersectionObserver = MockIntersectionObserver;
    localStorage.removeItem(LANGUAGE_STORAGE_KEY);
    window.history.replaceState({}, '', '/');
    document.documentElement.lang = 'pt-BR';
    mockBrowserLanguage('pt-BR');

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render the content in Portuguese for a Brazilian browser', async () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Versatilidade');
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('pt-BR');
  });

  it('should automatically switch the content to English for an English browser', async () => {
    mockBrowserLanguage('en-US');

    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Technical Versatility');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
  });

  it('should prioritize the lang query string over the browser language', async () => {
    window.history.replaceState({}, '', '/?lang=en');

    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Technical Versatility');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
  });
});

function mockBrowserLanguage(language: string) {
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: language,
  });

  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    value: [language],
  });
}
