import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { ComponentsService } from "../../../core/services/components.service";
import { ThemeService } from "../../services/themes.service";
import { SOCIAL_MEDIAS, SocialMedia, SocialMediaTypes } from "./footer.model";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  host: { 'class' : 'container' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly socialMedias: SocialMedia[] = SOCIAL_MEDIAS;

  public constructor(
    protected themeService: ThemeService,
    private _componentsService: ComponentsService
  ) {
    toObservable(this._componentsService.hasComponentsOpened)
      .pipe(
        takeUntilDestroyed())
      .subscribe((hasComponentsOpened: boolean) => { 
        this.fixed = hasComponentsOpened;
        this.bottom = hasComponentsOpened;
      });
  }

  protected openSocialMedia(media: SocialMedia): void {
    switch (media.type) {
      case SocialMediaTypes.Gmail:
        const url = 'mailto:' + media.url;
        window.open(url, 'mail');
        break;
      case SocialMediaTypes.Github:
      case SocialMediaTypes.Linkedin:
        window.open(media.url);
        break;
    }
  }

  @HostBinding('class.fixed') protected fixed: boolean = false;
  @HostBinding('class.bottom-0') protected bottom: boolean = false;
}