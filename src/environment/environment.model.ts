export class EnvironmentModel {
  production: boolean = false;
  
  searchDebounce: number = 500; // In milliseconds.

  dummyApiUrl: string = 'https://dummyjson.com/';
  httpStatusApiUrl: string = 'https://httpstat.us/';
}