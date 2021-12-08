import Witcher from '../src/champion/witcher.class';
import Warrior from '../src/champion/warrior.class';
import Archer from '../src/champion/archer.class';
import { ChampionType } from "../src/champion/championtype.enum";

describe("champion", ()=> {
  let champion1: Witcher;
  let champion2: Warrior;
  let champion3: Archer;

  beforeEach( () => {
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
    // expect(champion3.protection).toBe(false);
  });

  test("si l'ennemi se protège et ennemi est du type warrior, on inflige aucun dégat et l'ennemi n'est plus protégé", ()=> {
    champion2.setProtection();
    champion1.setAttack(champion2);
    expect(champion2.health).toBe(100);
    // expect(champion2.protection).toBe(false);
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