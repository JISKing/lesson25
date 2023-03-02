class User {
  #phone;
  constructor(name, phone) {
    this.name = name;
    const phoneFormat = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
    if (!phoneFormat.test(phone)) {
      throw new Error("Invalid phone format");
    }
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    if (isAdmin == true) {
      return this.#phone;
    } else {
      let hiddenPhone = this.#phone.split("-");
      for (let i = 0; i < hiddenPhone.length; i++) {
        hiddenPhone[1] = "***";
        hiddenPhone[2] = "**";
      }
      return hiddenPhone.join("-");
    }
  }
}

let user1 = new User("Mike", "066-888-88-99");
let user2 = new User("Tom", "099-888-88-99");

console.log(user1.getPhone(false));
console.log(user2.getPhone(false));
console.log(user1.getPhone(true));
console.log(user2.getPhone(true));
