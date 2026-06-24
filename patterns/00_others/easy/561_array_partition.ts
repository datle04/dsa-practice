function arrayPairSum(nums: number[]): number {
    let n = nums.length / 2;
    let sum = 0;
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if((i+1) >= 2 && (i+1) % 2 === 0){
            sum += nums[i - 1];
        }
    }

    return sum;
};