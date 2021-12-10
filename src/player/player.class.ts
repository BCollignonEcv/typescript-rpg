import Archer from "../champion/archer.class";
import Champion from "../champion/champion.class";
import {ChampionType} from "../champion/championtype.enum";
import {ChampionActionType} from "../champion/championActionType.enum";
import Warrior from "../champion/warrior.class";
import Witcher from "../champion/witcher.class";
import IPlayer from "./player.interface";
import { PlayerColor } from "./playercolor.enum";
const inquirer = require('inquirer');


export default class Player implements IPlayer {
    name: string = "";
    order: number;
    champion: Champion = new Champion();
    color: string;

    constructor (order: number) {
        this.order = order;
        this.color = Object.values(PlayerColor)[order-1];
    }

    async setPlayer() :Promise<void> {
        await this.setName().then(async () => { 
            await this.setChampion(); 
        });
    }

    async play(enemy: Champion): Promise<void|string> {
        await inquirer
            .prompt([
                {
                type: 'list',
                name: 'action',
                message: 'Quelle action veux-tu réaliser ?',
                choices: ToArray(ChampionActionType),
                },
            ])
            .then((answer: any) => {
                switch(answer.action){
                    case 'Attack':
                        this.champion.setAttack(enemy);
                        break;
                    case 'Defend': 
                        this.champion.setProtection();
                        break;
                    case 'Heal': 
                        this.champion.setHeal();
                        break;
                    default:
                }})
            .catch((error: any) => {
                return `error : ${error}`;
            });
    }

    async setName() :Promise<void> {
        await inquirer
            .prompt([
                {
                name: 'playerName',
                message: 'Nom du joueur :'
                },
            ])
            .then((answers: any) => {
                this.name = toCapitalize(answers.playerName);
            });
    }

    async setChampion() :Promise<void> {
        await inquirer
            .prompt([
                {
                type: 'list',
                name: 'champion',
                message: 'Quel champion veux-tu jouer :',
                choices: ToArray(ChampionType),
                },
            ])
            .then((answers: any) => {
                switch(answers.champion){
                    case 'Warrior': 
                        this.champion = new Warrior()
                        break;
                    case 'Archer': 
                        this.champion = new Archer()
                        break;
                    case 'Witcher': 
                        this.champion = new Witcher()
                        break;
                } 
            });
    }

}
const StringIsNumber = (value: any): boolean => (isNaN(Number(value)) === false);

function ToArray(enumme : any): Object {
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]);
}

function toCapitalize(text: string): string{
    const lower = text.toLowerCase();
    return text.charAt(0).toUpperCase() + lower.slice(1);
}
