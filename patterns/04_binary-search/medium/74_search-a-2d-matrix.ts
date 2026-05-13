function searchMatrix(matrix: number[][], target: number): boolean {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bot = rows - 1;

    while(top < bot){
        let row = Math.floor((top + bot) / 2);
        if(matrix[row][0] > target){
            bot = row - 1;
        } else if (matrix[row][cols - 1] < target){
            top = row + 1;
        } else {
            break;
        }
    }

    if(top > bot) return false;
    
    let row = Math.floor((top + bot) / 2);
    let left = 0;
    let right = cols - 1;

    while(left <= right){
        let mid = Math.floor((left + right)  / 2);
        if(matrix[row][mid] === target) return true;

        if(matrix[row][mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;

};