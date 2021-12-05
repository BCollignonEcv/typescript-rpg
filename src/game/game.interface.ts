import Player from "../player/player.class";

export default interface IGame {
    start(player1: Player, player2: Player): void;
    startPlayerRound(player: Player): void;
    endPlayerRound(player: Player): void;
    end(playerWinner: Player, PlayerLooser: Player): void;
}