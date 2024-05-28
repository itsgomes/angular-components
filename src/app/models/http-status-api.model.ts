export type HttpStatusRequest = {
  code: number;
  sleep: number;
}

export const HTTP_STATUS_API_URL: string = 'https://httpstat.us/';
export const HTTP_STATUS_SLEEP_TIME: number = 1000;