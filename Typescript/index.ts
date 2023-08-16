type numArray = number[];

function firstEle(arr: numArray) {
  if (arr.length > 0) return arr[0];
}

const ele = firstEle([12, 32, 34, 56, 68]);

console.log(ele);
