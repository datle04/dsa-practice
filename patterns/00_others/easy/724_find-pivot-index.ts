function pivotIndex(nums: number[]): number {
    let arraySum = 0;
    for(let i = 0; i < nums.length; i++){
        arraySum += nums[i];
    }

    let prefixSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(prefixSum === (arraySum - prefixSum - nums[i])) return i;
        prefixSum += nums[i];
    }

    return -1;
};