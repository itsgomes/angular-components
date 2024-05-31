import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { RealtimeService } from "../services/realtime.service";

@Directive({
  selector: '[colorize]',
  standalone: true
})
export class ColorizeDirective {
  public constructor(
    private _element: ElementRef, 
    private _renderer: Renderer2, 
    private _realtimeService: RealtimeService
  ) {}

  public ngAfterViewInit(): void {
    this._renderer.addClass(this._element.nativeElement, this._realtimeService.getTextColorByValue(this._element.nativeElement.textContent));
  }
}