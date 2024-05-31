import { fromEvent, map, merge, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-online-checker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-checker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineCheckerComponent {
  protected online: Signal<boolean> = toSignal(
    merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ), { requireSync: true });
}