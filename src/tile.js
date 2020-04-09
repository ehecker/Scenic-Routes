import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    constructor(nodeValue, position, board) {
        this.position = position;
        this.board = board;

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);

        this.node = new PolyTreeNode(nodeValue, position, board); // This MUST come after this.tile's id is set

        this.setDraggingFunctions();
    }

    setDraggingFunctions() {
        let board = this.board;

        const handleDragStart = event => {
            console.log("Drag start fired")

            let tileId = event.target.id.split("-");
            let dragStartPos = [+tileId[0], +tileId[1]];
            board.lastNodeType = board.grid[dragStartPos[0]][dragStartPos[1]].node.value;
        }

        const handleDragEnter = event => {
            console.log("Drag enter fired")
            event.preventDefault()
        }

        const handleDragOver = event => {
            console.log("Drag over fired")
            event.preventDefault()
        }

        const handleDrop = event => {
            console.log("Drop fired")
            event.preventDefault();

            let tileId= event.target.id.split("-");
            let dragEndPos = [+tileId[0], +tileId[1]];

            if (board.lastNodeType === "root") {
                board.setRoot(dragEndPos)
            } else if (board.lastNodeType === "target") {
                board.setTarget(dragEndPos)
            } else if (board.lastNodeType === null) {
                // Logic for wall dragging here
            }
        }

        if (this.node.value === "root" || this.node.value === "target") {
            this.tile.addEventListener("dragstart", handleDragStart)
        } else {
            this.tile.addEventListener("dragenter", handleDragEnter)
            this.tile.addEventListener("dragover", handleDragOver)
            this.tile.addEventListener("drop", handleDrop)
        }
    }

}