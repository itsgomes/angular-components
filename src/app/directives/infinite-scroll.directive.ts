import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { Directive, ElementRef, output, OutputEmitterRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[infiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {
  public onEnd: OutputEmitterRef<void> = output();

  public constructor(private elementRef: ElementRef) {
    const scroll$ = fromEvent(this.elementRef.nativeElement, 'scroll');

    scroll$.pipe(
      debounceTime(250), 
      distinctUntilChanged(), 
      takeUntilDestroyed()
    ).subscribe((scroll: any) => {
      if (Math.floor(scroll.target.scrollTop + scroll.target.offsetHeight) >= scroll.target.scrollHeight - 10)
        this.onEnd.emit();
    });
  }
}