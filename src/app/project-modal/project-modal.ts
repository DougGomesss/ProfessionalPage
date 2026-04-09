import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../app';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.scss']
})
export class ProjectModal {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  getImageUrl(url?: string): string {
    if (!url) return '';
    const isJpgOrPng = url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.png');
    return isJpgOrPng ? url : `${url}.gif`;
  }

  closeModal() {
    this.close.emit();
  }
}
