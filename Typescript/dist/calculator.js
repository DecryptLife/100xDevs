export function calculator(first, second, opeartion) {
    var ans = 0;
    switch (opeartion) {
        case "add":
            ans = first + second;
            break;
        case "div":
            ans = first / second;
            break;
        case "mul":
            ans = first * second;
            break;
        case "sub":
            ans = first - second;
            break;
        default:
            ans = 0;
            break;
    }
    return ans;
}
var output = calculator(10, 5, "div");
if (output != 0)
    console.log(output);
else
    console.log("Wrong operation mentioned");
