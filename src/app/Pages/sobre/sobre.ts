import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { BackButtonComponent } from '../../components/back-button/back-button';
import { ScrollRevealDirective } from '../../components/scroll-reveal';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [BackButtonComponent, ScrollRevealDirective],
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.scss'],
})
export class SobreComponent {
  private readonly _i18nService = inject(I18nService);
  readonly translation = this._i18nService.translation;
}
