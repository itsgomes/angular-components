import { CommonModule, DOCUMENT } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, Signal, viewChild, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ICONS_LIST, IconsConfig } from "./responsive-toolbar.model";

@Component({
  selector: 'app-responsive-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: 'responsive-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveToolbarComponent implements OnInit, AfterViewInit, OnDestroy {
  private _observer!: IntersectionObserver;
  private _iconsMap: Map<string, IconsConfig> = new Map();

  protected icons: Signal<ReadonlyArray<ElementRef>> = viewChildren<ElementRef>('icon');
  protected iconsList: ReadonlyArray<string> = ICONS_LIST;
  protected toolbar: Signal<ElementRef> = viewChild.required<ElementRef>('toolbar');

  public constructor(
    private _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit(): void {
    this._observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (let entry of entries)
          this._iconsMap.set(entry.target.innerHTML, { element: entry.target, isVisible: entry.isIntersecting });

        this._cdr.detectChanges();
      }, 
      { 
        root: this._document, 
        threshold: 1 
      }
    );
  }

  public ngAfterViewInit(): void {
    for (let icon of this.icons().values())
      this._observer.observe(icon.nativeElement);
  }

  public ngOnDestroy(): void {
    for (let icon of this.icons().values())
      this._observer.unobserve(icon.nativeElement);

    this._iconsMap.clear();
    this._observer.disconnect();
  }

  protected get notVisibleIcons(): Element[] {
    return Array
      .from(this._iconsMap.values())
      .filter(i => !i.isVisible)
      .map(i => i.element);
  }
}