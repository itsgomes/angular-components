import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";
import { ButtonColor } from "./button.model";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  host: { 'class': 'flex-1' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  public title: InputSignal<string> = input.required<string>();
  public disabled: InputSignal<boolean | undefined> = input<boolean>();
  public buttonColor: InputSignal<ButtonColor> = input<ButtonColor>('primary');
  public onButtonClick: OutputEmitterRef<void> = output<void>();
}