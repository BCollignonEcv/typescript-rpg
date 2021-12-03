import Champion from '../src/champion/champion.class';

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