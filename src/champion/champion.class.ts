import IChampion from "./champion.interface";
import { ChampionType } from "./championtype.enum";

export default class Champion implements IChampion{
    name: string;
    health: number;
    type: ChampionType;
    protection: boolean;

    constructor(name: string, type: ChampionType, health: number, protection: boolean) {
        this.name = name;
        this.type= type;
        this.health = health;
        this.protection = protection;
    }

    protect(): void {
        this.protection = true;
    }

    attack(enemy: Champion): void {
        if (enemy.health > 0) {
            if (enemy.protection == false) {
                enemy.health -= 50
            } else {
                enemy.protection = false;
            }
        }
        enemy.health -= 50;
    }
}