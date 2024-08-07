import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ThemeService } from "../../services/themes.service";
import { SOCIAL_MEDIAS, SocialMedia, SocialMediaTypes } from "./footer.model";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'footer.component.html',
  host: { 'class' : 'container mt-auto' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly socialMedias: SocialMedia[] = SOCIAL_MEDIAS;

  public constructor(protected themeService: ThemeService) {}

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
}