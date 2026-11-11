import { Directive, ElementRef, inject, input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()',
  },
})
export class Tooltip implements OnDestroy {
  private element = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private tooltip: HTMLElement | null = null;

  tooltipText = input('tooltip', { alias: 'appTooltip' });

  show(): void {
    if (!this.tooltipText()) return;

    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipText()));
    this.renderer.addClass(this.tooltip, 'tooltip');
    this.renderer.appendChild(document.body, this.tooltip);

    const rect = this.element.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltip, 'top', `${rect.top - 36}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${rect.left + rect.width / 2}px`);
  }

  hide(): void {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }

  ngOnDestroy(): void {
    this.hide()
  }

}
