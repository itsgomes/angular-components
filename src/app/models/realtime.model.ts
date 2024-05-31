export type RealtimeData = {
  id: number;
  amount: number;
  value: number;
}

export const DEFAULT_TEXT_COLOR_PRESET = [
  'text-green-900',
  'text-green-800',
  'text-green-700',
  'text-green-600',
  'text-green-500',
  'text-green-400',
  'text-green-300'
];

export function lastAvailableColor(): string {
  return DEFAULT_TEXT_COLOR_PRESET[DEFAULT_TEXT_COLOR_PRESET.length - 1];
}