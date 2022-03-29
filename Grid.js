const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
  
// --grid-size: 4;
// --cell-size: 20vmin;
// --cell-gap: 2vmin;

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty('--grid-size', GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    createCellElement(gridElement);
  }
}

function createCellElement(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    const cell = document.createEkenent("div");
    cell.classList.add("cell");
    gridElement.append(cell)
  }

  return cells;
}