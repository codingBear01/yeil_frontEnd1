const main = document.querySelector("body");

let N = prompt("몇 단이요?");

for (let i = 1; i <= 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${N} * ${i} = ${N * i}`;
  main.appendChild(newDiv);
}
