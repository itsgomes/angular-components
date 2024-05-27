import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToasterComponent } from './shared/components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToasterComponent],
  template: `
    <main class="container h-screen mx-auto">
      <app-header />
      <router-outlet />
    </main>

    <app-toaster />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}