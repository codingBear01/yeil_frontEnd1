const main = document.querySelector("body");

let N = prompt("몇 층이요?");

const newFloor = document.createElement("div");
main.appendChild(newFloor);
newFloor.innerText = `${N}층`;

let pyramid = "*";
let sum = "";
for (let i = 1; i <= N; i++) {
  const newDiv = document.createElement("div");
  newDiv.innerText = sum += pyramid;
  main.appendChild(newDiv);
}
