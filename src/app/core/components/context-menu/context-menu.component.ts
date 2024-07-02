import { ChangeDetectionStrategy, Component, ElementRef, HostListener, InputSignal, WritableSignal, input, signal } from "@angular/core";
import { AvailableMenuCommand, ContextMenuItem, ContextMenuPosition } from "./context-menu.model";

@Component({
  selector: 'context-menu',
  standalone: true,
  imports: [],
  templateUrl: 'context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this._elementRef.nativeElement.contains(event.target))
      this._show.set(false);
  }

  public items: InputSignal<ContextMenuItem[]> = input.required<ContextMenuItem[]>();
  
  protected position: WritableSignal<ContextMenuPosition | null> = signal(null);
  protected get show(): boolean {
    return this._show();
  }

  private _show: WritableSignal<boolean> = signal(false);

  public constructor(private _elementRef: ElementRef) {}

  public showContextMenu(position: ContextMenuPosition): void {
    this.position.set(position);

    if (!this._show())
      this._show.set(true);
  }

  protected handleContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }

  protected executeFn(command: AvailableMenuCommand): void {
    switch (command) {
      case AvailableMenuCommand.Close:
        this.close();
        break;
    }
  }

  private close = (): void => {
    this._show.set(false);
  }
}