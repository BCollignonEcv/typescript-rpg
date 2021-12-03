import Champion from "./champion.class";

export default class Archer extends Champion {

  constructor(name: string, health: number, type: ChampionType, protection: boolean) {
    super(name, health, ChampionType, protection);
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


  // TODO : Methode attaquer 2 fois de suite
    
}