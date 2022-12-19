/*
    HTML elements
*/
const changeDimensionsButton = document.querySelector(".change-dimensions-btn"); // Button to change canvas dimensions
const canvasGrids = document.querySelector(".canvas-grids"); // Div that contains grids
const colorSelector = document.querySelector(".color-selector"); // Color selector

const MAX_DIMENSION = 100; // Largest possible dimension for canvas

let mouseIsDown = false; // Whether or not the user is holding the mouse/trackpad button

// Adds grids to the canvas
function generateGrids(dimension) {
    canvasGrids.innerHTML = "";

    changeGridTemplates(dimension);

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            canvasGrids.appendChild(grid);
        }
    }
}

// Changes grid templates based on dimension. This function will make it so that every grid will be a square.
function changeGridTemplates(dimension) {
    canvasGrids.style["grid-template-columns"] = `repeat(${dimension}, auto)`;
    canvasGrids.style["grid-template-rows"] = `repeat(${dimension}, auto)`;
}

// Determines whether or not a dimension is within a valid range
function isValidDimension(dimension) {
    return dimension <= MAX_DIMENSION && dimension >= 1;
}

changeDimensionsButton.addEventListener("click", () => {
    let dimension;
    do {
        dimension = prompt("Enter new dimensions");
    } while (dimension && !isValidDimension(dimension))

    if (dimension) {
        generateGrids(dimension);
    }
});