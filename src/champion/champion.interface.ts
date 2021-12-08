import { ChampionType } from "./championtype.enum";
import Champion from "./champion.class";


export default interface IChampion {
    setProtection(): void;
    setAttack(ennemy: Champion): void;
    isProtected(): boolean;
    isDead(damage: number): boolean;
    isAttacked(damage: number): void;
}