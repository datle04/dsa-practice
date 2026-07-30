function pacificAtlantic(heights: number[][]): number[][] {
    let rows = heights.length;
    let cols = heights[0].length;

    let pac = new Set();
    let atl = new Set();

    function dfs(r, c, visit, prevHeight){
        if(r < 0 || c < 0 || r === rows || c === cols || visit.has(r + ',' + c) || heights[r][c] < prevHeight) return;
        
        visit.add(r + ',' + c);
        
        dfs(r + 1, c, visit, heights[r][c]);
        dfs(r - 1, c, visit, heights[r][c]);
        dfs(r, c + 1, visit, heights[r][c]);
        dfs(r, c - 1, visit, heights[r][c]);
    }

    for(let col = 0; col < cols; col++){
        dfs(0, col, pac, heights[0][col]);
        dfs(rows - 1, col, atl, heights[rows - 1][col]);
    }

    for(let row = 0; row < rows; row++){
        dfs(row, 0, pac, heights[row][0]);
        dfs(row, cols - 1, atl, heights[row][cols - 1]);
    }

    let res = [];

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            let s = r + ',' + c;
            if(pac.has(s) && atl.has(s)){
                res.push([r, c]);
            }
        }
    }

    return res;
};