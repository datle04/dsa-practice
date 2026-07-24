function numIslands(grid: string[][]): number {
    let rows = grid.length;
    let cols = grid[0].length;
    let res = 0;
    
    function dfsGrid(r: number, c: number){
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") return;

        grid[r][c] = "0";
        
        dfsGrid(r + 1, c);
        dfsGrid(r - 1, c);
        dfsGrid(r, c + 1);
        dfsGrid(r, c - 1);
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === "1"){
                res++;
                dfsGrid(r, c);
            }
        }
    }

    return res;
};