import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TemplateComponent } from '../../shared/components/template/template.component';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, TemplateComponent],
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  protected progress: WritableSignal<number> = signal(0);
  
  protected updateValue(value: number): void {
    this.progress.update(progress => {
      if ((progress + value) < 0) return 0;
      else if ((progress + value) > 100) return 100;
      else return progress + value;
    });
  }
}