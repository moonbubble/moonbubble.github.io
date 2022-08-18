export {};

declare global {
  interface Color {
    name: string;
    index: number;
    backgroundColor: string;
    chosen: boolean;
  }
}
