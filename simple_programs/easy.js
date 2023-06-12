function one_to_n(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// one_to_n(100);

function fibonnaci(n) {
  var first = 0;
  var second = 1;

  console.log(first);
  console.log(second);

  while (n > 2) {
    var temp = first + second;
    console.log(temp);
    first = second;
    second = temp;
    n = n - 1;
  }
}

// console.log("First ", 5, " fibonnaci numbers are: ");
// fibonnaci(5);

function pattern(n) {
  for (let i = 0; i < n; i++) {
    var pat = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) pat = pat + "* ";
    }
    console.log(pat);
  }
}

// pattern(5);

function sumOfAll(start, end) {
  var sum = 0;

  for (var i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

var sum = sumOfAll(1, 1000);

console.log(sum);
