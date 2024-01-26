type User = {
  name: string;
  age: number;
};
function firstEle<T>(arr: T[]) {
  return arr[0];
}

let a = firstEle<number>([12, 32, 34, 56, 68]);
let b = firstEle<string>(["Benson", "Thomas", "Beena"]);
let c = firstEle<User>([
  {
    name: "Benson",
    age: 24,
  },
  {
    name: "Ameya",
    age: 25,
  },
]);
b = b.toLowerCase();
console.log(c);
