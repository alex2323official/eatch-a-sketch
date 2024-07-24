// 1. Create 16x16 DIVs grid
const container = document.querySelector("#container");
const body = document.querySelector("body");

// Add some CSS to body to center btn
body.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; justify-content: center;"
);

for (let i = 0; i < 256; i++) {
  const gridOfDivs = document.createElement("div");
  gridOfDivs.className = "grid";
  container.appendChild(gridOfDivs);
}

// 2. Add with JS hover background effect
// flex with event delegation / event bubbleingish thingish
container.addEventListener("mouseover", (e) => {
  e.target.setAttribute("style", "background-color: aqua;");
});

// 3. Create input for user -> how big grid you want
const btn = document.createElement("button");
btn.innerText = "Click to setup grid";
btn.setAttribute(
  "style",
  "margin: 20px 20px; padding: 10px 30px; background-color: rgb(224, 110, 110); font-weight: bold;"
);
body.prepend(btn);

// 4. Function to ask user how big grid should be and to reset grid with new settings
