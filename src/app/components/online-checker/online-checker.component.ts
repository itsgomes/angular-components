import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, fromEvent, map, merge, of } from "rxjs";

@Component({
  selector: 'app-online-checker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-checker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineCheckerComponent {
  protected online$: Observable<boolean> = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(map(() => true)),
    fromEvent(window, 'offline').pipe(map(() => false))
  );
}