class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  let user = new User("Иван");
  user.sayHi();
  function User(name, age){
     
    this.name = Ivan;
    this.age = 15;
    this.displayInfo = function(){
         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name}`);
};
 
module.exports = User;
const User = require("./user.js");
 
let eugene = new User("Alex", 32);
Eugene.sayHi();
const user = {
    name: 'Peter',
    age: 25,
    job: 'Teacher',
    greet: function () {
        console.log('Hello!');
    }
};

