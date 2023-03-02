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

class Admin extends User {
  #isAdmin = true;
  constructor(name, login, age) {
    super(name, login, age);
  }
  getUserName(user) {
    return user.getName(this.#isAdmin);
  }
}

let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);

let admin = new Admin();
console.log(admin.getUserName(user1));
