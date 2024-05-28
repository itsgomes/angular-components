import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ToasterComponent } from './shared/components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ModalComponent, ToasterComponent],
  template: `
    <main class="container h-screen mx-auto">
      <app-header />
      <router-outlet />
      <app-footer />
    </main>

    <app-modal />
    <app-toaster />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}