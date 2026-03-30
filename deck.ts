import { Card, Color, Value } from "./cards.ts";
class deck {
  public constructor() {
    let cards: any = [];
    for (let c = 0; c in Color; c++) {
      for (let v = 0; v in Value; v++) {
        cards += new Card(c, v);
      }
    }
  }
  private unplayed: Array<Card> = [];
}
