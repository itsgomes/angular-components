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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt egestas eleifend. Pellentesque feugiat posuere orci imperdiet lacinia.',
    image: '1.jpg',
  },
  { 
    id: ComponentsType.ProgressBar,
    title: 'Linear Progress Bar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt egestas eleifend. Pellentesque feugiat posuere orci imperdiet lacinia.',
    image: '2.jpg',
  },
  { 
    id: ComponentsType.OnlineChecker,
    title: 'Online Checker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt egestas eleifend. Pellentesque feugiat posuere orci imperdiet lacinia.',
    image: '3.jpg',
  }
];