import { ChampionType } from "./championtype.enum";
import Champion from "./champion.class";


export default interface IChampion {
    setProtection(): void;
    setAttack(ennemy: Champion): void;
    setHeal(): void;
    isProtected(): boolean;
    isAttacked(damage: number): void;
    isDying(damage: number): boolean;
    isDead(damage: number): boolean;
    isType(): ChampionType;
}