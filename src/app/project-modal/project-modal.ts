import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

import { I18nService } from '../i18n/i18n.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.scss'],
})
export class ProjectModal implements AfterViewInit {
  private readonly _i18nService = inject(I18nService);

  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();
  @ViewChild('videoPlayer') videoPlayer?: ElementRef<HTMLVideoElement>;
  @ViewChild('closeButton') closeButton?: ElementRef<HTMLButtonElement>;

  readonly translation = this._i18nService.translation;

  ngAfterViewInit() {
    this.closeButton?.nativeElement.focus();

    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.playbackRate = 3.0;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeModal();
  }

  getImageUrl(url?: string): string {
    if (!url) {
      return '';
    }

    const hasKnownExtension = /\.(jpg|jpeg|png|svg|webp)$/i.test(url);

    return hasKnownExtension ? url : `${url}.gif`;
  }

  getImageAlt(imageIndex: number): string {
    return `${this.project.title} - ${this.translation().modal.imageAltLabel} ${imageIndex}`;
  }

  closeModal() {
    this.close.emit();
  }
}
