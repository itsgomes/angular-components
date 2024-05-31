import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { RealtimeService } from "../services/realtime.service";

@Directive({
  selector: '[colorize]',
  standalone: true
})
export class ColorizeDirective {
  public constructor(private element: ElementRef, private renderer: Renderer2, private realtimeService: RealtimeService)  {}

  public ngAfterViewInit(): void {
    this.renderer.addClass(this.element.nativeElement, this.realtimeService.getTextColorByValue(this.element.nativeElement.textContent));
  }
}