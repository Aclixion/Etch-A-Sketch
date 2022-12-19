/*
    HTML elements
*/
const changeSideLengthButton = document.querySelector(".change-side-length-btn"); // Button to change canvas side length
const canvasGrids = document.querySelector(".canvas-grids"); // Div that contains grids
const colorSelector = document.querySelector(".color-selector"); // Color selector

const MAX_SIDE_LENGTH = 100; // Largest possible side length for canvas

// Adds a grid to canvas
function addGrid() {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.addEventListener("mouseover", changeColor);
    canvasGrids.appendChild(grid);
}

// Changes grid templates based on side length
function changeGridTemplates(sideLength) {
    canvasGrids.style["grid-template-columns"] = `repeat(${sideLength}, auto)`;
    canvasGrids.style["grid-template-rows"] = `repeat(${sideLength}, auto)`;
}

// Adds grids to the canvas
function generateGrids(sideLength) {
    canvasGrids.innerHTML = "";

    changeGridTemplates(sideLength);

    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            addGrid();
        }
    }
}

// Determines whether or not a side length is within a valid range
function isValidSideLength(sideLength) {
    return sideLength <= MAX_SIDE_LENGTH && sideLength >= 1;
}

// Change color of grid
function changeColor(event) {
    event.target.style["background-color"] = colorSelector.value;
}

// Sends a prompt to the user to enter a side length
function promptUserForSideLength() {
    let sideLength;
    do {
        sideLength = prompt("Enter new side length");
    } while (sideLength && !isValidSideLength(sideLength))

    if (sideLength) {
        generateGrids(sideLength);
    }
}

changeSideLengthButton.addEventListener("click", promptUserForSideLength);