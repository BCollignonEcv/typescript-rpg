import Champion from "./champion.class";
import { ChampionType } from "./championtype.enum";

export default class Witcher extends Champion {

  constructor(name: string, health: number, type: ChampionType, protection: boolean) {
    super(name, health, type, protection);
  }

  attack(enemy: Champion): void {
    if (enemy.health > 0) {
      if (enemy.protection == false) {
        enemy.health -= 100;
      } else {
        if (enemy.type != ChampionType.Warrior) {
          // pas de dégât
          enemy.health -= 0;
        } else {
          // dégâts / 2
          enemy.health -= 50;
        }
        enemy.protection = false;
      }
    }
  }

  protect(): void {
    this.protection = true;
  }

  toHeal(): void {
    this.health += 30;
  }


  // TODO : Methode pour se soigner
  // régénère x de vie
    
}