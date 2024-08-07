import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnDestroy, Signal, WritableSignal, computed, signal } from "@angular/core";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ColorizeDirective } from "../../directives/colorize.directive";
import { RealtimeData } from "../../models/realtime.model";
import { RealtimeService } from "../../services/realtime.service";

@Component({
  selector: 'app-realtime-data-table',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonComponent, 
    ColorizeDirective
  ],
  templateUrl: 'realtime-data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealtimeDataTableComponent implements OnDestroy {
  protected dataset: Signal<RealtimeData[]> = signal([]);
  protected colorize: WritableSignal<boolean> = signal(true);
  protected showAccumulated: WritableSignal<boolean> = signal(false);
  
  protected get accumulatedValues(): Signal<number[]> {
    let sum: number = 0;
    return computed(() => this.dataset().map((data: RealtimeData) => sum = (sum || 0) + data.amount));
  }

  public constructor(protected realtimeService: RealtimeService) {
    this.dataset = this.realtimeService.data;
  }

  public ngOnDestroy(): void {
    this.realtimeService.stopStream();
    this.realtimeService.clearData();
  }

  protected toggleColorize(): void {
    this.colorize.set(!this.colorize());
  }

  protected toggleAccumulated(): void {
    this.showAccumulated.set(!this.showAccumulated());
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