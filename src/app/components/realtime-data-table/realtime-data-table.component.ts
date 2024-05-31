import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnDestroy, Signal, WritableSignal, inject, signal } from "@angular/core";
import { ColorizeDirective } from "../../directives/colorize.directive";
import { RealtimeData } from "../../models/realtime.model";
import { RealtimeService } from "../../services/realtime.service";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-realtime-data-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ColorizeDirective],
  templateUrl: './realtime-data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealtimeDataTableComponent implements OnDestroy {
  protected readonly realtimeService!: RealtimeService;
  protected readonly dataset: Signal<RealtimeData[]> = signal([]);
  protected colorize: WritableSignal<boolean> = signal(true);

  public constructor() {
    this.realtimeService = inject(RealtimeService);
    this.dataset = this.realtimeService.data;
  }

  public ngOnDestroy(): void {
    this.realtimeService.stopStream();
    this.realtimeService.clearData();
  }

  protected toggleColorize(): void {
    this.colorize.set(!this.colorize());
  }

  protected startStreamData(): void {
    this.realtimeService.startStream();
  }

  protected stopStreamData(): void {
    this.realtimeService.stopStream();
  }

  protected clearData(): void {
    this.realtimeService.clearData();
  }
}