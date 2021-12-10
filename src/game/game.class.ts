import Player from "../player/player.class";
const inquirer = require('inquirer');



export default class{
    gameName: String = "";
    players: Array<Player>;
    currentPlayer: Player;
    nextPlayer: Player;
    roundNumber: number;

    constructor(){
        this.players = [new Player(1), new Player(2)];
        this.currentPlayer = this.players[0];
        this.nextPlayer = this.players[1];
        this.roundNumber = 0;
        this.initGame().then( async() => {
            for (const [index, player] of this.players.entries()) {
                console.log(setCmdTitle(`Joueur ${index + 1}`))
                await player.setPlayer();  
            }
            this.start();
        });
    }

    async initGame() :Promise<void>{
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

    start() :void{
        console.log(setCmdTitle(`La partie commence !`, 2));
        this.round()
    }

    end(){
        var deadPlayer = checkIfPlayerIsDead(this.players);
        if(deadPlayer != false){
            return console.log(setCmdTitle(`La partie est terminé ! ${deadPlayer.name} est mort`, 2));
        }else{
            return console.log(setCmdTitle(`La partie est terminé, une erreur est survenue`, 2));
        }
    }

    async round() :Promise<void>{
        console.log(setCmdTitle(`${this.currentPlayer.name} | Vie : ${this.currentPlayer.champion.health}`, 1))
        this.roundNumber++;
        await this.currentPlayer.play(this.nextPlayer.champion).then(() => {
            if(!checkIfPlayerIsDead(this.players)){
                this.switchPlayer();
                this.round()
            }else{
                return this.end();
            }
        })
    }

    switchPlayer(){
        var tmpChampion = this.currentPlayer;
        this.currentPlayer = this.nextPlayer;
        this.nextPlayer = tmpChampion;
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