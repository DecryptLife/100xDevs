function greet(person) {
    return ("Hello Mr." +
        person.name +
        " glad that you are " +
        person.age +
        " years old");
}
console.log(greet({
    name: "Benson",
    age: 24,
}));
