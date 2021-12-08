import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Archer extends Champion {

  constructor() {
    super(80, 20)
  }

  setAttack(enemy: Champion): void {
      enemy.isAttacked(this.attackDamage)
      enemy.isAttacked(this.attackDamage)
  } 

  isType(){
      return ChampionType.Archer;
  }
}