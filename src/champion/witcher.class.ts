import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Witcher extends Champion {

  constructor() {
    super(100, 30);
  }

  setHeal(): void {
    this.health += 20;
  }

  isType(){
      return ChampionType.Witcher;
  }
}