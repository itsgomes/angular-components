import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";
import { InfiniteScrollDirective } from "../../directives/infinite-scroll.directive";
import Utils from "../../shared/utils";

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [CommonModule, InfiniteScrollDirective],
  templateUrl: './infinite-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollComponent {
  protected array: WritableSignal<string[]> = signal(Utils.getArray());

  protected onEnd(): void {
    this.array.update((oldValue: string[]) => [...oldValue, ...Utils.getArray()]);
  }
}