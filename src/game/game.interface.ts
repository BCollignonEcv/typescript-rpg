import Player from "../player/player.class";

export default interface IGame {
    start(player1: Player, player2: Player): void;
    end(): void;
}