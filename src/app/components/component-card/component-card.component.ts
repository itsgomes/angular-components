import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";
import { Components } from "../../models/components.model";

@Component({
  selector: 'app-component-card',
  standalone: true,
  templateUrl: './component-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentCardComponent {
  public component: InputSignal<Components> = input.required<Components>();
  public onOpenComponent: OutputEmitterRef<Components> = output<Components>();
}