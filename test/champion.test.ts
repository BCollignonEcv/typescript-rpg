import Witcher from '../src/champion/witcher.class';
import Warrior from '../src/champion/warrior.class';
import Archer from '../src/champion/archer.class';
import champion from '../src/champion/champion.class';
import { ChampionType } from "../src/champion/championtype.enum";
import Champion from '../src/champion/champion.class';

describe("champion", ()=> {
  let champion0: Champion;
  let champion1: Witcher;
  let champion2: Warrior;
  let champion3: Archer;

  beforeEach( () => {
    champion0 = new Champion(100, 50);
    champion1 = new Witcher();
    champion2 = new Warrior();
    champion3 = new Archer();
  });
  

  test("ne peut pas infliger de dégats à l'ennemi s'il a plus de vie", ()=> {
    champion2.health = 0;
    champion1.setAttack(champion2);
    expect(champion2.health).toBe(0);
  });

  test("si l'ennemi n'as pas de protection, on inflige les dégats classiques", ()=> {
    champion1.setAttack(champion3);
    expect(champion3.health).toBe(70);
  });

  test("si le champion se protège alors il est protégé (protection à true)", ()=> {
    champion1.setProtection();
    expect(champion1.protection).toBe(true);
  });

  test("si l'ennemi se protège et ennemi différent de warrior, on inflige moitié moin de dégats et l'ennemi n'est plus protégé", ()=> {
    champion3.setProtection();
    champion1.setAttack(champion3);
    expect(champion3.health).toBe(85);
    expect(champion3.protection).toBe(false);
  });

  test("si l'ennemi se protège et ennemi est du type warrior, on inflige aucun dégat et l'ennemi n'est plus protégé", ()=> {
    champion2.setProtection();
    champion1.setAttack(champion2);
    expect(champion2.health).toBe(100);
    expect(champion2.protection).toBe(false);
  });

  test("retourne le type de champion Witcher pour un Witcher", ()=> {
    var witcherType = champion1.isType();
    expect(witcherType).toBe(ChampionType.Witcher);
  });

  test("retourne le type de champion Warrior pour un Warrior", ()=> {
    var warriorType = champion2.isType();
    expect(warriorType).toBe(ChampionType.Warrior);
  });

  test("retourne le type de champion Archer pour un Archer", ()=> {
    var archerType = champion3.isType();
    expect(archerType).toBe(ChampionType.Archer);
  });

  test("Archer attack 2 fois", ()=> {
    champion3.setAttack(champion1);
    expect(champion1.health).toBe(60);
  });

  test("Un champion ne peux être attaquer s'il est mort ou s'il est en train de mourrir", ()=> {
    champion2.health = 10;
    champion1.setAttack(champion2);
    champion2.isDying(20);
    expect(champion2.health).toBe(0);
  });

  test("Witcher peut se régénérer de la vie", ()=> {
    champion1.setHeal();
    expect(champion1.health).toBe(120);
  });

  test("un champion ne peux pas setter sa vie", ()=> {
    champion0.setHeal();
    expect(champion1.health).toBe(100);
  });

  test("un champion savoir s'il est mort ou pas", ()=> {
    expect(champion0.isDead()).toBe(false);
  });

  test("Un champion ne peux être attaquer s'il est en train de mourrir", ()=> {
    champion0.health = 10;
    champion0.isAttacked(20);
    expect(champion0.health).toBe(0);
  });

  test("un champion est par default un Warrior", ()=> {
    expect(champion0.isType()).toBe(ChampionType.Warrior);
  });

  test("un champion a par default sa vie à 100 et une attaque à 20", ()=> {
    champion0 = new Champion();
    expect(champion0.health).toBe(100);
    expect(champion0.attackDamage).toBe(20);
  });

});

// Exemples
// import {BankAccount} from '../src/bankAccount';

// describe("user", ()=> {
//   let user: User;
//   let bankAccount: BankAccount;

//   beforeEach( () => {
//     user = new User("Maire","Gautier",25);
//     bankAccount = new BankAccount(420, user);
//   });
  

//   test("should not deposit negative amount", ()=> {
//     user.deposit(-100, bankAccount);
//     expect(bankAccount.balance).toBe(420);
//   });

//   test("should add correctly", () => {
//     user.deposit(100, bankAccount);
//     expect(bankAccount.balance).toBe(520);
//   });

//   test("should not withdraw negative amount", () => {
//     user.withdraw(-100, bankAccount);
//     expect(bankAccount.balance).toBe(420);
//   });

//   test("should not be in negative when minor user", () => {
//     user.age = 15;
//     user.withdraw(10000, bankAccount);
//     expect(bankAccount.balance).toBe(420);
//   });

//   test("should withdraw correctly", () => {
//     user.withdraw(50, bankAccount);
//     expect(bankAccount.balance).toBe(370);
//   });

// });