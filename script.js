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
    // Removes existing grids
    canvasGrids.innerHTML = "";
    // Change grid template styles so that all grids are squares
    changeGridTemplates(sideLength);
    // Adds grids
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

// Prompts user for new side length of canvas
function promptUserForSideLength() {
    let sideLength;
    // Continue prompting user for side length until valid or user exits prompt
    do {
        sideLength = prompt("Enter new side length");
    } while (sideLength && !isValidSideLength(sideLength))
    // If user didn't exit prompt, generate grids
    if (sideLength) {
        generateGrids(sideLength);
    }
}

// Change side lengths button will prompt user for side length when clicked
changeSideLengthButton.addEventListener("click", promptUserForSideLength);