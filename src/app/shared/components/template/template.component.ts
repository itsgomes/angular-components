import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-template-component',
  standalone: true,
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent {}