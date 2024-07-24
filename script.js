const container = document.querySelector("#container");

// const gridOfDivs = document.createElement("div");
// gridOfDivs.className = "grid";
// container.appendChild(gridOfDivs);

// console.log(gridOfDivs);

for (let i = 0; i < 256; i++) {
  const gridOfDivs = document.createElement("div");
  gridOfDivs.className = "grid";
  container.appendChild(gridOfDivs);
}
