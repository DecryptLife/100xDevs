type PersonInterface = {
  name: string;
  age: number;
};

function greet(person: PersonInterface) {
  return "Hi Mr." + person.name + " your age is " + person.name;
}

console.log(
  greet({
    name: "Benson",
    age: 24,
  })
);
