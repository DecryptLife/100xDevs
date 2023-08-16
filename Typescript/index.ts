type numArray = number[] | string[];

function firstEle(arr: numArray) {
  if (arr.length > 0) return arr[0];
}

const a = firstEle([12, 32, 34, 56, 68]);
const b = firstEle(["Benson", "Thomas", "Beena"]);
console.log(b);
