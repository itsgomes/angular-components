import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostAttributeToken, InputSignal, OutputEmitterRef, inject, input, output } from "@angular/core";

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
  protected readonly title: string = inject(new HostAttributeToken('title'));
  
  public buttonColor: InputSignal<ButtonColor> = input<ButtonColor>('primary');
  public disabled: InputSignal<boolean | undefined> = input<boolean>();
  public onButtonClick: OutputEmitterRef<void> = output<void>();

}