import Player from "../player/player.class";
import IGame from "./game.interface";
import { stdin as input, stdout as output } from 'process';
import Warrior from "../champion/warrior.class";
import { ReadLine } from "readline";
import { ChampionType } from "../champion/champion.enum";
import Archer from "../champion/archer.class";
import Witcher from "../champion/witcher.class";
import Champion from "../champion/champion.class";

const Readline =  require('readline')


export default class Game implements IGame{
    gameName: String = "";
    player1: Player = new Player(1);
    player2: Player = new Player(2);
    interface: any;

    constructor(){
        this.start();
    }

    start(){
        this.interface = Readline.createInterface({ input, output });

        this.interface.question('Name of the game : ', (answer: string) => {
            this.gameName = answer;
            this.interface.write(`La partie ${answer} commence`)
            this.interface.clearLine(0)
            this.interface.clearLine(2)
            this.player1 = setPlayer(this.player1, this.interface);
            this.player2 = setPlayer(this.player2, this.interface);
        });

    }

    startPlayerRound(){

    }

    endPlayerRound(){

    }

    end(){
    }
}

function selectChampion(customInterface: ReadLine, player: Player, error?: string){
    if(error !== undefined){
        console.log(error)
    }
    for(let champion in ChampionType){
        if (isNaN(Number(champion))) {
            console.log(champion)
        }
    }
    customInterface.question('Write you champion : ', (answer: string) => {
        switch(answer.toLocaleLowerCase()){
            case 'warrior': 
                return new Warrior()
            case 'archer': 
                return new Archer()
            case 'witcher': 
                return new Witcher()
        }
    });
    return new Champion()
}

function setPlayer(player: Player, customInterface: ReadLine): Player{
    customInterface.question('First player name : ', (answer: string) => {
        player.name = answer;
        player.type = selectChampion(customInterface, player);
    });
    return player;
}
