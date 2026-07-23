function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;
    let rows = grid.length;
    let col = 0;
    let row = 0;
    let visited = new Set();

    function dfsGrid(r: number, c: number) {
        if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0){
            perimeter++;
            return;
        }
        let cord = `${r},${c}`
        if(visited.has(cord)) return;
        
        visited.add(cord);

        dfsGrid(r + 1, c);
        dfsGrid(r - 1, c);
        dfsGrid(r, c + 1);
        dfsGrid(r, c - 1);
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] === 1){
                dfsGrid(r, c);
                return perimeter;
            }
        }
    }

    return 0;
};