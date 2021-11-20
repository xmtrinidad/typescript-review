const button = document.querySelector("button");

// Type casting examples for these inputs
// The ! lets TS know the result won't be null and the element is casted as an HTML Input Element
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
