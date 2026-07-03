import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

export const produtosGuard: CanActivateFn = () => {
  const i18nService = inject(I18nService);
  const router = inject(Router);

  if (i18nService.language() === 'en') {
    return router.parseUrl('/');
  }

  return true;
};
