import { animate, group, query, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, WritableSignal, signal } from "@angular/core";

@Component({
  selector: 'app-gallery-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-animations.component.html',
  animations: [
    trigger('slide', [
      transition('* => *', [
        group([
          query(':enter', style({ transform: 'translateX({{ enterStart }}) scale(0.25)' }), { optional: true }),
          query(':leave', [animate('750ms ease-in-out', style({ transform: 'translateX({{ leaveEnd }}) scale(0.25)' }))], { optional: true }),
          query(':enter', [animate('750ms ease-in-out', style({ transform: 'translateX(0) scale(1)' }))], { optional: true })
        ])
      ],
      { 
        params: {
          leaveEnd: '100%',
          enterStart: '-100%'
        }
      })
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryAnimationsComponent implements OnDestroy {
  protected currentImageIndex: WritableSignal<number> = signal(1);
  protected animationDirection: WritableSignal<'left' | 'right'> = signal('right');

  protected readonly minImageIndex: number = 1;
  protected readonly maxImageIndex: number = 6;

  public constructor(private cdr: ChangeDetectorRef) {}

  public ngOnDestroy(): void {
    this.cdr.detectChanges();
  }

  protected next(): void {
    if (this.currentImageIndex() < this.maxImageIndex) {
      this.animationDirection.set('right');
      this.currentImageIndex.set(this.currentImageIndex() + 1);
    }
  }

  protected previous(): void {
    if (this.currentImageIndex() > this.minImageIndex) {
      this.animationDirection.set('left');
      this.currentImageIndex.set(this.currentImageIndex() - 1);
    }
  }
}