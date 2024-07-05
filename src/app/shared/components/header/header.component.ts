import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, ThemeButtonComponent],
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}