import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { I18nService } from '../../i18n/i18n.service';
import { BackButtonComponent } from '../../components/back-button/back-button';
import { ScrollRevealDirective } from '../../components/scroll-reveal';

import { Produto } from '../../../interface/produto';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [BackButtonComponent, ScrollRevealDirective, CurrencyPipe],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.scss'],
})
export class ProdutosComponent {
  private readonly _i18nService = inject(I18nService);
  readonly translation = this._i18nService.translation;

  readonly produtos: Produto[] = [];
}
