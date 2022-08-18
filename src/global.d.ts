export {};

declare global {
  interface Color {
    name: string;
    index: number;
    backgroundColor: string;
    chosen: boolean;
  }

  enum Menu {
    Number = 1,
    Colors = 2,
    Possibilities = 3,
  }
}
