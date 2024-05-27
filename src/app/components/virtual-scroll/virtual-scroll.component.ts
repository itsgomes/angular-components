import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import Utils from '../../utils/utils';

@Component({
  selector: 'app-virtual-scroll',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './virtual-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollComponent {
  protected array: WritableSignal<string[]> = signal(Utils.getArray(1000));
}