import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal';
import { ProjectModal } from './project-modal/project-modal';

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  imageUrl?: string;
  imageUrl2?: string;
  detailedSpecs: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ProjectModal],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  isBrowser: boolean;

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Sistema IoT: Balança de Precisão com Consulta de IMC',
      shortDescription:
        'Desenvolvimento de uma balança inteligente com cálculo de IMC em tempo real e telemetria.',
      technologies: ['C++', 'Arduino', 'HX711 (ADC)', 'ESP8266/ESP32', 'Sensores'],
      imageUrl: 'IOT1.png',
      imageUrl2: 'image.png',
      detailedSpecs: `Este projeto consiste em uma balança inteligente que realiza a consulta de IMC (Índice de Massa Corporal) de forma automatizada. Com base no peso detectado e na altura especificada, o sistema processa o cálculo e retorna o resultado em uma tela digital.

Componentes e Hardware:
• Microcontrolador: Arduino / ESP
• Placa de fenolite customizada
• Sensor de temperatura (utilizado para modo standby)
• Célula de carga (Balança)
• Conversor HX711 (ADC - Analogic Digital Converter)
• Regulador de tensão 7805
• Trafo 9V 250mA

Eficiência Energética e Consumo:
O projeto foi otimizado para eficiência real, considerando que o ESP consome cerca de 150mA com o trafo utilizado. A análise do consumo real de corrente foi fundamental para garantir a estabilidade do regulador de tensão e a precisão das leituras do ADC.`,
    },
  ]);

  selectedProject = signal<Project | null>(null);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getImageUrl(url?: string): string {
    if (!url) return 'image.png';
    const isJpgOrPng = url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.png');
    return isJpgOrPng ? url : `${url}.gif`;
  }

  openModal(project: Project) {
    this.selectedProject.set(project);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.selectedProject.set(null);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
