export type Toast = {
  message: string;
  duration: number;
  type: ToastType;
}

export enum ToastType {
  Primary,
  Success,
  Error,
  Warn
}

export const TOAST_DURATION: number = 3000;
export const TOAST_EXAMPLE_ARRAY: Toast[] = [
  { message: 'Show primary toaster', duration: TOAST_DURATION, type: ToastType.Primary },
  { message: 'Show success toaster', duration: TOAST_DURATION, type: ToastType.Success },
  { message: 'Show error toaster', duration: TOAST_DURATION, type: ToastType.Error },
  { message: 'Show warn toaster', duration: TOAST_DURATION, type: ToastType.Warn }
];