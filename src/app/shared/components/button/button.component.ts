import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";

export type ButtonColor = 'primary' | 'success' | 'danger';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  host: { 'class': 'flex-1' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  public readonly title: InputSignal<string> = input.required<string>();
  public readonly buttonColor: InputSignal<ButtonColor> = input<ButtonColor>('primary');
  public readonly disabled: InputSignal<boolean | undefined> = input<boolean>();
  public onButtonClick: OutputEmitterRef<void> = output<void>();
}