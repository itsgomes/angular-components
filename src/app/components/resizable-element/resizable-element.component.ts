import { distinctUntilChanged } from 'rxjs';
import { AfterViewInit, Component, DestroyRef, ElementRef, OnDestroy, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from '../../shared/components/template/template.component';

@Component({
  selector: 'app-resizable-element',
  standalone: true,
  imports: [ReactiveFormsModule, TemplateComponent],
  templateUrl: './resizable-element.component.html'
})
export class ResizableElementComponent implements AfterViewInit, OnDestroy {
  protected container: Signal<ElementRef> = viewChild.required('container', { read: ElementRef });
  protected sliderValue: FormControl<number> = new FormControl(18, { nonNullable: true });
  protected fontSize: WritableSignal<number> = signal(18);
  protected message: WritableSignal<string> = signal('Slide the range to watch the messages.');
  
  protected resizeObserver!: ResizeObserver;

  public constructor(private destroyRef: DestroyRef) {
    this.sliderValue.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => this.fontSize.set(value)
    );
  }

  public ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentBoxSize[0].inlineSize;
        this.checkWidthMessage(width);
      }
    });
    
    this.resizeObserver.observe(this.container().nativeElement);
  }

  public ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

  private checkWidthMessage(width: number): void {
    if (width > 140)
      this.message.set('Width is greater than 140 pixels.');
    else if (width < 60)
      this.message.set('Width is smaller than 60 pixels.');
    else
      this.message.set('Width is between 60 to 140 pixels.');
  }
}