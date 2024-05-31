export enum SocialMediaTypes {
  Gmail,
  Github,
  Linkedin
}

export type SocialMedia = {
  type: SocialMediaTypes;
  icon: string;
  url: string;
}

export const SOCIAL_MEDIAS: SocialMedia[] = [
  { type: SocialMediaTypes.Gmail, icon: 'gmail.svg', url: 'gomesr333@gmail.com' },
  { type: SocialMediaTypes.Github, icon: 'github.svg', url: 'https://github.com/itsgomes' },
  { type: SocialMediaTypes.Linkedin, icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/rafael-gomes-21493a119/' }
];