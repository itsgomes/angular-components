import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonThemeComponent } from '../button-theme/button-theme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonThemeComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}