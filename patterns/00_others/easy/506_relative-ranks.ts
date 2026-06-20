function findRelativeRanks(score: number[]): string[] {
    let temp = score.toSorted((a,b) => b - a);
    let map = new Map();
    let res = [];

    for(let i = 0; i < score.length; i++){
        if(i === 0){
            map.set(temp[i], "Gold Medal")
        } else if (i === 1){
            map.set(temp[i], "Silver Medal")
        } else if (i === 2){
            map.set(temp[i], "Bronze Medal")
        } else {
            map.set(temp[i], (i + 1).toString());
        }
    }

    for(let i = 0; i < score.length; i++){
        res.push(map.get(score[i]));
    }

    return res;
};