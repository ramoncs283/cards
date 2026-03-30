export function hello(): string {
  return "world";
}

export enum Color {
  Rosen = 3,
  Schellen = 2,
  Schilten = 2,
  Eicheln = 1,
}

export enum Value {
  Ass = 11,
  König = 13,
  Ober = 12,
  Under = 11,
  Banner = 10,
  Neun = 9,
  Acht = 8,
  Sieben = 7,
  Sechs = 6,
}

export class Card {
  public constructor(
    public color: Color,
    public value: Value,
  ) {}

  public beats(other: Card): boolean {
    if (this.value > other.value) {
      return true;
    } else if (this.value === other.value) {
      if (this.color === other.color) {
        return false;
      }
    }
    return false;
  }
}
