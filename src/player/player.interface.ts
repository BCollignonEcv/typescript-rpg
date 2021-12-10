import Champion from "../champion/champion.class";
import { PlayerColor } from "./playercolor.enum";


export default interface Iplayer {
    setPlayer() :Promise<void>;
    setName() :Promise<void>;
    setChampion() :Promise<void>;
    play(enemy: Champion): Promise<void | string>;
}