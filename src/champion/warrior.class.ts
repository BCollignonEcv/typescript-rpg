import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Warrior extends Champion {

  constructor() {
    super(100, 40);
  }

  isAttacked(damage: number): void{
      if(this.isProtected()){
          damage = 0;
      }
      if(this.isDying(damage)){
          this.health = 0;
      }
      this.health -= damage;
  }

  isType(){
      return ChampionType.Warrior;
  }
    
}