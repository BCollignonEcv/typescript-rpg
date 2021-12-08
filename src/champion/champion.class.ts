import IChampion from "./champion.interface";
import { ChampionType } from "./championtype.enum";


export default class Champion implements IChampion{
    health: number;
    protection: boolean = false;
    attackDamage: number;
    dead: boolean = false;


    constructor( health?: number, attackDamage?: number ) {
        this.health = health ? health : 100;
        this.attackDamage = attackDamage ? attackDamage : 20;
    }

    setProtection(): void {
        this.protection = true;
    }

    setAttack(enemy: Champion): void {
        enemy.isAttacked(this.attackDamage)
    }

    setHeal(): void {
        return;
    }

    isProtected() :boolean{
        return this.protection;
    }

    isDead(): boolean{
        return this.dead;
    }

    isDying(damage: number): boolean{
        if(this.health - damage <= 0){
            this.dead = true;
            return true;
        }else{
            return false;
        }
    }

    isAttacked(damage: number): void{
        if(this.isProtected()){
            damage = damage / 2;
            this.protection = false;
        }
        if(this.isDying(damage)){
            this.health = 0;
        }
        console.log(`isAttacked : ${damage}`)
        this.health = this.health - damage;
    }

    isType(): ChampionType{
        return ChampionType.Warrior;
    }
}