import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Archer extends Champion {

  constructor() {
    super(100, 20)
  }

  setAttack(enemy: Champion): void {
      enemy.isAttacked(this.attackDamage);
      enemy.isAttacked(this.attackDamage);
  } 

  isType(): ChampionType {
      return ChampionType.Archer;
  }
}