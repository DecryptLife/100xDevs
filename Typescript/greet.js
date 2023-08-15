var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi Mr." + this.name + " glad you're " + this.age + " years old";
    };
    return Person;
}());
var Benson = new Person("Benson", 21);
console.log(Benson.greet());
