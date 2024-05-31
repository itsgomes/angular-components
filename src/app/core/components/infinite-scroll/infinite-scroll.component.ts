import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import Utils from '../../../shared/utils/utils';
import { InfiniteScrollDirective } from '../../directives/infinite-scroll.directive';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [
    CommonModule, 
    InfiniteScrollDirective
  ],
  templateUrl: './infinite-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollComponent {
  protected array: WritableSignal<string[]> = signal(Utils.getItemArray());

  protected onEnd(): void {
    this.array.update((oldValue: string[]) => [...oldValue, ...Utils.getItemArray()]);
  }
}