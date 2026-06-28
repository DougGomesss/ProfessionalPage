import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  private readonly _i18nService = inject(I18nService);
  private readonly _titleService = inject(Title);
  readonly translation = this._i18nService.translation;

  constructor() {
    effect(() => {
      this._titleService.setTitle(this.translation().meta.title);
    });
  }
}
