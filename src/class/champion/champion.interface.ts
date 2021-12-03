import { ChampionType } from "./championtype.enum";
import Champion from "./champion.class";


export default interface IChampion {
    name: string;
    health: number;
    type: ChampionType;
    protection: boolean;
    protect(): void;
    attack(ennemy: Champion): void;
}