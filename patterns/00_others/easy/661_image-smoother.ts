function imageSmoother(img: number[][]): number[][] {
    const rows = img.length;
    const cols = img[0].length;
    const result: number[][] = [];

    for(let i = 0; i < rows; i++){
        result.push([]);
        for(let j = 0; j < cols; j++){
            let sum = 0;
            let count = 0;

            for(let di = -1; di <= 1; di++){
                for(let dj = -1; dj <= 1; dj++){
                    const ni = i + di;
                    const nj = j + dj;
                    if(ni >= 0 && ni < rows && nj >= 0 && nj < cols){
                        sum += img[ni][nj];
                        count++;
                    }
                }
            }

            result[i][j] = Math.floor(sum/count);
        }
    }

    return result;
};