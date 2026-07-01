class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Animal is sleeping");
  }
  sleep() {
    console.log(`${this.name}is eating`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    this.breed = bread;
  }
  speak() {
    console.log(`${this.name} bark bark ${this.breed}`);
  }
}
const dog1 = new Dog("Tommy", "German Shepherd");
dog1.speak();
