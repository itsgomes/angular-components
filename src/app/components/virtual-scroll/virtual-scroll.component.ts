import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollingModule } from '@angular/cdk/scrolling';
import Utils from "../../shared/utils";

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