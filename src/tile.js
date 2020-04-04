import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    
    constructor(position, board) {
        this.position = position;
        this.board = board; // Do I actually need this?

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);

        this.node = new PolyTreeNode(null, position, board.grid);
        // this.addMovability();
    }

    // addGridListener() {
    //     this.grid.addeventListener()
    // }

    // addMovability() {
    //     if (this.node.value === "root" || this.node.value === "target") {
    //         this.tile.addEventListener("mousedown", () => {

    //         });

    //     }
    // }

    addPlaceWallListener() {
        
    }

    visit() {
        this.tile.classList.add("visited");
    }
    
    markFound() {
        this.tile.classList.add("target-found")
    }
}