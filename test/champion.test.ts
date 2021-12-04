import Champion from '../src/champion/champion.class';
import { ChampionType } from "../src/champion/championtype.enum";

describe("champion", ()=> {
  let champion1: Champion;
  let champion2: Champion;
  let champion3: Champion;

  beforeEach( () => {
    champion1 = new Champion("Gautier", ChampionType.Witcher, 1000, false);
    champion2 = new Champion("Vincent", ChampionType.Warrior, 1000, false);
    champion3 = new Champion("Baptiste", ChampionType.Archer, 1000, false);
  });
  

  test("ne peut pas infliger de dégats à l'ennemi s'il a plus de vie", ()=> {
    champion2.health = 0;
    champion1.attack(champion2);
    expect(champion2.health).toBe(0);
  });

  test("si l'ennemi n'as pas de protection, on inflige les dégats classiques", ()=> {
    champion1.attack(champion3);
    expect(champion3.health).toBe(900);
  });

  test("si le champion se protège alors il est protégé (protection à true", ()=> {
    champion1.protect();
    expect(champion1.protection).toBe(true);
  });

  test("si l'ennemi se protège et ennemi différent de warrior, on inflige moitié moin de dégats et l'ennemi n'est plus protégé", ()=> {
    champion3.protect();
    champion1.attack(champion3);
    expect(champion3.health).toBe(950);
    expect(champion3.protection).toBe(false);
  });

  test("si l'ennemi se protège et ennemi est du type warrior, on inflige aucun dégat et l'ennemi n'est plus protégé", ()=> {
    champion2.protect();
    champion1.attack(champion2);
    expect(champion2.health).toBe(1000);
    expect(champion2.protection).toBe(false);
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