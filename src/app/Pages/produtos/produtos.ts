import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
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
  private readonly _http = inject(HttpClient);

  readonly translation = this._i18nService.translation;

  readonly produtos = toSignal(
    this._http.get<Produto[]>('produtos.json'),
    { initialValue: [] as Produto[] }
  );
}
