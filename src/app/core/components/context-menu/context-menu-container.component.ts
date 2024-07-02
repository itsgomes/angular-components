import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Signal, viewChild } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { DummyProduct, PRODUCT_API_FIELDS } from "../../models/dummy-api.model";
import { DummyApiService } from "../../services/dummy-api.service";
import { ContextMenuComponent } from "./context-menu.component";
import { CONTEXT_MENU_ITEMS, ContextMenuItem, ContextMenuPosition } from "./context-menu.model";

@Component({
  selector: 'context-menu-container',
  standalone: true,
  imports: [
    CommonModule,
    ContextMenuComponent
  ],
  templateUrl: 'context-menu-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuContainerComponent {
  protected contextMenu: Signal<ContextMenuComponent> = viewChild.required('contextMenu', { read: ContextMenuComponent });
  protected contextMenuItems: ContextMenuItem[] = CONTEXT_MENU_ITEMS;
  protected products$: Observable<DummyProduct[]> = of([]);
  protected get fields(): typeof PRODUCT_API_FIELDS { 
    return PRODUCT_API_FIELDS;
  };

  public constructor(private _dummyApiService: DummyApiService) {
    this.products$ = this._dummyApiService.getProducts()
      .pipe(
        map((response: any) => response['products'])
      );
  }

  protected handleContextMenu(event: MouseEvent): void {
    event.preventDefault();
  
    const position: ContextMenuPosition = {
      top: event.clientY,
      left: event.clientX
    };

    this.contextMenu().showContextMenu(position);
  }

  protected getFieldValue(product: DummyProduct, field: string): string | number {
    return product[field as keyof DummyProduct];
  }
}