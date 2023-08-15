interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return (
    "Hello Mr." +
    person.name +
    " glad that you are " +
    person.age +
    " years old"
  );
}

console.log(
  greet({
    name: "Benson",
    age: 24,
  })
);
