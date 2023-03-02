class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (isAdmin == false) {
      return "Permission denied";
    } else {
      return this.#name ? this.#name : this.login;
    }
  }

  ChangeName(newName, password) {
    if (password === "123") {
      return `Name Changed from ${this.#name} to ${(this.#name = newName)}`;
    } else {
      return "Permission denied";
    }
  }
}

let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

console.log(user1.ChangeName("Bill", "123"));
