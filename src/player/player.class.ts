import Archer from "../champion/archer.class";
import Champion from "../champion/champion.class";
import Warrior from "../champion/warrior.class";
import Witcher from "../champion/witcher.class";
import IPlayer from "./player.interface";


export default class Player implements IPlayer{
    type: Champion = new Champion();
    name: string = "";
    order: number;
    point: number;

    constructor(order: number){
        this.order = order;
        this.point = 10;
    }

    giveName(name: string){
        this.name = name;
    }

    selectChampion(champion: Champion){
        this.type = champion;
    }
}
