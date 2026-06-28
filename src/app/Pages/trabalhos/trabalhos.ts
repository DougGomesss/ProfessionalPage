import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { Project } from '../../../interface/project';
import { BackButtonComponent } from '../../components/back-button/back-button';
import { ProjectModal } from '../../components/project-modal/project-modal';
import { ScrollRevealDirective } from '../../components/scroll-reveal';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, ScrollRevealDirective, ProjectModal],
  templateUrl: './trabalhos.html',
  styleUrls: ['./trabalhos.scss'],
})
export class TrabalhosComponent {
  private readonly _i18nService = inject(I18nService);
  readonly translation = this._i18nService.translation;
  readonly projects = computed(() => this.translation().projects.items);

  readonly selectedProjectId = signal<number | null>(null);
  readonly selectedProject = computed(() => {
    const id = this.selectedProjectId();
    if (id === null) return null;
    return this.projects().find((p) => p.id === id) ?? null;
  });

  readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getImageUrl(url?: string): string {
    if (!url) return 'image.png';
    const hasKnownExtension = /\.(jpg|jpeg|png|svg|webp)$/i.test(url);
    return hasKnownExtension ? url : `${url}.gif`;
  }

  getProjectAriaLabel(title: string): string {
    return `${this.translation().projects.openProjectPrefix} ${title}`;
  }

  openModal(project: Project) {
    this.selectedProjectId.set(project.id);
    if (this.isBrowser) document.body.style.overflow = 'hidden';
  }

  onCardKeydown(event: KeyboardEvent, project: Project) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openModal(project);
    }
  }

  closeModal() {
    this.selectedProjectId.set(null);
    if (this.isBrowser) document.body.style.overflow = '';
  }
}
