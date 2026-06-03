import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { I18nService } from './i18n/i18n.service';
import { Project } from './models/project';
import { ProjectModal } from './project-modal/project-modal';
import { ScrollRevealDirective } from './scroll-reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ProjectModal],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  private readonly _i18nService = inject(I18nService);
  private readonly _titleService = inject(Title);

  readonly translation = this._i18nService.translation;
  readonly projects = computed(() => this.translation().projects.items);

  readonly selectedProjectId = signal<number | null>(null);
  readonly selectedProject = computed(() => {
    const projectId = this.selectedProjectId();

    if (projectId === null) {
      return null;
    }

    return this.projects().find((project) => project.id === projectId) ?? null;
  });

  readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    effect(() => {
      this._titleService.setTitle(this.translation().meta.title);
    });
  }

  getImageUrl(url?: string): string {
    if (!url) {
      return 'image.png';
    }

    const hasKnownExtension = /\.(jpg|jpeg|png|svg|webp)$/i.test(url);

    return hasKnownExtension ? url : `${url}.gif`;
  }

  getProjectAriaLabel(projectTitle: string): string {
    return `${this.translation().projects.openProjectPrefix} ${projectTitle}`;
  }

  openModal(project: Project) {
    this.selectedProjectId.set(project.id);

    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  onProjectCardKeydown(event: KeyboardEvent, project: Project) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openModal(project);
    }
  }

  closeModal() {
    this.selectedProjectId.set(null);

    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
