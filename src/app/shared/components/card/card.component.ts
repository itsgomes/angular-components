import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Components } from '../../../core/models/components.model';

@Component({
  selector: 'app-card-component',
  standalone: true,
  templateUrl: 'card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  public component: InputSignal<Components> = input.required<Components>();
  public onOpenComponent: OutputEmitterRef<Components> = output<Components>();
}