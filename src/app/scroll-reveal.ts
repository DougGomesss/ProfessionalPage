import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.renderer.addClass(this.el.nativeElement, 'reveal-item');
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'is-visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.isBrowser && this.observer) {
      this.observer.disconnect();
    }
  }
}
