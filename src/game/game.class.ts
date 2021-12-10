import Player from "../player/player.class";
import { PlayerColor } from "../player/playercolor.enum";
const inquirer = require('inquirer');



export default class {
    gameName: String = "";
    players: Array<Player>;
    currentPlayer: Player;
    nextPlayer: Player;
    roundNumber: number;
    pos: PlayerColor;

    constructor(){
        this.players = [new Player(1), new Player(2)];
        this.currentPlayer = this.players[0];
        this.nextPlayer = this.players[1];
        this.roundNumber = 0;
        this.pos = PlayerColor.First;
        this.initGame().then( async() => {
            for (const [index, player] of this.players.entries()) {
                console.log(this.pos, setCmdTitle(`Joueur ${index + 1}`))
                this.setColor();
                await player.setPlayer();  
            }
            this.start();
        });
    }

    async initGame(): Promise<void> {
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

    start(): void {
        console.log('\x1b[33m%s\x1b[0m', setCmdTitle(`La partie commence !`, 2));
        this.round()
    }

    end(): void {
        var deadPlayer = checkIfPlayerIsDead(this.players);
        if (deadPlayer != false) {
            return console.log(setCmdTitle(`La partie est terminé ! ${deadPlayer.name} est mort`, 2));
        } else {
            return console.log(setCmdTitle(`La partie est terminé, une erreur est survenue`, 2));
        }
    }

    async round(): Promise<void> {
        console.log(this.pos, setCmdTitle(`${this.currentPlayer.name} | Vie : ${this.currentPlayer.champion.health}`, 1));
        this.roundNumber++;
        await this.currentPlayer.play(this.nextPlayer.champion).then(() => {
            if (!checkIfPlayerIsDead(this.players)) {
                this.switchPlayer();
                this.setColor();
                this.round()
            }else{
                return this.end();
            }
        });
    }
    
    setColor() {
        if (this.pos == PlayerColor.First) {
            this.pos = PlayerColor.Second;
        } else if (this.pos == PlayerColor.Second) {
            this.pos = PlayerColor.First;
        }
    }

    switchPlayer(): void {
        var tmpChampion = this.currentPlayer;
        this.currentPlayer = this.nextPlayer;
        this.nextPlayer = tmpChampion;
    }
}

function checkIfPlayerIsDead(players: Array<Player>): false|Player {
    for (const player of players) {
        if (player.champion.isDead()) {
            return player;
        }
    }
    return false;
}

function setCmdTitle(text: string, size?: number): string {
    switch(size){
        case 1: 
            return `----------------------------\n${text}\n----------------------------`;
        case 2: 
            return `----------------------------\n\n${text}\n\n----------------------------`;
        default:
            return `--------------\n${text}\n--------------`;
    } 
}