function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    while(left < right){
        let mid = Math.floor((left + right) / 2);

        let totalTimes = 0;
        
        for(let i = 0; i < piles.length; i++){
            totalTimes += Math.ceil(piles[i] / mid);
        }

        if(totalTimes <= h){
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};