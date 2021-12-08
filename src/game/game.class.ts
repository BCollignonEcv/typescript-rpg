import Player from "../player/player.class";
import IGame from "./game.interface";
const inquirer = require('inquirer');



export default class Game implements IGame{
    gameName: String = "";
    players: Array<Player>;
    currentPlayer: Player;
    roundNumber: number;

    constructor(){
        this.players = [new Player(1), new Player(2)];
        this.currentPlayer = this.players[0];
        this.roundNumber = 0;
        this.initGame().then( async() => {
            for (const [index, player] of this.players.entries()) {
                console.log(setCmdTitle(`Joueur ${index + 1}`))
                await player.setPlayer();  
            }
            this.start();
        });
    }

    async initGame(){
        await inquirer
            .prompt([
                {
                name: 'gameName',
                message: 'Nom de la partie :'
                },
            ])
            .then((answers: any) => {
                this.gameName = answers.gameName;
            });
    }

    start(){
        console.log(setCmdTitle(`La partie commence !`, 2));
        while (!checkIfPlayerIsDead(this.players)){
            if(this.roundNumber > 10){
                return this.end();
            }else{
                this.round()
            }
        }
        let tmp = checkIfPlayerIsDead(this.players);
        if(!tmp){
            this.end();
        }else{
            console.log('error')
        }
    }

    async round(){
        this.roundNumber++;
        await this.currentPlayer.play().then(async (action: any) => {
            switch(action){
                case 'Attack': 
                    if(this.currentPlayer.order === 1){
                        this.players[0].champion.setAttack(this.players[1].champion);
                    }else{
                        this.players[1].champion.setAttack(this.players[0].champion);
                    }
                case 'Defend': 
                    this.currentPlayer.champion.setProtection();
                case 'Heal': 
                    this.currentPlayer.champion.setHeal();
                default:
                    this.end();
            }
            this.switchPlayer();
        });
    }

    end(){
        var deadPlayer = checkIfPlayerIsDead(this.players);
        if(deadPlayer != false){
            return console.log(setCmdTitle(`La partie est terminé ! ${deadPlayer} est mort`, 2));
        }else{
            return console.log(setCmdTitle(`La partie est terminé, une erreur est survenue`, 2));
        }
    }

    switchPlayer(){
        if(this.currentPlayer = this.players[0]){
            this.currentPlayer = this.players[1];
        }else if(this.currentPlayer = this.players[1]){
            this.currentPlayer = this.players[0]
        }
    }
}

function checkIfPlayerIsDead(players: Array<Player>){
    for (const player of players) {
        if(player.champion.isDead()){
            return player
        }
    }
    return false;
}

function setCmdTitle(text: string, size?: number): string{
    switch(size){
        case 1: 
            return `----------------------------\n${text}\n----------------------------`
        case 2: 
            return `----------------------------\n\n${text}\n\n----------------------------`
        default:
            return `--------------\n${text}\n--------------`
    } 
}