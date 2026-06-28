import { Project } from './project';

export interface PortfolioContent {
  meta: {
    title: string;
  };
  languageSwitcher: {
    label: string;
    languages: Record<'pt-BR' | 'en', string>;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    secondaryAction: string;
  };
  nav: {
    sobre: string;
    trabalhos: string;
    produtos: string;
  };
  sobre: {
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    openProjectPrefix: string;
    items: Project[];
  };
  produtos: {
    comingSoon: string;
    description: string;
  };
  modal: {
    closeAriaLabel: string;
    imageAltLabel: string;
    browserNoVideo: string;
  };
}
