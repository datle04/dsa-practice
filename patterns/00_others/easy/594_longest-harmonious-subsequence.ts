function findLHS(nums: number[]): number {
    let left = 0;
    let right = 0;
    let max = 0;
    nums.sort((a, b) => a - b);

    while(right < nums.length){
        if(nums[right] - nums[left] === 1){
            max = Math.max(max, right - left + 1);
            right++;
        } else if (nums[right] - nums[left] > 1) {
            left++;
        } else {
            right++;
        }
    }

    return max;
};