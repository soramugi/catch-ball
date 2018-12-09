declare var window: Window;
interface Window {
  Key(key?: string): void;
  lastKey: string|undefined;
}
