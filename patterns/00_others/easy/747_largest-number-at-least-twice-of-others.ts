function dominantIndex(nums: number[]): number {
    let max = Math.max(...nums);

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === max) continue;
        if(Math.floor(max / nums[i]) < 2) return -1;
    }

    return nums.indexOf(max);
};