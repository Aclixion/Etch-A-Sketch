/*
    HTML elements
*/
const changeDimensionsButton = document.querySelector(".change-dimensions-btn"); // Button to change canvas dimensions
const canvasGrids = document.querySelector(".canvas-grids"); // Div that contains grids
const colorSelector = document.querySelector(".color-selector"); // Color selector

// Adds grids to the canvas
function generateGrids(dimension) {
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