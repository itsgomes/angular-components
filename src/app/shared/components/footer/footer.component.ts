import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { SOCIAL_MEDIAS, SocialMedia, SocialMediaTypes } from "../../../models/footer.model";
import { ComponentsService } from "../../../services/components.service";
import { ThemesService } from "../../../services/themes.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  host: { 'class' : 'container' },
  styles: `
    .revert-svg-color { filter: invert(100%); } 
    .hover-svg-color:hover { filter: brightness(0) saturate(100%) invert(17%) sepia(92%) saturate(3639%) hue-rotate(245deg) brightness(83%) contrast(90%); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly socialMedias: SocialMedia[] = SOCIAL_MEDIAS;

  public constructor(
    protected readonly componentsService: ComponentsService, 
    protected readonly themesService: ThemesService
  ) {
    toObservable(this.componentsService.hasComponentsOpened)
      .pipe(takeUntilDestroyed())
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