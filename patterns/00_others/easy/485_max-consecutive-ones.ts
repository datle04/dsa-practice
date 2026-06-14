function findMaxConsecutiveOnes(nums: number[]): number {
    let left = 0;
    let right = 0;
    let max = 0;

    while(right < nums.length){
        if(nums[right] !== 1) left = right + 1;
        max = Math.max(max, right - left + 1);
        right++;
    }
    
    return max;
};