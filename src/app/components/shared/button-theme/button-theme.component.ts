import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from '../../../models/theme.model';
import { ThemesService } from '../../../services/themes.service';

@Component({
  selector: 'app-button-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'button-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonThemeComponent {
  public get Theme(): typeof Theme {
    return Theme;
  }
  
  public constructor(protected themesService: ThemesService) {}

  protected toggleTheme(): void {
    this.themesService.toggleTheme();
  }
}