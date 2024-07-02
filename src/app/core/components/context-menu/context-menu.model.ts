export type ContextMenuItem = {
  name: string;
  icon?: string;
  commandType: AvailableMenuCommand;
}

export type ContextMenuPosition = {
  top: number;
  left: number;
}

export enum AvailableMenuCommand {
  Close
}

export const CONTEXT_MENU_ITEMS: ContextMenuItem[] = [
  { name: 'Option 1', commandType: AvailableMenuCommand.Close },
  { name: 'Option 2', commandType: AvailableMenuCommand.Close },
  { name: 'Option 3', commandType: AvailableMenuCommand.Close },
];