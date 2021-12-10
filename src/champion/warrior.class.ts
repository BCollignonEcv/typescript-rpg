import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Warrior extends Champion {

  constructor() {
    super(100, 40);
  }

  isAttacked(damage: number): void {
      if (this.isProtected()) {
          damage = 0;
          this.protection = false;
      }
      if (this.isDying(damage)) {
          this.health = 0;
      } else {
        this.health = this.health - damage;
      }
  }

  isType(): ChampionType {
      return ChampionType.Warrior;
  }
    
}