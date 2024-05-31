import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeButtonComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}