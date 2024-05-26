import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from '../../../models/theme.model';
import { ThemesService } from '../../../services/themes.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'theme-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeButtonComponent {
  public get Theme(): typeof Theme {
    return Theme;
  }
  
  public constructor(protected themesService: ThemesService) {}

  protected toggleTheme(): void {
    this.themesService.toggleTheme();
  }
}