interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hi Mr." + this.name + " glad you're " + this.age + " years old";
  }
}

const Benson = new Person("Benson", 21);

console.log(Benson.greet());
