import { ChampionType } from "./championtype.enum";
import Champion from "./champion.class";


export default interface IChampion {
    protect(): void;
    attack(ennemy: Champion): void;
}