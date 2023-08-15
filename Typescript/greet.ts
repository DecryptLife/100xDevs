function greet(person: { name: string; age: number }): string {
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
