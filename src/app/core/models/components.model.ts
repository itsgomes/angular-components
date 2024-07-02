export type Components = {
  id: ComponentsType;
  title: string;
  description: string;
  image: string;
}

export enum ComponentsType {
  GalleryAnimations,
  ProgressBar,
  OnlineChecker,
  DelayedInput,
  ResizableElement,
  InfiniteScroll,
  VirtualScroll,
  RatingForm,
  HttpRequest,
  Toaster,
  Modal,
  RealtimeDataTable,
  ReactiveForm,
  Chart,
  ContextMenu
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
    description: 'An example to create a useful linear progress bar component.',
    image: '2.jpg',
  },
  { 
    id: ComponentsType.OnlineChecker,
    title: 'Online checker',
    description: 'A method to listen the browser connectivity. This component is able to show if your browser still connected.',
    image: '3.jpg',
  },
  { 
    id: ComponentsType.DelayedInput,
    title: 'Delayed input',
    description: 'Useful for search input. This component are using form control to subscribe the value changes.',
    image: '4.jpg',
  },
  { 
    id: ComponentsType.ResizableElement,
    title: 'Resizable element using observer',
    description: 'Watching the element size independent of the viewport. Observation will respond to every change of elements size.',
    image: '5.jpg',
  },
  { 
    id: ComponentsType.InfiniteScroll,
    title: 'Infinite scroll',
    description: 'Useful to retrieve more data from backend API whenever scroll is near end.',
    image: '6.jpg',
  },
  { 
    id: ComponentsType.VirtualScroll,
    title: 'Virtual scroll',
    description: 'Powerful feature provided by the @angular/cdk library that enables efficient rendering of large lists by displaying only the items visible in the viewport.',
    image: '7.jpg',
  },
  { 
    id: ComponentsType.RatingForm,
    title: 'Reactive Forms using CVA rating component',
    description: 'The Control Value Accessor interface in Angular is specifically designed to facilitate two-way data binding between custom form controls and Angular forms.',
    image: '8.jpg',
  },
  {
    id: ComponentsType.HttpRequest,
    title: 'Intercepting HTTP Request',
    description: 'A simple way to intercept http request and communicate to service for show loading state.',
    image: '9.jpg',
  },
  {
    id: ComponentsType.Toaster,
    title: 'Toaster service',
    description: 'Toaster is used to display messages in overlay. An example to create your own toaster service.',
    image: '10.jpg',
  },
  {
    id: ComponentsType.Modal,
    title: 'Modal service',
    description: 'Modal is a dialog that appears on front of your app content, and must be dismissed by the app before interaction.',
    image: '11.jpg',
  },
  {
    id: ComponentsType.RealtimeDataTable,
    title: 'Realtime Data Table',
    description: 'Simulating communication with a websocket to fill a table with realtime data focusing on performance.',
    image: '12.jpg',
  },
  {
    id: ComponentsType.ReactiveForm,
    title: 'Reactive Form using Validations',
    description: 'Responsive and reactive form using standart and custom validations correctly without any additional libraries.',
    image: '13.jpg',
  },
  {
    id: ComponentsType.Chart,
    title: 'Chart using chart.js',
    description: 'Using a flexible JavaScript charting library to create analytics charts.',
    image: '14.jpg',
  },
  {
    id: ComponentsType.ContextMenu,
    title: 'Custom context menu',
    description: 'Steps to create your own custom and reusable context menu directive.',
    image: '15.jpg',
  }
];