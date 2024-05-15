import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  protected progress: WritableSignal<number> = signal(0);

  protected updateValue(value: number): void {
    this.progress.update(progress => progress + value);
  }
}