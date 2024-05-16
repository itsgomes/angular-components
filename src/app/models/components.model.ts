export interface Components {
  id: ComponentsType;
  title: string;
  description: string;
  image: string;
}

export enum ComponentsType {
  GalleryAnimations,
  ProgressBar,
  OnlineChecker
}

export const AVAILABLE_COMPONENTS: Components[] = [
  { 
    id: ComponentsType.GalleryAnimations,
    title: 'Gallery slider using angular animations',
    description: 'A way to create and use animations without CSS. Do not miss import the angular animations provider to your application module.',
    image: '1.jpg',
  },
  { 
    id: ComponentsType.ProgressBar,
    title: 'Linear progress bar',
    description: 'Some of my best practices to create a linear progress bar component.',
    image: '2.jpg',
  },
  { 
    id: ComponentsType.OnlineChecker,
    title: 'Online checker',
    description: 'This is one method to listen the browser connectivity. This component is able to show if your browser still connected or not.',
    image: '3.jpg',
  }
];